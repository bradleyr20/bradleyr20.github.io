// SCRIPTS TO SHOW AND HIDE LONG BIO TEXT
const reveal = document.getElementsByClassName("reveal-text"),
  hide = document.getElementsByClassName("hide-text"),
  hiddenText = document.getElementsByClassName("text-reveal");

for (let i = 0; i < reveal.length; i++) {
    reveal[i].addEventListener("click", () => {
        hiddenText[i].style.display = 
        hiddenText[i].style.display == "none" ? "block" : "none";
        reveal[i].style.display = hiddenText[i].style.display;
  });
}

for (let i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", () => {
      hiddenText[i].style.display = 
      hiddenText[i].style.display == "none" ? "block" : "none";
      reveal[i].style.display = hiddenText[i].style.display;
  });
}




// function showHideText() {
//   var x = document.getElementsByClassName("text-reveal")[0];
//   var y = document.getElementsByClassName("reveal-text")[0];
//   if (x.style.display == "none") {
//     x.style.display = "block";
//     y.style.display = "none";
//   } else {
//     x.style.display = "none";
//     y.style.display = "block";
//   }
// }