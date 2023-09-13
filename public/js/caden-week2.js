$(document).ready(function() {
    // displays yes question
    $('#showYes').on('click', function() {
        // Toggle the visibility classes
        $('#hideYes').toggleClass('hidden visible');
    });
    //displays no question
    $('#showNo').on('click', function() {
        // Toggle the visibility classes
        $('#hideNo').toggleClass('hidden visible');
    });
});