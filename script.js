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

  "A♥":
    "https://i.ibb.co/ynqGcGbd/IMG-8306.png",

  "2♥":
    "https://i.ibb.co/LhP2r644/IMG-8356.jpg",

  "3♥":
    "https://i.ibb.co/JwHhdrrF/IMG-8325.jpg",

  "4♥":
    "https://i.ibb.co/9m64x4JT/IMG-8326.jpg",

  "5♥":
    "https://i.ibb.co/6cdhzX50/IMG-8327.jpg",

  "6♥":
    "https://i.ibb.co/ymRF2SyN/IMG-8328.jpg",

  "7♥":
    "https://i.ibb.co/fdBGLcM9/IMG-8307.jpg",

  "8♥":
    "https://i.ibb.co/fzpjGPZJ/IMG-8329.jpg",

  "9♥":
    "https://i.ibb.co/KxsyX4Wz/IMG-8330.jpg",

  "10♥":
    "https://i.ibb.co/q3ZsPj3y/IMG-8331.jpg",

  "J♥":
    "https://i.ibb.co/nsCLRwSt/IMG-8313.jpg",

  "Q♥":
    "https://i.ibb.co/B5d2zv82/IMG-8319.png",

  "K♥":
    "https://i.ibb.co/Mxjz673J/IMG-8316.jpg",


  "A♦":
    "https://i.ibb.co/Z1vchJkr/IMG-8305.jpg",

  "2♦":
    "https://i.ibb.co/fV50g6Kw/IMG-8332.jpg",

  "3♦":
    "https://i.ibb.co/xtXj8DXK/IMG-8333.jpg",

  "4♦":
    "https://i.ibb.co/b5Bk4Kr8/IMG-8334.jpg",

  "5♦":
    "https://i.ibb.co/Nd7BrTJ2/IMG-8335.jpg",

  "6♦":
    "https://i.ibb.co/nMK42bBD/IMG-8336.jpg",

  "7♦":
    "https://i.ibb.co/JFqL2CPN/IMG-8308.jpg",

  "8♦":
    "https://i.ibb.co/vxrqj465/IMG-8337.jpg",

  "9♦":
    "https://i.ibb.co/bj8XGqfm/IMG-8338.jpg",

  "10♦":
    "https://i.ibb.co/84SyF7kH/IMG-8339.jpg",

  "J♦":
    "https://i.ibb.co/0V8jB6NW/IMG-8314.jpg",

  "Q♦":
    "https://i.ibb.co/k2m0CxJK/IMG-8322.jpg",

  "K♦":
    "https://i.ibb.co/fV1jpf14/IMG-8315.jpg",


  "A♣":
    "https://i.ibb.co/bgP0xhYq/IMG-8304.jpg",

  "2♣":
    "https://i.ibb.co/bRyN8f8B/IMG-8340.jpg",

  "3♣":
    "https://i.ibb.co/wrrW7xHY/IMG-8341.jpg",

  "4♣":
    "https://i.ibb.co/MxP84Gvw/IMG-8342.jpg",

  "5♣":
    "https://i.ibb.co/sJQGz98z/IMG-8343.jpg",

  "6♣":
    "https://i.ibb.co/3yX5j1bS/IMG-8344.jpg",

  "7♣":
    "https://i.ibb.co/QvzDT0rn/IMG-8309.jpg",

  "8♣":
    "https://i.ibb.co/mCP1F1f1/IMG-8345.jpg",

  "9♣":
    "https://i.ibb.co/RTffVZdN/IMG-8346.jpg",

  "10♣":
    "https://i.ibb.co/h1sgFHN8/IMG-8347.jpg",

  "J♣":
    "https://i.ibb.co/twNLs599/IMG-8311.jpg",

  "Q♣":
    "https://i.ibb.co/Kcqc8jDN/IMG-8320.jpg",

  "K♣":
    "https://i.ibb.co/mFVL8T16/IMG-8317.jpg",


  "A♠":
    "https://i.ibb.co/27PGfH8T/IMG-8303.jpg",

  "2♠":
    "https://i.ibb.co/wj5Vc5s/IMG-8357.jpg",

  "3♠":
    "https://i.ibb.co/Cpy4Bcx5/IMG-8359.jpg",

  "4♠":
    "https://i.ibb.co/wZgLwm7r/IMG-8360.jpg",

  "5♠":
    "https://i.ibb.co/20CF3RpQ/IMG-8351.jpg",

  "6♠":
    "https://i.ibb.co/qMCM3s8Q/IMG-8352.jpg",

  "7♠":
    "https://i.ibb.co/9mr4C8nD/IMG-8310.webp",

  "8♠":
    "https://i.ibb.co/chp9vDq1/IMG-8353.jpg",

  "9♠":
    "https://i.ibb.co/ycjrfRkC/IMG-8354.jpg",

  "10♠":
    "https://i.ibb.co/mV8Mk70x/IMG-8355.jpg",

  "J♠":
    "https://i.ibb.co/zh1bKyHx/IMG-8323.jpg",

  "Q♠":
    "https://i.ibb.co/d0Ck6jHY/IMG-8321.jpg",

  "K♠":
    "https://i.ibb.co/ymftXVsY/IMG-8318.jpg"

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

