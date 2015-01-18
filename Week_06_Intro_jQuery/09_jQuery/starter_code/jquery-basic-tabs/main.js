// When you click on a navigation tab, it will show
// that section, and it will the hide the other sections

// The selected tab will have a black ground and be
// noticably different from the unselected tabs

// When I'm trying to activate one thing:
// I'd rather deactivate everything
// Then activate that one thing

$(document).ready(function() {
  function openTravel() {
    $("section").hide();
    $("#travel-content").show();
    $("nav a").removeClass('active');
    $("#travel").addClass('active');
  }

  function openAbout() {
    $("section").hide();
    $("#about-content").show();
    $("nav a").removeClass('active');
    $("#about").addClass('active');
  }

  function openContact() {
    $("section").hide();
    $("#contact-content").show();
    $("nav a").removeClass('active');
    $("#contact").addClass('active');
  }

  $("#travel").click(openTravel);
  $("#about").click(openAbout);
  $("#contact").click(openContact);

});