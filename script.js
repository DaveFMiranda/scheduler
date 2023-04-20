/* STEPS:
1) Look at existing files

1a) Wrap all code in a call to jQuery so JS code doesn't run until browser has
finished rendering all elements in HTML doc

2) listener for click events on save button
  - save to local storage (need to use ID, see hint below). Need to use "this".
  - .hour-9.button.addListenerEvent ("click", THING) {
    ADD LOGIC TO SAVE TO LOCAL STORAGE

  }
  Get the hour-x ID of the timeblock clicked. Use the ID when saving.

3) Add code to apply past, present, or future class to each time block.
  - compare ID to current hour
    - IF (timeblock ID is earlier than current hour) {
      setattribute blockID to class (past)
    }
    - repeat for present and future
  - use day.js to get the current hour in 24-hour time
  - class names from HTML:
  class="row time-block past"
  class="row time-block present"
  class="row time-block future"
*/

// Sets variables for current day and hour
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));
var hourCurrent = today.format('HH');

// Sets timeblock to past, present, or future class

// create a function that adds an attribute of a number to each timeblock.

var hourLabelArray = ["hour-6", "hour-7", "hour-8", "hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17", "hour-18", "hour-19", "hour-20", "hour-21", "hour-22"];

console.log(hourLabelArray);

for (var i = 0; i < hourLabelArray.length; i++) {
  var hourLabel = $('#' + hourLabelArray[i]);
  hourLabel.attr('id', i+6);
  var classLabel = i+6;
  if (classLabel < hourCurrent) {
    $('#' + classLabel).addClass('row time-block past');
    console.log(classLabel);
  }
  else if (classLabel == hourCurrent) {
    $('#' + classLabel).addClass('row time-block present');
    console.log(classLabel);
  }
  else {
    $('#' + classLabel).addClass('row time-block future');
    console.log(classLabel);
  }
}

console.log(hourCurrent);
console.log(hourCurrent);

//if (hourLabel.attr < currentHour) {

//}

console.log(hourLabelArray);

console.log(hourLabel.attr('id'));




/*for (var i = 7; i < 23; i++) {
var newBlock = $('<div>');
newBlock.id([i]);
  if (i < hourCurrent) {
    newBlock.addclass('row time-black past');
  }
  if (i = hourCurrent)

newBlock.text
}


// start with one block in HTML. Then use a for-loop to append new blocks until
// you get to 23. Set the ID of each new block to the old ID + 1. 
// Set the class of each new block based on if logic comparing to currentHour
// 


if (hourNumber < hourCurrent) {

}

console.log(hourNumber);

if (hourNumber === 9) {
console.log(hourNumber)
}
//if ()
// hour = ID, then...
// Attr(class. //set class to whatever)
/*
4) Pull user input from localStorage and then that becomes the updated text of
that timeblock. Use the ID attribute of each time-block.
- save text into ID hour-X.textarea


5) Display current date in page header
- use ID "currentDay", set the text to the current day
*/

// HTML notes:
// 



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