let zonasPintadas =
  new Set();

const TAMANO_ZONA = 12;


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
  document.getElementById(
    "stage"
  );


/* =========================================
   CREAR IMAGEN DEL FRENTE
   ========================================= */

function prepararImagenDeCarta() {

  const frente =
    document.querySelector(
      ".card-front"
    );

  if (!frente)
    return;


  let imagen =
    document.getElementById(
      "selectedCardImage"
    );


  if (!imagen) {

    imagen =
      document.createElement(
        "img"
      );

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


  if (esquina) {

    esquina.style.display =
      "none";

  }


  if (centro) {

    centro.style.display =
      "none";

  }

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
    document.getElementById(
      "hook"
    );

  const rope =
    document.getElementById(
      "rope"
    );

  const card =
    document.getElementById(
      "card"
    );

  const cardStack =
    document.querySelector(
      ".card-stack"
    );

  const marker =
    document.getElementById(
      "marker"
    );

  const redCard =
    document.getElementById(
      "redCard"
    );


  toques = 0;

  cartaLista = false;

  cartaEnganchada = false;

  cartaBajando = false;


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
    "-200px";

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
    document.getElementById(
      "hook"
    );

  const rope =
    document.getElementById(
      "rope"
    );

  const card =
    document.getElementById(
      "card"
    );

  const cardStack =
    document.querySelector(
      ".card-stack"
    );

  const marker =
    document.getElementById(
      "marker"
    );


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

      pintarCarta(

        puntaX - cardX,

        puntaY - cardY

      );

    }


    e.preventDefault();

    e.stopPropagation();

  }
);


/* =========================================
   PINTAR CARTA
   ========================================= */

function pintarCarta(x, y) {

  const redCard =
    document.getElementById(
      "redCard"
    );


  x = Math.max(
    0,
    Math.min(
      299,
      x
    )
  );


  y = Math.max(
    0,
    Math.min(
      427,
      y
    )
  );


  const columna =
    Math.floor(
      x /
      TAMANO_ZONA
    );


  const fila =
    Math.floor(
      y /
      TAMANO_ZONA
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
    (-x + 13) +
    "px " +
    (-y + 13) +
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
      300 /
      TAMANO_ZONA
    );


  const filas =
    Math.ceil(
      428 /
      TAMANO_ZONA
    );


  const total =
    columnas *
    filas;


  const cobertura =
    zonasPintadas.size /
    total;


  /* =====================================
     CAMBIO: AHORA SE COMPLETA AL 60%
     ===================================== */

  if (
    cobertura >= 0.60
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

  }
);


/* =========================================
   PREPARAR AL CARGAR
   ========================================= */

prepararImagenDeCarta();
