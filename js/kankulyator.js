let kankulyatorAnsewer = document.querySelector(".kankulyator-ansewer span");
let kankulyatorBtns = document.querySelectorAll("button");
let back = document.querySelector(".back");

back.addEventListener("click", () => {
  history.back();
});

kankulyatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == "Ac") {
      kankulyatorAnsewer.textContent = "0";
    } else if (btn.innerText == "1") {
      kankulyatorAnsewer.textContent += "1";
    } else if (btn.innerText == "2") {
      kankulyatorAnsewer.textContent += "2";
    } else if (btn.innerText == "3") {
      kankulyatorAnsewer.textContent += "3";
    } else if (btn.innerText == "4") {
      kankulyatorAnsewer.textContent += "4";
    } else if (btn.innerText == "5") {
      kankulyatorAnsewer.textContent += "5";
    } else if (btn.innerText == "6") {
      kankulyatorAnsewer.textContent += "6";
    } else if (btn.innerText == "7") {
      kankulyatorAnsewer.textContent += "7";
    } else if (btn.innerText == "8") {
      kankulyatorAnsewer.textContent += "8";
    } else if (btn.innerText == "9") {
      kankulyatorAnsewer.textContent += "9";
    } else if (btn.innerText == "0") {
      kankulyatorAnsewer.textContent += "0";
    } else if (btn.innerText == ".") {
      kankulyatorAnsewer.textContent += ".";
    } else if (btn.innerText == "/") {
      kankulyatorAnsewer.textContent += "/";
    } else if (btn.innerText == "-") {
      kankulyatorAnsewer.textContent += "-";
    } else if (btn.innerText == "*") {
      kankulyatorAnsewer.textContent += "*";
    } else if (btn.innerText == "+") {
      kankulyatorAnsewer.textContent += "+";
    } else if (btn.innerText == "") {
      kankulyatorAnsewer.textContent = kankulyatorAnsewer.textContent.slice(0, -1);
    } else if (btn.innerText == "=") {
      kankulyatorAnsewer.textContent = eval(kankulyatorAnsewer.textContent);
    }
  });
});
