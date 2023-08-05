var currentDay = $("#currentDay");
var getInput = $("#getInput");

//set date
currentDay.text(dayjs().format("dddd, MMMM D") + "th");
var eventSaved = $("#eventSaved");

var eventAdded = {
  eventName: getInput.val().trim(),
};
//save button code
$("#saveBtn").on("click", function () {
  if (eventAdded.eventName === "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput", JSON.stringify(getInput));

    // get most recent submission
    var enteredInputValue = JSON.parse(localStorage.getItem("getInput"));
    getInput.text(enteredInputValue);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");
    console.log(eventAdded);
  }
});

// setting color
// =================================================================

var systemTime = dayjs().format("h");
var g = $("#getPTime");
var getPTime = g.text();

console.log(typeof getPTime);
console.log(typeof systemTime);

if (getPTime === systemTime) {
  getInput.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
}
if (getPTime > systemTime) {
  getInput.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
}
if (getPTime < systemTime) {
  getInput.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
}
