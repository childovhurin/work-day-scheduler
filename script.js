$(document).ready(function () {
    //VARIABLES
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();
    console.log('current hour: ', currentHour)

});