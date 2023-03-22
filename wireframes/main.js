document.getElementById("hamburger").addEventListener("click", showHide);
document.getElementById("closeBurger").addEventListener("click", showHide);

function showHide() {
  var x = document.getElementById("siteMenu");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// restaurant list sorting script
function sortRestList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('restSelect');
  filter = input.value.toUpperCase();
  ul = document.getElementById("restaurantSorts");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// Function to filter Restaurant list by name, using input box
function selectRest() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('restSelect');
  filter = input.value.toUpperCase();
  ul = document.getElementById("RestaurantList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

