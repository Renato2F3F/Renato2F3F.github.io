window.onload = function () {
    var mySubmitButton = document.getElementById("Enviar")
    var forms = document.getElementsByClassName("needs-validation");
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() === false) {

            } else {
                mySubmitButton.innerHTML = "Reservado"
                mySubmitButton.disabled = true;
                fetch(form.action, { method: 'post', body : new FormData(form)})
                .then((response) => {
                    if (response.status == 200) {
                        // Agregamos una espera de 4 segundos para dar feedback al usuario..
                        setTimeout( () => {
                            mySubmitButton.innerHTML = "Enviar"
                            mySubmitButton.disabled = false;
                            form.reset()
                            form.classList.remove('was-validated'); 
                            window.location.href = window.location.reload;  // Recargar la página después de 5 segundos
                        }, 4000);
                    } else {
                        mySubmitButton.innerHTML = "Re-intentar"
                        mySubmitButton.disabled = false;
                    }
                    response.json()
                })
                .then(data => console.log(data))
            }
            form.classList.add('was-validated');
            //alert("Validando... y enviando a backend...")
            
        }, false);
    });
};

    document.addEventListener("DOMContentLoaded", function() {
    const reservaForm = document.getElementById("reserva-form");
    const confirmacion = document.getElementById("reserva-confirmacion");

    reservaForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const comensales = document.getElementById("comensales").value;
        const fecha = document.getElementById("fecha").value;
        const preferencia = document.querySelector('input[name="preferencia"]:checked').value;
        const nombreReserva = document.getElementById("nombre-reserva").value;

        document.getElementById("confirmacion-comensales").textContent = comensales;
        document.getElementById("confirmacion-fecha").textContent = fecha;
        document.getElementById("confirmacion-preferencia").textContent = preferencia;
        document.getElementById("confirmacion-nombre").textContent = nombreReserva;

        confirmacion.style.display = "block";

    });
});
