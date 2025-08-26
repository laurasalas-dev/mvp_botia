// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");

  // Si existe formulario (index.html)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Obtener valores
      const nombre = document.getElementById("nombre").value;
      const empresa = document.getElementById("empresa").value;
      const respuesta1 = document.getElementById("respuesta1").value;
      const respuesta2 = document.getElementById("respuesta2").value;
      const respuesta3 = document.getElementById("respuesta3").value;

      // Guardar en localStorage
      const datos = {
        nombre,
        empresa,
        respuestas: { respuesta1, respuesta2, respuesta3 }
      };
      localStorage.setItem("formData", JSON.stringify(datos));

      // Redirigir a final.html
      window.location.href = "final.html";
    });
  }

  // Si estamos en final.html
  if (window.location.pathname.includes("final.html")) {
    const datos = JSON.parse(localStorage.getItem("formData"));

    if (datos) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.setFontSize(16);
      doc.text("Formulario Botia", 20, 20);
      doc.setFontSize(12);

      doc.text(`Nombre: ${datos.nombre}`, 20, 40);
      doc.text(`Empresa: ${datos.empresa}`, 20, 50);
      doc.text("Respuestas:", 20, 70);
      doc.text(`1. ${datos.respuestas.respuesta1}`, 30, 80);
      doc.text(`2. ${datos.respuestas.respuesta2}`, 30, 90);
      doc.text(`3. ${datos.respuestas.respuesta3}`, 30, 100);

      // Convertir a Blob para descargar
      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Asignar al link de descarga
      document.getElementById("downloadLink").href = pdfUrl;
    }
  }
});
