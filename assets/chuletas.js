/* =========================================================================
   Chuletario · comportamiento común de todas las páginas
   -------------------------------------------------------------------------
   Hace dos cosas:
     1. Cambiar entre tema claro y oscuro, recordando la elección.
     2. Añadir un botón "Copiar" a cada bloque de código.

   El fichero se carga con <script src="../assets/chuletas.js" defer>, así que
   se ejecuta cuando el HTML ya está listo.
   ========================================================================= */

(function () {
  'use strict';

  var raiz = document.documentElement;

  /* ---------- 1. Tema claro / oscuro ------------------------------------ */

  // Recupera la preferencia guardada. Puede fallar si el navegador tiene
  // bloqueado el almacenamiento, así que va dentro de un try.
  try {
    var guardado = localStorage.getItem('chuletario-tema');
    if (guardado) {
      raiz.dataset.modo = guardado;
    }
  } catch (e) { /* sin preferencia guardada: se usa la del sistema */ }

  // ¿Se está viendo en oscuro ahora mismo?
  function esOscuro() {
    if (raiz.dataset.modo) {
      return raiz.dataset.modo === 'oscuro';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  var botonTema = document.querySelector('[data-accion="tema"]');

  function actualizaEtiqueta() {
    if (botonTema) {
      botonTema.textContent = esOscuro() ? 'Tema claro' : 'Tema oscuro';
    }
  }

  if (botonTema) {
    botonTema.addEventListener('click', function () {
      raiz.dataset.modo = esOscuro() ? 'claro' : 'oscuro';
      try {
        localStorage.setItem('chuletario-tema', raiz.dataset.modo);
      } catch (e) { /* no se puede guardar: el cambio dura esta visita */ }
      actualizaEtiqueta();
    });
  }

  actualizaEtiqueta();

  /* ---------- 2. Botón de imprimir -------------------------------------- */

  var botonImprimir = document.querySelector('[data-accion="imprimir"]');

  if (botonImprimir) {
    botonImprimir.addEventListener('click', function () {
      window.print();
    });
  }

  /* ---------- 3. Copiar los bloques de código --------------------------- */

  document.querySelectorAll('figure.codigo').forEach(function (bloque) {
    var boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'copiar';
    boton.textContent = 'Copiar';

    boton.addEventListener('click', function () {
      var texto = bloque.querySelector('pre').innerText;

      function confirmado() {
        boton.textContent = 'Copiado';
        setTimeout(function () { boton.textContent = 'Copiar'; }, 1400);
      }

      // La API moderna solo funciona en contextos seguros (https o file://
      // según el navegador); si no está disponible, se usa el método clásico.
      function alternativa() {
        var area = document.createElement('textarea');
        area.value = texto;
        document.body.appendChild(area);
        area.select();
        try {
          document.execCommand('copy');
          confirmado();
        } catch (e) { /* el navegador no deja copiar */ }
        area.remove();
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto).then(confirmado, alternativa);
      } else {
        alternativa();
      }
    });

    bloque.appendChild(boton);
  });
})();
