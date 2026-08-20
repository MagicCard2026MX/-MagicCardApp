/* =========================================
   CARTA SELECCIONADA
   ========================================= */

let cartaSeleccionada = null;


/* =========================================
   VARIABLES
   ========================================= */

let toques = 0;

let moviendoMarker = false;

let cartaLista = false;

let cartaEnganchada = false;

let cartaBajando = false;


/* =========================================
   MEDIDAS
   ========================================= */

const CARTA_ANCHO = 300;
const CARTA_ALTO = 428;

const TAMANO_TRAZO = 34;


/* =========================================
   PINTURA
   ========================================= */

let zonasPintadas = new Set();

let ultimaPuntaX = null;
let ultimaPuntaY = null;


/* =========================================
   TOQUES SECRETOS
   ========================================= */

let toquesSecretos = 0;

let ultimoToqueSecreto = 0;

let tiempoToqueSecreto;


/* =========================================
   ESCENARIO
   ========================================= */

const stage =
  document.getElementById("stage");


/* =========================================
   PREPARAR CARTA
   ========================================= */

function prepararImagenDeCarta() {

  const frente =
    document.querySelector(".card-front");

  if (!frente) return;

  let imagen =
    document.getElementById(
      "selectedCardImage"
    );

  if (!imagen) {

    imagen =
      document.createElement("img");

    imagen.id =
      "selectedCardImage";

    imagen.draggable =
      false;

    imagen.style.position =
      "absolute";

    imagen.style.top =
      "0";

    imagen.style.left =
      "0";

    imagen.style.width =
      "100%";

    imagen.style.height =
      "100%";

    imagen.style.objectFit =
      "fill";

    imagen.style.display =
      "block";

    imagen.style.pointerEvents =
      "none";

    frente.appendChild(
      imagen
    );
  }

  const esquina =
    document.getElementById(
      "cardCorner"
    );

  const centro =
    document.getElementById(
      "cardCenter"
    );

  if (esquina)
    esquina.style.display =
      "none";

  if (centro)
    centro.style.display =
      "none";
}


/* =========================================
   TOCAR ESCENARIO
   ========================================= */

stage.addEventListener(
  "click",
  function(e) {

    if (
      e.clientX <= 80 &&
      e.clientY <= 80
    ) {
      return;
    }

    if (
      e.target ===
      document.getElementById(
        "marker"
      )
    ) {
      return;
    }

    pescar();
  }
);


/* =========================================
   3 TOQUES SECRETOS
   ========================================= */

document.addEventListener(
  "pointerdown",
  function(e) {

    if (
      e.clientX <= 80 &&
      e.clientY <= 80
    ) {

      e.preventDefault();
      e.stopPropagation();

      const ahora =
        Date.now();

      if (
        ahora -
        ultimoToqueSecreto >
        700
      ) {
        toquesSecretos = 0;
      }

      ultimoToqueSecreto =
        ahora;

      toquesSecretos++;

      clearTimeout(
        tiempoToqueSecreto
      );

      if (
        toquesSecretos === 3
      ) {

        abrirCartasSecretas();

        toquesSecretos = 0;

        ultimoToqueSecreto = 0;

        return;
      }

      tiempoToqueSecreto =
        setTimeout(
          function() {

            toquesSecretos = 0;

            ultimoToqueSecreto = 0;

          },
          700
        );
    }

  },
  true
);


/* =========================================
   REINICIAR JUEGO
   ========================================= */

