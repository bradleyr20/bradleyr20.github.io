function showHide() {
  var x = document.getElementById("siteMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.querySelector("#hamburger").addEventListener("click", showHide);
document.querySelector(".closeX").addEventListener("click", showHide);
