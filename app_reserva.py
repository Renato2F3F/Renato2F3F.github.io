from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)

@app.route('/reserva', methods=['POST'])
def reservar():
    comensales = request.form.get('comensales')
    fecha = request.form.get('fecha')
    preferencia = request.form.get('preferencia')
    nombre_reserva = request.form.get('cliente')

    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="123admin",
        database="reservaciones"
    )
    cursor = conn.cursor()

    cursor.execute('''
    INSERT INTO reservas (comensales, fecha, preferencia, nombre_reserva)
           VALUES (%s, %s, %s, %s)
    ''', (comensales, fecha, preferencia, nombre_reserva))

    conn.commit()
    conn.close()

    print(f"Comensales: {comensales}, Fecha: {fecha}, Preferencia: {preferencia}, Nombre: {nombre_reserva}")

    return jsonify({"message": "Reserva recibida con éxito!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
