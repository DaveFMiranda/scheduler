/*STEPS:

1a) Wrap all code in a call to jQuery so JS code doesn't run until browser has
finished rendering all elements in HTML doc

*/

// Sets variables for current day and hour
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));
var hourCurrent = today.format('HH');

//An array of number-block IDs to set up the loop below
var hourLabelArray = ["hour-6", "hour-7", "hour-8", "hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17", "hour-18", "hour-19", "hour-20", "hour-21", "hour-22"];

// Changes IDs to numbers
for (var i = 0; i < hourLabelArray.length; i++) {
  var hourLabel = $('#' + hourLabelArray[i]);
  hourLabel.attr('id', i+6);

// Adds classes to hour blocks based on current time
  var classLabel = i+6;
  if (classLabel < hourCurrent) {
    $('#' + classLabel).addClass('row time-block past');
  }
  else if (classLabel == hourCurrent) {
    $('#' + classLabel).addClass('row time-block present');
  }
  else {
    $('#' + classLabel).addClass('row time-block future');
  }
}



//console.log(saveButtonClick);

//for (var j = 0; j < 16; j++){
 // buttonID = $('.btn').eq(j);

// Saves user-entered text to local storage
  $('.btn').on("click", function() {
    textEntered = $(this).siblings().eq(1).val();
    storageID = $(this).parent().attr('id');
    textStore = textEntered.toString();
    IDStore = storageID.toString();
    localStorage.setItem(storageID, textEntered);
  })
  
  //DAVE START HERE
  // Pulls data from local storage into text areas
  /*for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    $('#' + i).children().eq(1).text(value);
  }*/
    //savedText = localStorage.getItem('storageID');
   // $(this).siblings().eq(1).text(savedText);
    //console.log(savedText);
  



    // pull user input from local storage. 
    // save it to the html in "textarea"

//console.log(textStore);
//console.log(IDStore);

    //console.log(textEntered);
    //console.log(storageID);
  
//}



//localStorage.setItem()

//localStorage.getItem()


/*
4) Pull user input from localStorage and then that becomes the updated text of
that timeblock. Use the ID attribute of each time-block.
- save text into ID hour-X.textarea

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