function reiniciarJuego() {

  const hook =
    document.getElementById("hook");

  const rope =
    document.getElementById("rope");

  const card =
    document.getElementById("card");

  const cardStack =
    document.querySelector(".card-stack");

  const marker =
    document.getElementById("marker");

  const redCard =
    document.getElementById("redCard");


  toques = 0;

  cartaLista = false;

  cartaEnganchada = false;

  cartaBajando = false;


  ultimaPuntaX = null;

  ultimaPuntaY = null;


  cardStack.classList.remove(
    "revealed"
  );


  hook.style.top =
    "65px";

  rope.style.height =
    "80px";

  card.style.top =
    "110%";


  marker.style.display =
    "none";

  marker.style.right =
    "-165px";

  marker.style.left =
    "";

  marker.style.top =
    "45%";


  zonasPintadas.clear();


  const pinturas =
    redCard.querySelectorAll(
      ".pintura-azul"
    );


  pinturas.forEach(
    function(pintura) {
      pintura.remove();
    }
  );


  redCard.style.display =
    "block";
}


/* =========================================
   ABRIR CARTAS SECRETAS
   ========================================= */

function abrirCartasSecretas() {

  reiniciarJuego();

  const panel =
    document.getElementById(
      "cartasSecretas"
    );

  panel.style.display =
    "block";

  crearTodasLasCartas();
}


/* =========================================
   CREAR 52 CARTAS
   ========================================= */

function crearTodasLasCartas() {

  const lista =
    document.getElementById(
      "listaCartas"
    );

  lista.innerHTML = "";


  cartas.forEach(
    function(carta) {

      const elemento =
        document.createElement(
          "div"
        );

      elemento.className =
        "carta-opcion";


      const imagen =
        document.createElement(
          "img"
        );

      imagen.src =
        imagenesCartas[carta];

      imagen.alt =
        carta;

      imagen.draggable =
        false;


      elemento.appendChild(
        imagen
      );


      elemento.addEventListener(
        "click",
        function(e) {

          e.stopPropagation();

          seleccionarCarta(
            carta
          );

        }
      );


      lista.appendChild(
        elemento
      );

    }
  );
}


/* =========================================
   SELECCIONAR CARTA
   ========================================= */

function seleccionarCarta(carta) {

  cartaSeleccionada =
    carta;

  prepararImagenDeCarta();


  const imagen =
    document.getElementById(
      "selectedCardImage"
    );


  if (
    imagen &&
    imagenesCartas[carta]
  ) {

    imagen.src =
      imagenesCartas[carta];

    imagen.alt =
      carta;
  }


  cerrarCartasSecretas();
}


/* =========================================
   CERRAR APARTADO
   ========================================= */

function cerrarCartasSecretas() {

  const panel =
    document.getElementById(
      "cartasSecretas"
    );

  if (panel) {

    panel.style.display =
      "none";
  }
}


/* =========================================
   FUNCIÓN PRINCIPAL
   ========================================= */

function pescar() {

  toques++;


  const hook =
    document.getElementById("hook");

  const rope =
    document.getElementById("rope");

  const card =
    document.getElementById("card");

  const cardStack =
    document.querySelector(".card-stack");

  const marker =
    document.getElementById("marker");


  /* TOQUE 2 */

  if (toques === 2) {

    hook.style.top =
      "110%";

    rope.style.height =
      "110%";

    card.style.top =
      "110%";


    setTimeout(
      function() {

        hook.style.top =
          "65px";

        rope.style.height =
          "80px";

        card.style.top =
          "110px";

      },
      2200
    );
  }


  /* TOQUE 3 */

  else if (toques === 3) {

    hook.style.top =
      "-100px";

    rope.style.height =
      "0px";
  }


  /* TOQUE 4 */

  else if (toques === 4) {

    cardStack.classList.add(
      "revealed"
    );
  }


  /* TOQUE 5 */

  else if (toques === 5) {

    cardStack.classList.remove(
      "revealed"
    );
  }


  /* TOQUE 6 */

  else if (toques === 6) {

    reiniciarPintura();

    marker.style.display =
      "block";


    setTimeout(
      function() {

        marker.style.right =
          "25px";

      },
      50
    );
  }


  /* TOQUE 7 */

  else if (
    toques === 7 &&
    cartaLista
  ) {

    engancharCarta();
  }


  /* TOQUE 8 */

  else if (
    toques === 8 &&
    cartaEnganchada
  ) {

    bajarCarta();
  }
}


