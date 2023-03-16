document.querySelector("#hamburger").addEventListener("click", showHide);

function showHide() {
  var x = document.getElementById("siteMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}