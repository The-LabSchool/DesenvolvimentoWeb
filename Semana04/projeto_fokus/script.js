const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const bannerTitle = document.querySelector(".app__title");
const buttonsList = document.querySelectorAll(".app__card-button");
const imgFundo = document.querySelector(".app__image");
const timer = document.querySelector(".app__card-timer");

btnFoco.addEventListener("click", () => alterarContexto("foco"));
btnCurto.addEventListener("click", () => alterarContexto("descanso-curto"));
btnLongo.addEventListener("click", () => alterarContexto("descanso-longo"));


const clearClassActive = () => {
  buttonsList.forEach(btn => {
    btn.classList.remove("active");
  })
}


const alterarContexto = (contexto) => {

  clearClassActive();

  html.setAttribute("data-contexto", contexto);
  imgFundo.setAttribute("src", `./imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      btnFoco.classList.add("active");
      timer.innerHTML = "25:00";
      bannerTitle.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      btnCurto.classList.add("active");
      timer.innerHTML = "5:00";
      bannerTitle.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      break;

    case "descanso-longo":
      btnLongo.classList.add("active");
      timer.innerHTML = "15:00";
      bannerTitle.innerHTML = `
        Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `;
      break;
    default:
      break;
  }
};
