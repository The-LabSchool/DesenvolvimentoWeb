// Variáveis - Elementos do DOM  - configurações

const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const bannerTitle = document.querySelector(".app__title");
const buttonsList = document.querySelectorAll(".app__card-button");
const imgFundo = document.querySelector(".app__image");
const timerDOM = document.querySelector(".app__card-timer");
const musicaInput = document.querySelector("#alternar-musica");
const btnTimer = document.querySelector("#start-pause");
const btnTimerTexto = document.querySelector("#start-pause span");
const btnTimerimg = document.querySelector("#start-pause img");
const audio = new Audio("./sons/luna-rise-part-one.mp3");
const audioPause = new Audio("./sons/pause.mp3");
const audioPlay = new Audio("./sons/play.wav");
const audioParar = new Audio("./sons/beep.mp3");

let tempoDecorridoEmSegundos = 1500;
let intervalId = null;

audio.loop = true;

// Eventos

btnFoco.addEventListener("click", () => alterarContexto("foco"));
btnCurto.addEventListener("click", () => alterarContexto("descanso-curto"));
btnLongo.addEventListener("click", () => alterarContexto("descanso-longo"));
btnTimer.addEventListener("click", () => handleContagem());
musicaInput.addEventListener("change", () => handleAudio());

// Funções

const handleContagem = () => {
  if (intervalId) {
    pausar();
    
    return;
  }
  inciarContagem();
}

const mostrarTempo = () => {
  const tempoDate = new Date(tempoDecorridoEmSegundos * 1000)
  const tempoFormatado = tempoDate.toLocaleTimeString("pt-br", {minute: "2-digit", second:"2-digit"})
  timerDOM.textContent = tempoFormatado;

}

const inciarContagem = () => {
  audioPlay.play();
  btnTimerTexto.textContent = "Pausar";
  btnTimerimg.setAttribute("src", "./imagens/pause.png");
  intervalId = setInterval(contagemRegressiva, 1000);
}


const pausar = () => {
  audioPause.play();
  btnTimerTexto.textContent = "Começar";
  btnTimerimg.setAttribute("src", "./imagens/play_arrow.png");
  clearInterval(intervalId);
  intervalId = null;
};

const reiniciarTempo = () => {
  clearInterval(intervalId);
  tempoDecorridoEmSegundos = 1500;
  intervalId = null;
};

const handleAudio = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

const clearClassActive = () => {
  buttonsList.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const alterarContexto = (contexto) => {
  clearClassActive();

  html.setAttribute("data-contexto", contexto);
  imgFundo.setAttribute("src", `./imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      btnFoco.classList.add("active");
      tempoDecorridoEmSegundos = 1500;
      mostrarTempo();
      bannerTitle.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      btnCurto.classList.add("active");
      tempoDecorridoEmSegundos = 300;
      mostrarTempo();
      bannerTitle.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      break;

    case "descanso-longo":
      btnLongo.classList.add("active");
      tempoDecorridoEmSegundos = 900;
      mostrarTempo();   
      bannerTitle.innerHTML = `
        Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `;
      break;
    default:
      break;
  }
};


mostrarTempo();
