document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formServicios");
    const inputs = form.querySelectorAll("input, select, textarea");
    const mensajeError = document.getElementById("mensajeError");
    const btnFinalizar = document.getElementById("btnFinalizar");

    // Recuperar datos guardados en localStorage
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue) input.value = savedValue;
    });

    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            localStorage.setItem(input.id, input.value.trim());
            validarFormulario();
        });

        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const formElements = Array.from(inputs);
                const index = formElements.indexOf(input);
                if (index >= 0 && index < formElements.length - 1) {
                    formElements[index + 1].focus();
                }
            }
        });
    });

    function validarFormulario() {
        let valido = true;
        mensajeError.textContent = "";

        inputs.forEach(input => {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                valido = false;
            }
        });

        if (!valido) {
            mensajeError.textContent = "⚠️ Completa todos los campos obligatorios.";
        }

        btnFinalizar.disabled = !valido;
    }

    // Envío del formulario y generación de PDF
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valido = true;
        inputs.forEach(input => {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                valido = false;
            }
        });

        if (!valido) {
            mensajeError.textContent = "⚠️ Completa todos los campos obligatorios.";
            return;
        }

        // Crear PDF después de la validación
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const data = {
            empresa: document.getElementById("empresa").value,
            tipoServicio: document.getElementById("tipoServicio").value,
            publico: document.getElementById("publico").value,
            automatizar: document.getElementById("automatizar").value,
            infoCliente: document.getElementById("infoCliente").value,
            pasosPrevios: document.getElementById("pasosPrevios").value,
            reservas: document.getElementById("reservas").value,
            fotos: document.getElementById("fotos").value,
            metodosPago: document.getElementById("metodosPago").value,
            politica: document.getElementById("politica").value,
            faq: document.getElementById("faq").value,
            canales: document.getElementById("canales").value
        };

        doc.text("Resumen de formulario de servicios", 10, 10);

        let y = 20;
        const lineHeight = 10;

        for (const [pregunta, respuesta] of Object.entries({
            "¿Cuál es el nombre de tu empresa/servicio?": data.empresa,
            "¿Qué tipo de servicio ofreces?": data.tipoServicio,
            "¿Quién es tu público objetivo?": data.publico,
            "¿Qué procesos te gustaría automatizar?": data.automatizar,
            "¿Qué información necesitas recopilar de tus clientes?": data.infoCliente,
            "¿Qué pasos previos debe seguir un cliente antes de contratar tu servicio?": data.pasosPrevios,
            "¿Cómo gestionas actualmente las reservas o citas?": data.reservas,
            "¿Necesitas mostrar disponibilidad de horarios en tiempo real?": data.fotos,
            "¿Qué métodos de pago aceptas?": data.metodosPago,
            "¿Tienes alguna política de cancelación o reembolso?": data.politica,
            "¿Qué preguntas frecuentes tienen tus clientes?": data.faq,
            "¿En qué canales atiendes a tus clientes?": data.canales
        })) {
            doc.text([pregunta, respuesta], 10, y);
            y += lineHeight * 2;
        }

        doc.save("formulario.pdf");

       
        alert("✅ Formulario completado correctamente y PDF descargado.");
        localStorage.clear();
        form.reset();
        btnFinalizar.disabled = true;

      
        window.location.href = "final.html";
    });
});