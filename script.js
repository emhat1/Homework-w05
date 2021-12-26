$(document).ready(function() {
  //Display the current date and time
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY , h:mm a"));
  $("currentTime").text(moment().format("h:mm a"));

  // Assign saveButtonn click listener 
  $(".saveButton").on("click", function () {
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
 
  // Set items in local storage
  localStorage.setItem(time, text);
})

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

  //Compare current time and row time and adjust tense as necessary
  $(".time-block").each(function () {
    var presentTime = moment().hour();
    var blockTime = parseInt($(this).attr("id").split("time")[1]);
    if (blockTime < presentTime) {
      $(this).addClass("past");
    } 
    else if (blockTime == presentTime) {
      $(this).removeClass("past").addClass("present");
    } 
    else {
      $(this).removeClass("past", "present").addClass("future");
    }
  })

//Save data to local storage when button clicked
$(".saveButton").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
  
    // Set items in local storage
    localStorage.setItem(time, text);
  


 });

}
