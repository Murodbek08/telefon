let soat = document.querySelector(".soat");
let stopBudilnik = document.querySelector(".stop");
let startBudilnik = document.querySelector(".start");
let budilnikInput = document.querySelector(".budilnik-input input");
let budilnikA = document.querySelector(".budilnik a");
let back = document.querySelector(".back");
let songBudilnik = document.querySelector("audio");

// Soat
setInterval(() => {
  let date = new Date();
  let hour =
    date.toLocaleString().split(",")[1].split(":")[0] +
    ":" +
    date.toLocaleString().split(",")[1].split(":")[1];
  soat.textContent = hour;
}, 200);

// Budilnik
startBudilnik.addEventListener("click", () => {
  songBudilnik.play();
});
stopBudilnik.addEventListener("click", () => {
  songBudilnik.pause();
  localStorageBudilnik = "";
});

function searchINputFunc() {
  budilnikInput.addEventListener("keyup", function (e) {
    e.preventDefault();
    let inputTime = e.target.value.trim();
    localStorage.setItem("inputTime", JSON.stringify(" " + inputTime));
  });
}
searchINputFunc();

let localStorageData = localStorage.getItem("inputTime");
let localStorageBudilnik = JSON.parse(localStorageData) || [];
setInterval(() => {
  let date = new Date();
  let hour =
    date.toLocaleString().split(",")[1].split(":")[0] +
    ":" +
    date.toLocaleString().split(",")[1].split(":")[1];
  if (localStorageBudilnik == hour) {
    songBudilnik.play();
    searchINputFunc();
  }
}, 200);
budilnikA.addEventListener("click", () => {
  location.href = "./pages/budulnik.html";
});
back.addEventListener("click", () => {});

// let soatTimer = document.querySelector(".soat-timer span");
// let minutTimer = document.querySelector(".minut-timer span");
// let sekondTimer = document.querySelector(".sekond-timer span");
// let startTimer = document.querySelector(".start-timer");
// let stopTimer = document.querySelector(".stop-timer");

// let set = setInterval(() => {
//   let dateTimer = new Date();
//   soatTimer.textContent = dateTimer.getHours();
//   minutTimer.textContent = dateTimer.getMinutes();
//   sekondTimer.textContent = dateTimer.getSeconds();
// }, 10);
// stopTimer.addEventListener("click", () => {
//   clearInterval(set);
// });
// startTimer.addEventListener("click", () => {});
