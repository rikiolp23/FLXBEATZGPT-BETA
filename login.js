function checkPassword() {
  const password = document.getElementById("password").value;
  const accesoCorrecto = "flxbeatz"; // Puedes cambiarla

  if (password === accesoCorrecto) {
    localStorage.setItem("authenticated", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error-message").textContent = "❌ Contraseña incorrecta.";
  }
}
