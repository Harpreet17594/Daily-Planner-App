var currentDay = $("#currentDay");

var getInput1 = $("#getInput1");
var getInput2 = $("#getInput2");
var getInput3 = $("#getInput3");
var getInput4 = $("#getInput4");
var getInput5 = $("#getInput5");
var getInput6 = $("#getInput6");
var getInput7 = $("#getInput7");
var getInput8 = $("#getInput8");
var getInput9 = $("#getInput9");

//set date
currentDay.text(dayjs().format("dddd, MMMM D") + "th");
var eventSaved = $("#eventSaved");

//save button code
$("#saveBtn").on("click", function (event) {
  event.preventDefault();
  var eventAdded = {
    eventName: getInput1.val().trim(),
  };

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

$("#saveBtn2").on("click", function (event) {
  event.preventDefault();
  var eventAdded2 = {
    eventName2: getInput2.val().trim(),
  };
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

$("#saveBtn3").on("click", function (event) {
  event.preventDefault();
  var eventAdded3 = {
    eventName3: getInput3.val().trim(),
  };
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

$("#saveBtn4").on("click", function (event) {
  event.preventDefault();
  var eventAdded4 = {
    eventName4: getInput4.val().trim(),
  };
  if (eventAdded4.eventName4 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput4", JSON.stringify(getInput4));

    // get most recent submission
    var enteredInputValue4 = JSON.parse(localStorage.getItem("getInput4"));
    getInput4.text(enteredInputValue4);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded4);
    console.log("get input 4 : " + getInput4);
  }
});

// button 5 code
//================================================================

$("#saveBtn5").on("click", function (event) {
  event.preventDefault();
  var eventAdded5 = {
    eventName5: getInput5.val().trim(),
  };
  if (eventAdded5.eventName5 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput5", JSON.stringify(getInput5));

    // get most recent submission
    var enteredInputValue5 = JSON.parse(localStorage.getItem("getInput5"));
    getInput5.text(enteredInputValue5);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded5);
    console.log("get input 5 : " + getInput5);
  }
});

// button 6 code
//================================================================

$("#saveBtn6").on("click", function (event) {
  event.preventDefault();
  var eventAdded6 = {
    eventName6: getInput6.val().trim(),
  };
  if (eventAdded6.eventName6 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput6", JSON.stringify(getInput6));

    // get most recent submission
    var enteredInputValue6 = JSON.parse(localStorage.getItem("getInput6"));
    getInput6.text(enteredInputValue6);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded6);
    console.log("get input 6 : " + getInput6);
  }
});

// button 7 code
//================================================================

$("#saveBtn7").on("click", function (event) {
  event.preventDefault();
  var eventAdded7 = {
    eventName7: getInput7.val().trim(),
  };
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

// button 8 code
//================================================================

$("#saveBtn8").on("click", function (event) {
  event.preventDefault();
  var eventAdded8 = {
    eventName8: getInput7.val().trim(),
  };
  if (eventAdded8.eventName8 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput8", JSON.stringify(getInput8));

    // get most recent submission
    var enteredInputValue8 = JSON.parse(localStorage.getItem("getInput8"));
    getInput8.text(enteredInputValue8);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded8);
    console.log("get input 8 : " + getInput8);
  }
});

// button 9 code
//================================================================

$("#saveBtn9").on("click", function (event) {
  event.preventDefault();
  var eventAdded9 = {
    eventName9: getInput9.val().trim(),
  };
  if (eventAdded9.eventName9 == "") {
    alert("First name cannot be blank to save appointment");
  } else {
    alert("Appointment Added to local Storage");

    // set new submission
    localStorage.setItem("getInput9", JSON.stringify(getInput9));

    // get most recent submission
    var enteredInputValue9 = JSON.parse(localStorage.getItem("getInput9"));
    getInput7.text(enteredInputValue9);
    // getInput.attr("disabled", "disabled");
    eventSaved.text("Appointment Added to local Storage");

    console.log(eventAdded9);
    console.log("get input 9 : " + getInput9);
  }
});

// setting color
// =================================================================

var systemTime = dayjs().format("h");
var g1 = $("#getPTime1").text();
if (g1 == systemTime) {
  getInput1.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g1 < systemTime) {
  getInput1.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
} else {
  getInput1.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}

var g2 = $("#getPTime2").text();
if (g2 == systemTime) {
  getInput2.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g2 < systemTime) {
  getInput2.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}
var g3 = $("#getPTime3").text();
if (g3 == systemTime) {
  getInput3.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g3 < systemTime) {
  getInput3.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}
var g4 = $("#getPTime4").text();
if (g4 == systemTime) {
  getInput4.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g4 < systemTime) {
  getInput4.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}
var g5 = $("#getPTime5").text();
if (g5 == systemTime) {
  getInput5.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g5 < systemTime) {
  getInput5.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}

var g6 = $("#getPTime6").text();
if (g6 == systemTime) {
  getInput6.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g6 < systemTime) {
  getInput6.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}
var g7 = $("#getPTime7").text();
if (g7 == systemTime) {
  getInput7.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g7 < systemTime) {
  getInput7.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}
var g8 = $("#getPTime8").text();
if (g8 == systemTime) {
  getInput8.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g8 < systemTime) {
  getInput8.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}
var g9 = $("#getPTime9").text();
if (g9 == systemTime) {
  getInput9.attr("style", "background-color:#ff6961;width: 100%; height: 50px");
} else if (g9 < systemTime) {
  getInput9.attr("style", "background-color:#cccccc;width: 100%; height: 50px");
}

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
