/* =========================================
   BARAJA COMPLETA
   ========================================= */

const cartas = [

  "A♥", "2♥", "3♥", "4♥", "5♥",
  "6♥", "7♥", "8♥", "9♥", "10♥",
  "J♥", "Q♥", "K♥",

  "A♦", "2♦", "3♦", "4♦", "5♦",
  "6♦", "7♦", "8♦", "9♦", "10♦",
  "J♦", "Q♦", "K♦",

  "A♣", "2♣", "3♣", "4♣", "5♣",
  "6♣", "7♣", "8♣", "9♣", "10♣",
  "J♣", "Q♣", "K♣",

  "A♠", "2♠", "3♠", "4♠", "5♠",
  "6♠", "7♠", "8♠", "9♠", "10♠",
  "J♠", "Q♠", "K♠"

];


/* =========================================
   IMÁGENES DE LAS 52 CARTAS
   ========================================= */

const imagenesCartas = {

  "A♥": "https://i.ibb.co/ynqGcGbd/IMG-8306.png",
  "2♥": "https://i.ibb.co/LhP2r644/IMG-8356.jpg",
  "3♥": "https://i.ibb.co/JwHhdrrF/IMG-8325.jpg",
  "4♥": "https://i.ibb.co/9m64x4JT/IMG-8326.jpg",
  "5♥": "https://i.ibb.co/6cdhzX50/IMG-8327.jpg",
  "6♥": "https://i.ibb.co/ymRF2SyN/IMG-8328.jpg",
  "7♥": "https://i.ibb.co/fdBGLcM9/IMG-8307.jpg",
  "8♥": "https://i.ibb.co/fzpjGPZJ/IMG-8329.jpg",
  "9♥": "https://i.ibb.co/KxsyX4Wz/IMG-8330.jpg",
  "10♥": "https://i.ibb.co/q3ZsPj3y/IMG-8331.jpg",
  "J♥": "https://i.ibb.co/nsCLRwSt/IMG-8313.jpg",
  "Q♥": "https://i.ibb.co/B5d2zv82/IMG-8319.png",
  "K♥": "https://i.ibb.co/Mxjz673J/IMG-8316.jpg",

  "A♦": "https://i.ibb.co/Z1vchJkr/IMG-8305.jpg",
  "2♦": "https://i.ibb.co/fV50g6Kw/IMG-8332.jpg",
  "3♦": "https://i.ibb.co/xtXj8DXK/IMG-8333.jpg",
  "4♦": "https://i.ibb.co/b5Bk4Kr8/IMG-8334.jpg",
  "5♦": "https://i.ibb.co/Nd7BrTJ2/IMG-8335.jpg",
  "6♦": "https://i.ibb.co/nMK42bBD/IMG-8336.jpg",
  "7♦": "https://i.ibb.co/JFqL2CPN/IMG-8308.jpg",
  "8♦": "https://i.ibb.co/vxrqj465/IMG-8337.jpg",
  "9♦": "https://i.ibb.co/bj8XGqfm/IMG-8338.jpg",
  "10♦": "https://i.ibb.co/84SyF7kH/IMG-8339.jpg",
  "J♦": "https://i.ibb.co/0V8jB6NW/IMG-8314.jpg",
  "Q♦": "https://i.ibb.co/k2m0CxJK/IMG-8322.jpg",
  "K♦": "https://i.ibb.co/fV1jpf14/IMG-8315.jpg",

  "A♣": "https://i.ibb.co/bgP0xhYq/IMG-8304.jpg",
  "2♣": "https://i.ibb.co/bRyN8f8B/IMG-8340.jpg",
  "3♣": "https://i.ibb.co/wrrW7xHY/IMG-8341.jpg",
  "4♣": "https://i.ibb.co/MxP84Gvw/IMG-8342.jpg",
  "5♣": "https://i.ibb.co/sJQGz98z/IMG-8343.jpg",
  "6♣": "https://i.ibb.co/3yX5j1bS/IMG-8344.jpg",
  "7♣": "https://i.ibb.co/QvzDT0rn/IMG-8309.jpg",
  "8♣": "https://i.ibb.co/mCP1F1f1/IMG-8345.jpg",
  "9♣": "https://i.ibb.co/RTffVZdN/IMG-8346.jpg",
  "10♣": "https://i.ibb.co/h1sgFHN8/IMG-8347.jpg",
  "J♣": "https://i.ibb.co/twNLs599/IMG-8311.jpg",
  "Q♣": "https://i.ibb.co/Kcqc8jDN/IMG-8320.jpg",
  "K♣": "https://i.ibb.co/mFVL8T16/IMG-8317.jpg",

  "A♠": "https://i.ibb.co/27PGfH8T/IMG-8303.jpg",
  "2♠": "https://i.ibb.co/wj5Vc5s/IMG-8357.jpg",
  "3♠": "https://i.ibb.co/Cpy4Bcx5/IMG-8359.jpg",
  "4♠": "https://i.ibb.co/wZgLwm7r/IMG-8360.jpg",
  "5♠": "https://i.ibb.co/20CF3RpQ/IMG-8351.jpg",
  "6♠": "https://i.ibb.co/qMCM3s8Q/IMG-8352.jpg",
  "7♠": "https://i.ibb.co/9mr4C8nD/IMG-8310.webp",
  "8♠": "https://i.ibb.co/chp9vDq1/IMG-8353.jpg",
  "9♠": "https://i.ibb.co/ycjrfRkC/IMG-8354.jpg",
  "10♠": "https://i.ibb.co/mV8Mk70x/IMG-8355.jpg",
  "J♠": "https://i.ibb.co/zh1bKyHx/IMG-8323.jpg",
  "Q♠": "https://i.ibb.co/d0Ck6jHY/IMG-8321.jpg",
  "K♠": "https://i.ibb.co/ymftXVsY/IMG-8318.jpg"

};


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
   PINTURA
   ========================================= */

