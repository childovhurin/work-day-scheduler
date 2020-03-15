

$(document).ready(function () {
    //VARIABLES
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();
    console.log('current hour: ', currentHour)

    //CURRENT TIME/DAY
    $("#currentDay").text("Today's Date: " + currentDate);


    //LOCAL STORAGE EVENT LISTENER
    $(".saveBtn").on("click", function () {
        console.log("button duh");
        var click = $(this).attr("data-value");
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });

    //LOADING FROM LOCAL STORAGE
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];

    for (let i = 0; i < timeBlock.length; i++) {
        let savedEvent = $('.saved-event')
        console.log('looping through time block to retrieve LS');
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };

    //TIMESTYLE FUCNTION
    function timeStyle() {
        for (let i = 6; i < 18; i++) {

            let hour = '#' + i;
            let scheduleHour = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (
                scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            }
            else if (
                scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            }
            else if (
                scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            }

        };
    }
    timeStyle();

});
