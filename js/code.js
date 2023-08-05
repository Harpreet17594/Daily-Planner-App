var currentDay = $("#currentDay");
var getInput = $("#getInput");

//set date
currentDay.text(dayjs().format("dddd, MMMM D") + "th");
var eventSaved = $("#eventSaved");

//save button code
$("#saveBtn").on("click", function () {
  if (getInput === "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput", JSON.stringify(getInput));

    // get most recent submission
    var enteredInputValue = JSON.parse(localStorage.getItem("getInput"));
    getInput.text(enteredInputValue);
    getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");
  }
});

// ---------------------
