window.onload = function () {
    var mySubmitButton = document.getElementById("contactar")
    var forms = document.getElementsByClassName("needs-validation");
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() === false) {

            } else {
                mySubmitButton.innerHTML = "Enviando..."
                mySubmitButton.disabled = true;
                fetch(form.action, { method: 'post', body : new FormData(form), mode : "cors"})
                .then((response) => {
                    if (response.status == 200) {
                        // Agregamos una espera de 3 segundos para dar feedback al usuario..
                        setTimeout( () => {
                            mySubmitButton.innerHTML = "Enviar"
                            mySubmitButton.disabled = false;
                            form.reset()
                            form.classList.remove('was-validated'); 
                            // Recarga la página después de 3 segundos
                            window.location.reload();     
                        }, 2000);
                    } else {
                        mySubmitButton.innerHTML = "Re-intentar"
                        mySubmitButton.disabled = false;
                    }
                    response.json()
                })
                .then(data => console.log(data))
                .catch(error => console.error('Error al enviar la solicitud:', error));
            }
            form.classList.add('was-validated');
            //alert("Validando... y enviando a backend...")    
        }, false);
    });
       
};

