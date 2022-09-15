$(document).ready(function() {
  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion({
    collapsible: true
  });
  
  window.sr = ScrollReveal();

  sr.reveal("#welcome", {
    duration: 1500,
    origin: "top",
    distance: "200px"
  });

  //Type js
  var typed = new Typed("#name", {
    strings: ["Jeffrey Almanzar."],
    typeSpeed: 90,
    showCursor: false,
    startDelay: 150,
    loop: false
  });

  sr.reveal("#about", {
    duration: 2500,
    origin: "bottom"
  });

  sr.reveal("#pro-1", {
    duration: 2000,
    origin: "left",
    distance: "30px"
  });

  sr.reveal("#pro-2", {
    duration: 2000,
    origin: "right",
    distance: "30px"
  });

  sr.reveal("#pro-3", {
    duration: 2000,
    origin: "left",
    distance: "30px"
  });

  sr.reveal("#pro-4", {
    duration: 2000,
    origin: "right",
    distance: "30px"
  });
});
