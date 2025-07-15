function actualizarRamos() {
  document.querySelectorAll(".ramo[data-depende-de]").forEach((ramo) => {
    const idPadre = ramo.getAttribute("data-depende-de");
    const ramoPadre = document.getElementById(idPadre);
    const activo = ramoPadre.classList.contains("tachado");

    if (activo) {
      ramo.classList.remove("bloqueado");
    } else {
      ramo.classList.add("bloqueado");
      ramo.classList.remove("tachado");
    }
  });
}

document.querySelectorAll(".ramo").forEach((ramo) => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    ramo.classList.toggle("tachado");
    actualizarRamos();
  });
});

actualizarRamos();
