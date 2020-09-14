let open = document.getElementById("open");
let close = document.getElementById("close");
let nav = document.getElementById("nav-mobile");

document.getElementById("open").addEventListener("click", () => {
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
  nav.style.height = "230px";
});

document.getElementById("close").addEventListener("click", () => {
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
  nav.style.height = "0px";
});
