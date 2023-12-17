from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

@app.route('/contact', methods=['POST'])
def reservar():
    nombre = request.form.get('nombre')
    apellido = request.form.get('apellido')
    email = request.form.get('email')
    telefono = request.form.get('telefono')
    descripcion = request.form.get('descripcion')

    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="123admin",
        database="contacto"
    )
    cursor = conn.cursor()

    cursor.execute('''
    INSERT INTO contacto_formulario (nombre, apellido, email, telefono, descripcion)
           VALUES (%s, %s, %s, %s, %s)
    ''', (nombre, apellido, email, telefono, descripcion))

    conn.commit()
    conn.close()

    print(f"Nombre: {nombre}, Apellido: {apellido}, Email: {email}, Telefono: {telefono}, Descripción: {descripcion}")

    return jsonify({"message": "Formulario recibido con éxito!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
