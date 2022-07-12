// FOR DATE
let dateInfo = document.getElementById("date");

let month;
let day;
let year;

// FOR TIME
let timeInfo = document.getElementById("time");

let hours;
let minutes;
let seconds;

// FOR ARROWS
let arrowHours = document.getElementById("arrows_hour");
let arrowMinutes = document.getElementById("arrows_minute");
let arrowSeconds = document.getElementById("arrows_second");

let angleHours;
let angleMinutes;
let angleSeconds;

function showDate() {
  let date = new Date();

  // START DATE

  day = date.getDate();
  year = date.getFullYear();

  month = date.getMonth();

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "Septemebr";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  switch (day) {
    case 1:
      dateInfo.innerText =
        "Today is " + month + " " + day + " of " + year + " year!";
      break;
    case 2:
      dateInfo.innerText =
        "Today is " + month + " " + day + " of " + year + " year!";
      break;
    case 3:
      dateInfo.innerText =
        "Today is " + month + " " + day + " of " + year + " year!";
      break;
    default:
      dateInfo.innerText =
        "Today is " + month + " " + day + " of " + year + " year!";
      break;
  }

  // END DATE

  // START TIME

  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  timeInfo.innerText = hours + ":" + minutes + ":" + seconds;

  // END TIME

  // START SET ARROWS

  angleHours = (hours * 30 + 90).toString();
  angleMinutes = (minutes * 6 + 90).toString();
  angleSeconds = (seconds * 6 + 90).toString();

  arrowHours.style.transform = "rotate(" + angleHours + "deg)";
  arrowMinutes.style.transform = "rotate(" + angleMinutes + "deg)";
  arrowSeconds.style.transform = "rotate(" + angleSeconds + "deg)";

  // END SET ARROWS
}

showDate();
setInterval(showDate, 1000);
