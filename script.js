
//Display the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY , h:mm a"));
$("currentTime").text(moment().format("h:mm a"));

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
  });


  //Load data from local storage


//Save data to local storage when button clicked





