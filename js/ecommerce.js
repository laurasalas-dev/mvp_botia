document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formEcommerce");
    const inputs = form.querySelectorAll("input, select, textarea");
    const mensajeError = document.getElementById("mensajeError");
    const btnFinalizar = document.getElementById("btnFinalizar");

    // Recuperar datos de localStorage
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

    // Generar PDF y redirigir
    btnFinalizar.addEventListener("click", () => {
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

        // Crear PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const data = {
            empresa: document.getElementById("empresa").value,
            categoria: document.getElementById("categoria").value,
            publico: document.getElementById("publico").value,
            productos: document.getElementById("productos").value,
            variaciones: document.getElementById("variaciones").value,
            infoProducto: document.getElementById("infoProducto").value,
            fotos: document.getElementById("fotos").value,
            flujo: document.getElementById("flujo").value,
            pagos: document.getElementById("pagos").value,
            envios: document.getElementById("envios").value,
            devoluciones: document.getElementById("devoluciones").value,
            faq: document.getElementById("faq").value,
            soporte: document.getElementById("soporte").value
        };

        doc.text("Resumen de formulario E-commerce", 10, 10);

        let y = 20;
        const lineHeight = 10;

        for (const [pregunta, respuesta] of Object.entries({
            "¿Cuál es el nombre de tu empresa y tu tienda online?": data.empresa,
            "¿En qué categoría o rubro se encuentran tus productos?": data.categoria,
            "¿Cuál es tu público objetivo principal?": data.publico,
            "¿Cuántos productos tienes actualmente en tu catálogo?": data.productos,
            "¿Tus productos tienen variaciones?": data.variaciones,
            "¿Qué información mínima debe mostrar cada producto?": data.infoProducto,
            "¿Tienes fotos y descripciones listas para subir al sistema?": data.fotos,
            "¿Cuál es el flujo actual de compra de un cliente?": data.flujo,
            "¿Qué métodos de pago aceptas?": data.pagos,
            "¿Cuál es tu política de envíos?": data.envios,
            "¿Cuál es tu política de devoluciones o cambios?": data.devoluciones,
            "¿Qué dudas frecuentes tienen tus clientes antes de comprar?": data.faq,
            "¿En qué canales brindas soporte actualmente?": data.soporte
        })) {
            doc.text([pregunta, respuesta], 10, y);
            y += lineHeight * 2;
        }

        
        doc.save("formulario_ecommerce.pdf");

        
        localStorage.clear();
        form.reset();
        btnFinalizar.disabled = true;

     
        setTimeout(() => {
            window.location.href = "final.html";
        }, 500);
    });
});