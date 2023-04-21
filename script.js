$(function () {
  // Saves current day and time from day.js
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMM D, YYYY"));
  var hourCurrent = today.format("HH");

  //An array of number-block IDs to set up the loop below
  var hourLabelArray = [
    "hour-6",
    "hour-7",
    "hour-8",
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
    "hour-18",
    "hour-19",
    "hour-20",
    "hour-21",
    "hour-22",
  ];

  // Changes number-block IDs to numbers
  for (var i = 0; i < hourLabelArray.length; i++) {
    var hourLabel = $("#" + hourLabelArray[i]);
    hourLabel.attr("id", i + 6);

    // Adds classes to hour blocks based on current time
    var classLabel = i + 6;
    if (classLabel < hourCurrent) {
      $("#" + classLabel).addClass("row time-block past");
    } else if (classLabel == hourCurrent) {
      $("#" + classLabel).addClass("row time-block present");
    } else {
      $("#" + classLabel).addClass("row time-block future");
    }
  }

  // Saves user-entered text to local storage
  $(".btn").on("click", function () {
    textEntered = $(this).siblings().eq(1).val();
    storageID = $(this).parent().attr("id");
    localStorage.setItem(storageID, textEntered);
  });

  // Creates arrays to match local storage data to hour block ID
  savedID = [];
  savedText = [];
  IDArr = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  // Pulls data from local storage into arrays
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    savedID.push(parseInt(key));
    savedText.push(value);
  }

  // Pushes saved text values into their associated text areas
  for (var i = 0; i < IDArr.length; i++) {
    for (var j = 0; j < savedID.length; j++) {
      if (IDArr[i] === savedID[j]) {
        loadedTextTarget = savedID[j];
        loadedTextValue = savedText[j];
        $("#" + loadedTextTarget)
          .children()
          .eq(1)
          .text(loadedTextValue);
      }
    }
  }
});