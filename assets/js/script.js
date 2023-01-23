//js script with moment.js library
//this shows the current day and time on the top of the page

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
var todayTime = moment().format(' HH:mm');
$("#currentTime").html(todayTime);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(text);
        
 //        Save text in local storage
      localStorage.setItem(time, text);
      alert(text)
    })
   
    function timeTracker() {
        //get current number of hours.
         // loop over time blocks
        $(".time-block").each(function () {
            var currentTime = moment().hour();

            var blockTime = parseInt($(this).attr("id").split("-")[1]);

    // To check the time and add the classes for background indicators
           var timeBlock = $(".time-block");
            
 for (var i = 0; i < timeBlock.length; i++) {}
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //click function to alert and save //function to save button
    $(document).ready(function () {
        var saveButton = $('btn');
        $(saveButton).hide();
        $('.saveBtn').on("click",function(e) {
            $(saveButton).animate({
                'opacity': 'toggle'
            });
        });
    });
    $(document).on('click', '.saveBtn', function(){
        alert("Saved! Check the console.");
       

      });
    // Get item from local storage if any
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeTracker();
})