let zonasPintadas = new Set();

const TAMANO_ZONA = 12;


/*
 * NUEVO:
 * TAMAÑO DE LA BROCHA
 *
 * Una brocha grande permite cubrir
 * la carta en aproximadamente 6 pasadas.
 */

const TAMANO_BROCHA = 72;


/*
 * Última posición de la punta.
 * Sirve para que la pintura siga el
 * movimiento aunque el dedo se mueva rápido.
 */

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
   CREAR IMAGEN DEL FRENTE
   ========================================= */

function prepararImagenDeCarta() {

  const frente =
    document.querySelector(".card-front");

  if (!frente)
    return;

  let imagen =
    document.getElementById("selectedCardImage");

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

    imagen.style.borderRadius =
      "14px";

    imagen.style.display =
      "block";

    imagen.style.pointerEvents =
      "none";

    imagen.style.zIndex =
      "1";

    frente.appendChild(imagen);
  }

  const esquina =
    document.getElementById("cardCorner");

  const centro =
    document.getElementById("cardCenter");

  if (esquina)
    esquina.style.display = "none";

  if (centro)
    centro.style.display = "none";
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
    )
      return;

    if (
      e.target ===
      document.getElementById("marker")
    )
      return;

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
      )
        toquesSecretos = 0;

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

  hook.style.top = "65px";
  rope.style.height = "80px";
  card.style.top = "110%";

  marker.style.display = "none";
  marker.style.right = "-200px";
  marker.style.left = "";
  marker.style.top = "45%";

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

  redCard.style.display = "block";
}


/* =========================================
   ABRIR APARTADO
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
   CREAR LAS 52 CARTAS
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


  else if (toques === 3) {

    hook.style.top =
      "-100px";

    rope.style.height =
      "0px";

  }


  else if (toques === 4) {

    cardStack.classList.add(
      "revealed"
    );

  }


  else if (toques === 5) {

    cardStack.classList.remove(
      "revealed"
    );

  }


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


  else if (
    toques === 7 &&
    cartaLista
  ) {

    engancharCarta();

  }


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

    moviendoMarker = true;

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


    marker.style.left =
      (dedoX - 75) +
      "px";

    marker.style.top =
      (dedoY - 18) +
      "px";

    marker.style.right =
      "auto";


    /*
     * LA PUNTA SIGUE ESTANDO EN EL MISMO
     * LUGAR QUE YA FUNCIONABA PARA EL DEDO.
     */

    const puntaX =
      dedoX - 35;

    const puntaY =
      dedoY - 7;


    const cardRect =
      card.getBoundingClientRect();

    const cardX =
      cardRect.left -
      stageRect.left;

    const cardY =
      cardRect.top -
      stageRect.top;


    const x =
      puntaX - cardX;

    const y =
      puntaY - cardY;


    /*
     * SI ESTÁ DENTRO DE LA CARTA,
     * AHORA PINTAMOS COMO BROCHA.
     */

    if (

      puntaX >= cardX &&
      puntaX <= cardX + cardRect.width &&
      puntaY >= cardY &&
      puntaY <= cardY + cardRect.height

    ) {

      /*
       * Si es el primer punto,
       * pintamos directamente.
       */

      if (
        ultimaPuntaX === null
      ) {

        pintarBrocha(
          x,
          y
        );

      }

      /*
       * Si ya había un punto anterior,
       * pintamos toda la línea entre ambos.
       * Esto evita huecos al mover rápido.
       */

      else {

        pintarLineaBrocha(
          ultimaPuntaX,
          ultimaPuntaY,
          x,
          y
        );

      }


      ultimaPuntaX = x;
      ultimaPuntaY = y;

    }


    e.preventDefault();
    e.stopPropagation();

  }
);


/* =========================================
   BROCHA
   ========================================= */