/* =========================================
   TOCAR PLUMÓN
   ========================================= */

document.addEventListener(
  "pointerdown",
  function(e) {

    const marker =
      document.getElementById(
        "marker"
      );


    if (
      marker.style.display !==
      "block"
    )
      return;


    if (
      e.target !== marker
    )
      return;


    moviendoMarker =
      true;


    ultimaPuntaX = null;

    ultimaPuntaY = null;


    e.preventDefault();

    e.stopPropagation();

  }
);


/* =========================================
   MOVER PLUMÓN
   ========================================= */

document.addEventListener(
  "pointermove",
  function(e) {

    if (!moviendoMarker)
      return;


    const marker =
      document.getElementById(
        "marker"
      );

    const stage =
      document.getElementById(
        "stage"
      );

    const card =
      document.getElementById(
        "card"
      );


    const stageRect =
      stage.getBoundingClientRect();


    const dedoX =
      e.clientX -
      stageRect.left;

    const dedoY =
      e.clientY -
      stageRect.top;


    /*
     * LA PUNTA DEL PLUMÓN
     * COINCIDE CON EL DEDO.
     */

    const puntaX =
      dedoX;

    const puntaY =
      dedoY;


    /*
     * EL CUERPO DEL PLUMÓN
     * QUEDA A LA DERECHA DEL DEDO.
     */

    marker.style.left =
      (dedoX + 30) +
      "px";

    marker.style.top =
      (dedoY - 11) +
      "px";

    marker.style.right =
      "auto";


    const cardRect =
      card.getBoundingClientRect();


    const cardX =
      cardRect.left -
      stageRect.left;

    const cardY =
      cardRect.top -
      stageRect.top;


    if (
      puntaX >= cardX &&
      puntaX <=
        cardX +
        cardRect.width &&
      puntaY >= cardY &&
      puntaY <=
        cardY +
        cardRect.height
    ) {

      const x =
        puntaX -
        cardX;

      const y =
        puntaY -
        cardY;


      /*
       * SI EXISTE UNA POSICIÓN
       * ANTERIOR, CREAMOS UN TRAZO
       * CONTINUO ENTRE AMBAS.
       */

      if (
        ultimaPuntaX !== null &&
        ultimaPuntaY !== null
      ) {

        dibujarLinea(
          ultimaPuntaX,
          ultimaPuntaY,
          x,
          y
        );

      }
      else {

        pintarCarta(
          x,
          y
        );

      }


      ultimaPuntaX =
        x;

      ultimaPuntaY =
        y;

    }
    else {

      /*
       * Al salir de la carta
       * guardamos la posición nueva
       * solamente si no hay salto
       * demasiado grande.
       */

      ultimaPuntaX = null;

      ultimaPuntaY = null;
    }


    e.preventDefault();

    e.stopPropagation();

  }
);


/* =========================================
   DIBUJAR LÍNEA CONTINUA
   ========================================= */

function dibujarLinea(
  x1,
  y1,
  x2,
  y2
) {

  const distancia =
    Math.hypot(
      x2 - x1,
      y2 - y1
    );


  const pasos =
    Math.max(
      1,
      Math.ceil(
        distancia /
        10
      )
    );


  for (
    let i = 1;
    i <= pasos;
    i++
  ) {

    const porcentaje =
      i /
      pasos;


    const x =
      x1 +
      (x2 - x1) *
      porcentaje;


    const y =
      y1 +
      (y2 - y1) *
      porcentaje;


    pintarCarta(
      x,
      y
    );
  }
}


/* =========================================
   PINTAR CARTA
   ========================================= */

