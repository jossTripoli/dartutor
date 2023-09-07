$(document).ready(function() {
    $('#showInformation').on('click', function() {
        //Stop loading 
        
        var dimmer = document.getElementById("Dimmer");
        dimmer.style.display = "none";

        $('#RightCol').css("background-color","#65B8BF");
        $('#RightCol').transition('bounce');

    });
});