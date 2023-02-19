$(document).ready(function () {
  // $( "#tabs" ).tabs();
  $("#mobile-accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    beforeActivate,
  });

  $("#experience-acc").accordion({
    collapsible: true,
    heightStyle: "content",
    beforeActivate,
  });
  $("#credentials-acc").accordion({
    collapsible: true,
    heightStyle: "content",
    beforeActivate,
  });

  window.sr = ScrollReveal();

  sr.reveal("#welcome", {
    duration: 1500,
    origin: "top",
    distance: "200px"
  });

  //Type js
  const typed = new Typed("#name", {
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

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })



  window.onscroll = function () { addNavBackgroundClass(); };

  const navbar = document.getElementsByClassName("navbar")[0];
  const sticky = 80;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("custom-nav-bg");
  }

  function addNavBackgroundClass() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("custom-nav-bg");
    } else {
      navbar.classList.remove("custom-nav-bg");
    }
  }
});


function beforeActivate (event, ui) {
  // The accordion believes a panel is being opened
  if (ui.newHeader[0]) {
    var currHeader = ui.newHeader;
    var currContent = currHeader.next('.ui-accordion-content');
    // The accordion believes a panel is being closed
  } else {
    var currHeader = ui.oldHeader;
    var currContent = currHeader.next('.ui-accordion-content');
  }
  // Since we've changed the default behavior, this detects the actual status
  var isPanelSelected = currHeader.attr('aria-selected') == 'true';

  // Toggle the panel's header
  currHeader.toggleClass('ui-corner-all', isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top', !isPanelSelected).attr('aria-selected', ((!isPanelSelected).toString()));

  // Toggle the panel's icon
  currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e', isPanelSelected).toggleClass('ui-icon-triangle-1-s', !isPanelSelected);

  // Toggle the panel's content
  currContent.toggleClass('accordion-content-active', !isPanelSelected)
  if (isPanelSelected) { currContent.slideUp(); } else { currContent.slideDown(); }

  return false; // Cancels the default action
}
