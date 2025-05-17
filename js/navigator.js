let back = document.querySelector(".back");

back.addEventListener("click", () => {
  history.back();
});
navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
  let map = `
  <iframe
    style="border:0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed">
  </iframe>`;
  let navigatorUrl = document.querySelector(".navigator-url");
  navigatorUrl.innerHTML = map;
});
