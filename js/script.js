$(document).ready(function() {
  window.sr = ScrollReveal();

  sr.reveal("#welcome", {
    duration: 1500,
    origin: "top",
    distance: "200px"
  });

  //Type js
  var typed = new Typed("#title-description", {
    strings: ["Software engineer Intern and computer science tutor."],
    typeSpeed: 60,
    showCursor: false,
    startDelay: 100,
    loop: true
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
