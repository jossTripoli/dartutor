$(document).ready(function () {
  let hobbiesData;
  let currentHobby = null;

  $.getJSON("../json/hua.json", function (data) {
    console.log(data.person.hobbies);
    hobbiesData = data.person.hobbies;
  });

  $("#getRandomHobby").on("click", function () {
    if (hobbiesData) {
      let randomHobby;
      do {
        const randomIndex = Math.floor(Math.random() * hobbiesData.length);
        randomHobby = hobbiesData[randomIndex];
      } while (randomHobby === currentHobby);

      currentHobby = randomHobby;
      $("#displayHobby").text(randomHobby);
    }
  });

  $("#browsePhotos").on("click", function () {
    console.log("Hello");
  });

  $(".menu .item").on("click", function () {
    const tabName = $(this).data("tab");

    // Hide all tab content segments
    $(".tab.segment").removeClass("active");

    // Show the selected tab content segment
    $(`.tab.segment[data-tab="${tabName}"]`).addClass("active");

    // Update the active class on the menu items
    $(".menu .item").removeClass("active");
    $(this).addClass("active");
  });
});
