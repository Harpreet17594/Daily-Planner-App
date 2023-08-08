var currentDay = $("#currentDay");
var getInput1 = $("#getInput1");
var getInput2 = $("#getInput2");
var getInput3 = $("#getInput3");
var getInput4 = $("#getInput4");
var getInput5 = $("#getInput5");
var getInput6 = $("#getInput6");
var getInput7 = $("#getInput7");

var saveBtn2 = $("#saveBtn2");
var saveBtn4 = $("#saveBtn4");

//set date
currentDay.text(dayjs().format("dddd, MMMM D") + "th");
var eventSaved = $("#eventSaved");

var eventAdded = {
  eventName: getInput1.val().trim(),
};
//save button code
$("#saveBtn").on("click", function (event) {
  event.preventDefault();

  if (eventAdded.eventName === "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput", JSON.stringify(getInput1));

    // get most recent submission
    var enteredInputValue = JSON.parse(localStorage.getItem("getInput"));
    getInput1.text(enteredInputValue);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");
    console.log(eventAdded);
    return;
  }
});

// button 2 code
//============================================================================
var eventAdded2 = {
  eventName2: getInput2.val().trim(),
};
saveBtn2.on("click", function (event) {
  event.preventDefault();

  if (eventAdded2.eventName2 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput2", JSON.stringify(getInput2));

    // get most recent submission
    var enteredInputValue2 = JSON.parse(localStorage.getItem("getInput2"));
    getInput2.text(enteredInputValue2);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded2);
    return;
  }
});

// button 3 code
//================================================================
var eventAdded3 = {
  eventName3: getInput3.val().trim(),
};
$("#saveBtn3").on("click", function (event) {
  event.preventDefault();

  if (eventAdded3.eventName3 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput3", JSON.stringify(getInput3));

    // get most recent submission
    var enteredInputValue3 = JSON.parse(localStorage.getItem("getInput3"));
    getInput3.text(enteredInputValue3);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded3);
    console.log("get input 3 : " + getInput3);
    return;
  }
});

// button 4 code
//================================================================
var eventAdded4 = {
  eventName4: getInput4.val().trim(),
};
saveBtn4.on("click", function (event) {
  event.preventDefault();

  if (eventAdded4.eventName4 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput", JSON.stringify(getInput4));

    // get most recent submission
    var enteredInputValue4 = JSON.parse(localStorage.getItem("getInput"));
    getInput4.text(enteredInputValue4);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded4);
    console.log("get input 4 : " + getInput4);
  }
});

// button 5 code
//================================================================
var eventAdded4 = {
  eventName4: getInput4.val().trim(),
};
saveBtn4.on("click", function (event) {
  event.preventDefault();

  if (eventAdded4.eventName4 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput", JSON.stringify(getInput4));

    // get most recent submission
    var enteredInputValue4 = JSON.parse(localStorage.getItem("getInput"));
    getInput4.text(enteredInputValue4);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded4);
    console.log("get input 4 : " + getInput4);
  }
});

// button 6 code
//================================================================
var eventAdded4 = {
  eventName4: getInput4.val().trim(),
};
saveBtn4.on("click", function (event) {
  event.preventDefault();

  if (eventAdded4.eventName4 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput", JSON.stringify(getInput4));

    // get most recent submission
    var enteredInputValue4 = JSON.parse(localStorage.getItem("getInput"));
    getInput4.text(enteredInputValue4);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded4);
    console.log("get input 4 : " + getInput4);
  }
});

// button 7 code
//================================================================
var eventAdded7 = {
  eventName7: getInput7.val().trim(),
};
$("#saveBtn7").on("click", function (event) {
  event.preventDefault();

  if (eventAdded7.eventName7 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput7", JSON.stringify(getInput7));

    // get most recent submission
    var enteredInputValue7 = JSON.parse(localStorage.getItem("getInput7"));
    getInput7.text(enteredInputValue7);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded7);
    console.log("get input 7 : " + getInput7);
  }
});

// setting color
// =================================================================

// var systemTime = dayjs().format("h");
// var g1 = $("#getPTime1");
// var g2 = $("#getPTime2");
// var g3 = $("#getPTime3");
// var g4 = $("#getPTime4");
// var g5 = $("#getPTime5");
// var g6 = $("#getPTime6");
// var g7 = $("#getPTime7");
// var g8 = $("#getPTime8");
// var g9 = $("#getPTime9");

// var getPTime1 = g1.text();
// var getPTime2 = g2.text();
// var getPTime3 = g3.text();
// var getPTime4 = g4.text();
// var getPTime5 = g5.text();
// var getPTime6 = g6.text();
// var getPTime7 = g7.text();
// var getPTime8 = g8.text();
// var getPTime9 = g9.text();

// console.log(getPTime1);
// console.log(systemTime);

// if (getPTime1 == systemTime) {
//   getInput1.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime2 == systemTime) {
//   getInput2.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime3 == systemTime) {
//   getInput3.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime4 == systemTime) {
//   getInput4.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime5 == systemTime) {
//   getInput5.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime6 == systemTime) {
//   getInput6.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime7 == systemTime) {
//   getInput7.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime8 == systemTime) {
//   getInput8.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }
// if (getPTime9 == systemTime) {
//   getInput9.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
// }

// set greater color

// if (getPTime1 > systemTime) {
//   getInput1.attr("style", "background-color:white;width: 100%; height: 50px");
// }

// console.log("ptime2 " + getPTime2 + " systemt" + systemTime);
// if (getPTime2 > systemTime) {
//   getInput2.attr("style", "background-color:white;width: 100%; height: 50px");
// }

// if (getPTime1 < systemTime) {
//   getInput1.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
// }
