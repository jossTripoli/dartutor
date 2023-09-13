$(document).ready(function() {
    // displays yes question
    $('#showYes').on('click', function() {
        if($('#hideNo').hasClass('visible')) {
            $('#hideNo').toggleClass('hidden visible');
        }
        // Toggle the visibility classes
        $('#hideYes').toggleClass('hidden visible');
    });
    //displays no question
    $('#showNo').on('click', function() {
        if($('#hideYes').hasClass('visible')) {
            $('#hideYes').toggleClass('hidden visible');
        }
        // Toggle the visibility classes
        $('#hideNo').toggleClass('hidden visible');
    });
});