let budilnikBtn = document.querySelector(".budilnikBtn");
let timerkBtn = document.querySelector(".timerkBtn");
let kamera = document.querySelector(".kamera img");
let kameraIcon = document.querySelector(".kamera-icon");

kameraIcon.addEventListener("click", () => {
  location.href = "pages/kamera.html";
});
kamera.addEventListener("click", () => {
  location.href = "pages/kamera.html";
});

budilnikBtn.addEventListener("click", () => {
  location.href = "pages/budulnik.html";
});
timerkBtn.addEventListener("click", () => {
  location.href = "pages/timer.html";
});