function pintarBrocha(x, y) {

  const redCard =
    document.getElementById(
      "redCard"
    );

  const ancho =
    redCard.clientWidth;

  const alto =
    redCard.clientHeight;


  /*
   * RADIO GRANDE:
   * Esto hace que el plumón funcione
   * como una brocha y no como una bolita.
   */

  const radio =
    TAMANO_BROCHA / 2;


  const inicioX =
    Math.floor(
      (x - radio) /
      TAMANO_ZONA
    );

  const finX =
    Math.ceil(
      (x + radio) /
      TAMANO_ZONA
    );

  const inicioY =
    Math.floor(
      (y - radio) /
      TAMANO_ZONA
    );

  const finY =
    Math.ceil(
      (y + radio) /
      TAMANO_ZONA
    );


  for (
    let columna = inicioX;
    columna <= finX;
    columna++
  ) {

    for (
      let fila = inicioY;
      fila <= finY;
      fila++
    ) {

      const centroX =
        columna *
        TAMANO_ZONA +
        TAMANO_ZONA / 2;

      const centroY =
        fila *
        TAMANO_ZONA +
        TAMANO_ZONA / 2;


      const distancia =
        Math.sqrt(
          Math.pow(
            centroX - x,
            2
          ) +
          Math.pow(
            centroY - y,
            2
          )
        );


      /*
       * SOLO PINTAMOS DENTRO DEL
       * CÍRCULO DE LA BROCHA.
       */

      if (
        distancia <= radio
      ) {

        agregarPintura(
          columna,
          fila,
          x,
          y,
          ancho,
          alto
        );

      }

    }

  }


  revisarCarta();
}


/* =========================================
   LÍNEA DE BROCHA
   ========================================= */

function pintarLineaBrocha(
  x1,
  y1,
  x2,
  y2
) {

  const distancia =
    Math.sqrt(
      Math.pow(
        x2 - x1,
        2
      ) +
      Math.pow(
        y2 - y1,
        2
      )
    );


  /*
   * Pintamos varios puntos entre
   * el movimiento anterior y el actual.
   */

  const pasos =
    Math.max(
      1,
      Math.ceil(
        distancia /
        (TAMANO_BROCHA / 3)
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


    pintarBrocha(
      x,
      y
    );

  }

}


/* =========================================
   AGREGAR PINTURA
   ========================================= */

function agregarPintura(
  columna,
  fila,
  x,
  y,
  ancho,
  alto
) {

  const redCard =
    document.getElementById(
      "redCard"
    );


  /*
   * No salirnos de la carta.
   */

  const maxColumna =
    Math.ceil(
      ancho /
      TAMANO_ZONA
    ) - 1;

  const maxFila =
    Math.ceil(
      alto /
      TAMANO_ZONA
    ) - 1;


  columna =
    Math.max(
      0,
      Math.min(
        maxColumna,
        columna
      )
    );

  fila =
    Math.max(
      0,
      Math.min(
        maxFila,
        fila
      )
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


  /*
   * La pintura individual mantiene
   * la misma imagen perfectamente
   * alineada con la carta azul.
   */

  const radio =
    TAMANO_BROCHA;


  const mitad =
    radio / 2;


  pintura.style.width =
    radio + "px";

  pintura.style.height =
    radio + "px";


  const centroX =
    columna *
    TAMANO_ZONA +
    TAMANO_ZONA / 2;

  const centroY =
    fila *
    TAMANO_ZONA +
    TAMANO_ZONA / 2;


  pintura.style.left =
    centroX + "px";

  pintura.style.top =
    centroY + "px";


  pintura.style.backgroundSize =
    ancho + "px " +
    alto + "px";


  pintura.style.backgroundPosition =
    (-centroX + mitad) +
    "px " +
    (-centroY + mitad) +
    "px";


  redCard.appendChild(
    pintura
  );

}


/* =========================================
   REVISAR COBERTURA
   ========================================= */

function revisarCarta() {

  const redCard =
    document.getElementById(
      "redCard"
    );

  const ancho =
    redCard.clientWidth;

  const alto =
    redCard.clientHeight;


  const columnas =
    Math.ceil(
      ancho /
      TAMANO_ZONA
    );

  const filas =
    Math.ceil(
      alto /
      TAMANO_ZONA
    );


  const total =
    columnas *
    filas;


  const cobertura =
    zonasPintadas.size /
    total;


  /*
   * SE MANTIENE EL 80%.
   *
   * La diferencia es que ahora una
   * pasada cubre muchas zonas porque
   * la pintura funciona como BROCHA.
   */

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

  cartaLista = false;
}


/* =========================================
   TERMINAR TRANSFORMACIÓN
   ========================================= */

function terminarTransformacion() {

  if (cartaLista)
    return;

  cartaLista = true;

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

  if (cartaBajando)
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

    ultimaPuntaX = null;
    ultimaPuntaY = null;

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

    ultimaPuntaX = null;
    ultimaPuntaY = null;

  }
);


/* =========================================
   PREPARAR AL CARGAR
   ========================================= */

prepararImagenDeCarta();
