let checker = document.getElementById("checker");
checker.addEventListener("click", function () {
  let checkerBall = document.getElementById("checker-ball");
  let cardAnual = document.getElementsByClassName("anual");
  let cardMensual = document.getElementsByClassName("mensual");
  let anual = document.getElementById("anual");
  let mensual = document.getElementById("mensual");

  checkerBall.classList.toggle("ball-active");
  checker.classList.toggle("change-background-checker");
  anual.classList.toggle("p-active");
  mensual.classList.toggle("p-active");
  changeHidden(cardAnual);
  changeHidden(cardMensual);
});

function changeHidden(array) {
  for (let card of array) {
    card.classList.toggle("hidden");
  }
}
