// Verifica que el usuario pasó por login
if (!localStorage.getItem("authenticated")) {
  window.location.href = "login.html";
}

// Efecto visual al reproducir canción
document.querySelectorAll("audio").forEach(audio => {
  audio.addEventListener("play", () => {
    console.log("🎵 Reproduciendo:", audio.querySelector("source").src);
    document.body.style.background = "radial-gradient(circle at center, #330033, #000)";
  });

  audio.addEventListener("pause", () => {
    document.body.style.background = "linear-gradient(135deg, #000000, #110022)";
  });
});

// Mensaje de bienvenida dinámico
window.addEventListener("DOMContentLoaded", () => {
  console.log("Bienvenido a FlxBeatzGPT");
  const subtitle = document.querySelector(".subtitle");
  subtitle.textContent = "Generando música... cargando inspiración 🎶";
  setTimeout(() => {
    subtitle.textContent = "Canciones generadas por tu maquina infernal artificial";
  }, 3000);
});
