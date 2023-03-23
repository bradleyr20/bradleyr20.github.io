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



// script for Calendar on Whats Happening page
const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-month"),
      prevNextIcon = document.querySelectorAll(".icons div");

      // getting new date, current year and month
      let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

      // storing full name of all months in array
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const renderCalendar = () => {
          let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
          lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
          lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
          lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
          let liTag = "";

          for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
              liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
          }

          for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
              // adding active class to li if the current day, month, and year matched
              let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                          && currYear === new Date().getFullYear() ? "active" : "";
              liTag += `<li class="${isToday}">${i}</li>`;
          }

          for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
              liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
          }
          currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
          daysTag.innerHTML = liTag;
      }
      renderCalendar();

      prevNextIcon.forEach(icon => { // getting prev and next icons
          icon.addEventListener("click", () => { // adding click event on both icons
              // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
              currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

              if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                  // creating a new date of current year & month and pass it as date value
                  date = new Date(currYear, currMonth, new Date().getDate());
                  currYear = date.getFullYear(); // updating current year with new date year
                  currMonth = date.getMonth(); // updating current month with new date month
              } else {
                  date = new Date(); // pass the current date as date value
              }
              renderCalendar(); // calling renderCalendar function
          });
      });

