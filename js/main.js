let soat = document.querySelector(".soat");
let baterekaImg = document.querySelector(".batereka img");
let baterekaSpan = document.querySelector(".batereka span");

navigator.getBattery().then((batteryObject) => {
  if (batteryObject.charging) {
    baterekaImg.style.backgroundColor = "green";
  }
  baterekaSpan.textContent = batteryObject.level * 100 + "%";
});

// Soat
setInterval(() => {
  let date = new Date();
  let hour =
    date.toLocaleTimeString("it-IT").split(":")[0] +
    ":" +
    date.toLocaleTimeString("it-IT").split(":")[1];
  soat.textContent = hour;
}, 200);


