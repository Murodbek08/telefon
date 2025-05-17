let budilnikBtn = document.querySelector(".budilnikBtn");
let kamera = document.querySelector(".kamera img");
let kameraIcon = document.querySelector(".kamera-icon img");
let kankulyatorBtn = document.querySelector(".kankulyatorBtn");
let mapBtn = document.querySelector(".mapBtn");

kamera.addEventListener("click", () => {
  location.href = "pages/kamera.html";
});
kameraIcon.addEventListener("click", () => {
  location.href = "pages/kamera.html";
});

budilnikBtn.addEventListener("click", () => {
  location.href = "pages/budulnik.html";
});

kankulyatorBtn.addEventListener("click", () => {
  location.href = "pages/kankulyator.html";
});
mapBtn.addEventListener("click", () => {
  location.href = "pages/navigator.html";
});
