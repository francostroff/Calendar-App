//js script with moment.js library
//this shows the current day and time on the top of the page

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
var todayTime = moment().format('LTS');
$("#currentTime").html(todayTime);

var calendarTime = moment().calendar(); 
$("#currentDay").html(calendarTime);

  $(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
     //   var currentTime = moment().format('LTS');
        
   //      prevent default
  //       event.preventDefault();
 //        Save text in local storage
      localStorage.setItem(time, text);
      alert(text)
        
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = [];
    
      
             // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            // if timeNow is >  timeBlock class=.past
            // if timeNow is = timeBlock class=.present
            // if timeNow is <  timeBlock class=.future
             var timeBlock = $(".time-block");
            
 for (var i = 0; i < timeBlock.length; i++) {}
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
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
        $('.saveBtn').onclick(function(e) {
            $(saveButton).animate({
                'opacity': 'toggle'
            });
        });
    });
    $(document).on('click', '.saveBtn', function(){
        alert("Saved! Check the console.");

      });
    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

