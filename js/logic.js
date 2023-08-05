// var containerGrid = $("<div>");
// containerGrid.addClass("containerGrid");
// containerGrid.attr(
//   "style",
//   "display: grid;max-width:1200px;height: 100px;grid-template-columns: 20% 60% 20%;grid-template-rows: 100%;grid-template-areas: item1 item2 item3 ;background-color: antiquewhite;position:static;"
// );
var containerGrid = $(".containerGrid");

var div1 = $("<div>");
var div2 = $("<div>");
var div3 = $("<div>");

var h11 = $("<h1>");
var h12 = $("<h1>");
var h13 = $("<h1>");

div1.addClass("item1");
div1.attr("style", "grid-area: item1;background-color: #06aed5;");

div2.addClass("item2");
div2.attr("style", "grid-area: item2;background-color: #77dd77;");

div3.addClass("item3");
div3.attr("style", "grid-area: item3;background-color: #aquamarine;");

h11.text("10:am");
h12.text("breakfast");
h13.text("save");

div1.append(h11);
div2.append(h12);
div3.append(h13);

containerGrid.append(div1);
containerGrid.append(div2);
containerGrid.append(div3);
// -----------------------------------
var currentDay = $("#currentDay");
var ullist = $("#ullist");

currentDay.text(dayjs().format("dddd, MMMM D") + "th");

var list = $("<li>");

//setting the list style
ullist.attr(
  "style",
  "text-decoration: none; background-color:grey; margin-top:20px"
);
list.attr("style", "display: inline;height:200px;padding:20px");
//shows time
// list.text(dayjs().format("h:mm A"));
ullist.append(list);

//text to show
var pText = $("<span>");
pText.attr("style", "background-color:black;padding:20px;width:30%");
pText.text(dayjs().format("h:mm A"));
list.append(pText);

var spanText = $("<span>");
spanText.text("Breakfast:");
list.append(spanText);

//shows button to save event
var button = $("<button>");
button.text("save");
list.append(button);
