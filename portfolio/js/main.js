(function () {
  var raiz = document.documentElement;
  var boton = document.getElementById("tema");
  var anio = document.getElementById("anio");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  // Recupera el tema elegido en una visita anterior, si existe.
  try {
    var guardado = localStorage.getItem("tema");
    if (guardado === "light" || guardado === "dark") {
      raiz.setAttribute("data-theme", guardado);
    }
  } catch (e) {
    // Si el navegador bloquea el almacenamiento, se usa el tema del sistema.
  }

  function temaActual() {
    var elegido = raiz.getAttribute("data-theme");
    if (elegido) return elegido;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  if (boton) {
    boton.addEventListener("click", function () {
      var nuevo = temaActual() === "dark" ? "light" : "dark";
      raiz.setAttribute("data-theme", nuevo);
      try {
        localStorage.setItem("tema", nuevo);
      } catch (e) {}
    });
  }
})();