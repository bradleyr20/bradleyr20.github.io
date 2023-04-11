// Inserting the code block to wrapper element
document.getElementById("headerBlock").innerHTML = headerCode;

// filling in the page name for the H1
document.getElementById("topOfPageText").innerHTML = aichOne;

// building the footer
document.getElementById("footer").innerHTML = footerCode;

// declaring site nav variables for interaction
const menu = document.getElementById("siteMenu"), 
  hamburger = document.getElementById("hamburger"),
  closeBurger = document.getElementById("closeBurger"),
  showSubs = document.getElementsByClassName("subNavParent"),
  subMenus = document.getElementsByClassName("subNavGroup");
  //pageHeader = document.getElementById("pageHeader");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
});

closeBurger.addEventListener("click", () => {
  menu.style.display = "none";
});

// Accordion Nav script that
// lets just one subNav be open at a time
for (let i = 0; i < showSubs.length; i++) {
  showSubs[i].addEventListener("click", () => {
      for (let j = 0; j < subMenus.length; j++) {
          if (i == j) {
            subMenus[j].style.display = subMenus[j].style.display == "block" ? "none" : "block";
          } else {
            subMenus[j].style.display = "none";
          }
      }
  });
}

// RESTAURANT LIST SORTING SCRIPT (===NOT CURRENTLY IMPLEMENTED===)
// function sortRestList() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('restSelect');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("restaurantSorts");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }


// FUNCTION TO FILTER RESTAURANT LIST BY NAME, USING INPUT BOX
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

const restaurant = document.getElementsByClassName("restaurant"),
  restLink = document.getElementsByClassName("restaurant-link"),
  restImage = document.getElementsByClassName("image-placeholder");

// Script that
// lets restaurant image divs be clickable
for (let i = 0; i < restaurant.length; i++) {
  restImage[i].addEventListener("click", () => {
    restLink[i].click();
  });
}