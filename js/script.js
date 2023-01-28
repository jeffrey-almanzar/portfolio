$(document).ready(function () {
  // $( "#tabs" ).tabs();
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
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

  sr.reveal("#hero-description", {
    duration: 2500,
    delay: 150,
    origin: "bottom",
    distance: "30px"
  });

  // sr.reveal("#pro-1", {
  //   duration: 2000,
  //   origin: "left",
  //   distance: "30px"
  // });

  // sr.reveal("#pro-2", {
  //   duration: 2000,
  //   origin: "right",
  //   distance: "30px"
  // });

  // sr.reveal("#pro-3", {
  //   duration: 2000,
  //   origin: "left",
  //   distance: "30px"
  // });

  // sr.reveal("#pro-4", {
  //   duration: 2000,
  //   origin: "right",
  //   distance: "30px"
  // });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })



  window.onscroll = function () { myFunction(); };

  let navbar = document.getElementsByClassName("navbar")[0];
  let sticky = 80;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("test-bg");
  }

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("test-bg");
    } else {
      navbar.classList.remove("test-bg");
    }
  }
});

