let startBudilnik = document.querySelector(".start");
let stopBudilnik = document.querySelector(".stop");
let budilnikInput = document.querySelector(".budilnik-input input");
let localStorageData = localStorage.getItem("inputTime");
let behind = document.querySelector(".back");
let songBudilnik = document.querySelector("audio");

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
behind.addEventListener("click", () => {
  history.back();
});
navigator.getBattery().then((batteryObject) => {
  if (batteryObject.charging) {
    baterekaImg.style.backgroundColor = "green";
  }
  baterekaSpan.textContent = batteryObject.level * 100 + "%";
});