function pintarCarta(
  x,
  y
) {

  const redCard =
    document.getElementById(
      "redCard"
    );


  x = Math.max(
    0,
    Math.min(
      CARTA_ANCHO,
      x
    )
  );


  y = Math.max(
    0,
    Math.min(
      CARTA_ALTO,
      y
    )
  );


  const columna =
    Math.floor(
      x /
      TAMANO_TRAZO
    );


  const fila =
    Math.floor(
      y /
      TAMANO_TRAZO
    );


  const clave =
    columna +
    "_" +
    fila;


  if (
    zonasPintadas.has(
      clave
    )
  ) {
    return;
  }


  zonasPintadas.add(
    clave
  );


  const pintura =
    document.createElement(
      "div"
    );


  pintura.className =
    "pintura-azul";


  pintura.style.left =
    x + "px";


  pintura.style.top =
    y + "px";


  pintura.style.backgroundPosition =
    (-x + 17) +
    "px " +
    (-y + 17) +
    "px";


  redCard.appendChild(
    pintura
  );


  revisarCarta();
}


/* =========================================
   REVISAR COBERTURA
   ========================================= */

function revisarCarta() {

  const columnas =
    Math.ceil(
      CARTA_ANCHO /
      TAMANO_TRAZO
    );


  const filas =
    Math.ceil(
      CARTA_ALTO /
      TAMANO_TRAZO
    );


  const total =
    columnas *
    filas;


  const cobertura =
    zonasPintadas.size /
    total;


  if (
    cobertura >= 0.80
  ) {

    terminarTransformacion();
  }
}


/* =========================================
   REINICIAR PINTURA
   ========================================= */

function reiniciarPintura() {

  const redCard =
    document.getElementById(
      "redCard"
    );


  zonasPintadas.clear();


  ultimaPuntaX = null;

  ultimaPuntaY = null;


  const pinturas =
    redCard.querySelectorAll(
      ".pintura-azul"
    );


  pinturas.forEach(
    function(pintura) {

      pintura.remove();

    }
  );


  redCard.style.display =
    "block";


  cartaLista =
    false;
}


/* =========================================
   TERMINAR TRANSFORMACIÓN
   ========================================= */

function terminarTransformacion() {

  if (cartaLista)
    return;


  cartaLista =
    true;


  const marker =
    document.getElementById(
      "marker"
    );

  const redCard =
    document.getElementById(
      "redCard"
    );

  const cardStack =
    document.querySelector(
      ".card-stack"
    );


  marker.style.display =
    "none";


  redCard.style.display =
    "none";


  setTimeout(
    function() {

      cardStack.classList.add(
        "revealed"
      );

    },
    500
  );
}


/* =========================================
   ENGANCHAR CARTA
   ========================================= */

function engancharCarta() {

  const hook =
    document.getElementById(
      "hook"
    );

  const rope =
    document.getElementById(
      "rope"
    );


  cartaEnganchada =
    true;


  hook.style.top =
    "65px";


  rope.style.height =
    "80px";
}


/* =========================================
   BAJAR CARTA
   ========================================= */

function bajarCarta() {

  if (
    cartaBajando
  )
    return;


  cartaBajando =
    true;


  const card =
    document.getElementById(
      "card"
    );

  const hook =
    document.getElementById(
      "hook"
    );

  const rope =
    document.getElementById(
      "rope"
    );


  hook.style.top =
    "110%";


  rope.style.height =
    "110%";


  card.style.top =
    "110%";


  setTimeout(
    function() {

      card.style.top =
        "110%";

      hook.style.top =
        "65px";

      rope.style.height =
        "80px";

    },
    3500
  );
}


/* =========================================
   SOLTAR PLUMÓN
   ========================================= */

document.addEventListener(
  "pointerup",
  function() {

    moviendoMarker =
      false;

    ultimaPuntaX =
      null;

    ultimaPuntaY =
      null;

  }
);


/* =========================================
   CANCELAR
   ========================================= */

document.addEventListener(
  "pointercancel",
  function() {

    moviendoMarker =
      false;

    ultimaPuntaX =
      null;

    ultimaPuntaY =
      null;

  }
);


/* =========================================
   PREPARAR AL CARGAR
   ========================================= */

prepararImagenDeCarta();
