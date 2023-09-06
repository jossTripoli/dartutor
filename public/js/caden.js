$(document).ready(function() {
    // shows a pop up for the button to see the profile
    $('.button').popup();
    // once the showProfile button is clicked
    $('#showProfile').on('click', function() {
        // Toggle the visibility classes to trigger the transition
        $('#hideProfile').toggleClass('hidden visible');
        // transition for the hidden profile
        $('#hideProfile').transition('flash');
    });
});