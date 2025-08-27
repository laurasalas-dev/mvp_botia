document.addEventListener("DOMContentLoaded", () => {

    const inputNombre = document.getElementById("nombreUsuario");
    const btnSiguiente = document.getElementById("btnSiguiente");
    const mensajeError = document.getElementById("mensajeError");

    function validarYContinuar() {
        const nombre = inputNombre.value.trim();
        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

        if (nombre === "") {

            mensajeError.textContent = "Por favor ingresa tu nombre.";
            mensajeError.style.display = "block";

        } else if (!soloLetras.test(nombre)) {

            mensajeError.textContent = "El nombre solo puede contener letras.";
            mensajeError.style.display = "block";

        } else {

            mensajeError.style.display = "none";
            localStorage.setItem("nombreUsuario", nombre);
            window.location.href = "pages/inicio.html";
            
        }
    }

    // 👉 Eventos
    btnSiguiente.addEventListener("click", validarYContinuar);

    inputNombre.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            validarYContinuar();
        }
    });

});