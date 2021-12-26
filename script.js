$(document).ready(function() {

  //Display the current date and time
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY , h:mm a"));
 
  //Save data to local storage when button clicked
  $(".saveButton").on("click", function () {
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Set items in local storage
  localStorage.setItem(time, text);
 });
 

  //Load current data from local storage
  $("#hour09 .description").val(localStorage.getItem("hour09"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));


  //Overall function to change block colours according to time
  function ChangeColour() {
     $(".time-block").each(function () {
      var presentTime= moment().hour();
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      //Compare row times and current time and adjust tense
      if(blockTime < presentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockTime === presentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  ChangeColour();
 
})
