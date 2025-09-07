(function () {
  emailjs.init("-JAh93vGlHKJqt8hd");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contacto form");
  const btn = form.querySelector("button");
  
  // span para mostrar mensajes debajo del botón
  const statusMsg = document.createElement("span");
  statusMsg.style.display = "block";
  statusMsg.style.marginTop = "10px";
  statusMsg.style.fontSize = "14px";
  form.appendChild(statusMsg);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btn.textContent = "Enviando...";
    btn.disabled = true;
    statusMsg.textContent = ""; // Limpia mensaje anterior

    emailjs.sendForm("service_1xl97qh", "template_f8sgz1g", this)
      .then(() => {
        btn.textContent = "Enviar";
        btn.disabled = false;
        statusMsg.textContent = "✅ Mensaje enviado con éxito!";
        statusMsg.style.color = "lightgreen";

        form.reset();

        // Borra el mensaje después de 5 segundos
        setTimeout(() => {
          statusMsg.textContent = "";
        }, 5000);
      })
      .catch((err) => {
        btn.textContent = "Enviar";
        btn.disabled = false;
        statusMsg.textContent = "❌ Error al enviar: " + err.text;
        statusMsg.style.color = "red";

        // Borra el mensaje después de 5 segundos
        setTimeout(() => {
          statusMsg.textContent = "";
        }, 5000);
      });
  });
});
