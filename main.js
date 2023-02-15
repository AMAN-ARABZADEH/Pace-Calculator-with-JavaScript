"use strict";

/*
Author: Aman Arabzadeh
Date: 2023-02-15


*/

const distance = document.getElementById("distance");
const unit = document.getElementById("unit");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const pace = document.getElementById("pace");
const form = document.getElementById("pace-form");

// Validating the input values, to avoid  writing Nan Nan on the innerHTML if input is empty.
function validateForm() {
  // Check if the required input fields have values
  if (distance.value && hours.value && minutes.value && seconds.value) {
    if (minutes.value < 60 && seconds.value < 60) {
      return true; // Allow the form to be submitted
    } else {
      alert("Value for minutes and seconds must be less or equal to 59!");
    }
  } else {
    alert("Please fill in all required fields"); // Show an error message
    return false; // Prevent the form from being submitted
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let totalSeconds =
    hours.value * 3600 + minutes.value * 60 + Number(seconds.value);
  let paceInSeconds = totalSeconds / distance.value;

  let paceMinutes = Math.floor(paceInSeconds / 60);
  let paceSeconds = Math.round(paceInSeconds % 60);
  let paceDisplay =
    "Pace: " + paceMinutes + "m " + " : " + paceSeconds + "s per " + unit.value;
  if (!validateForm()) {
    pace.innerHTML = "";
  } else {
    pace.innerHTML = paceDisplay;
  }
});

// Reset the filled

function resetForm() {
  distance.value = "";
  unit.selectedIndex = 0;
  hours.value = "";
  minutes.value = "";
  seconds.value = "";
  pace.innerHTML = "";
}
reset.addEventListener("click", resetForm);
