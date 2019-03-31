
$(document).ready(function(){
    window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration:2000,
        origin:'bottom'
    });

    sr.reveal('#welcome', {
        duration:2000,
        origin:'top',
        distance:"300px"
    });

    //Type js
    var typed = new Typed("#title-description", {
        strings: ["I'm a front-end web developer and computer science student."],
        typeSpeed: 60,
        showCursor:false,
        startDelay:1000,
        loop:true
    });

    sr.reveal('#about', {
        duration:2500,
        origin:'bottom'
    });

    sr.reveal('#pro-1', {
        duration:2000,
        origin:'left',
        distance:'50px'
    });

    sr.reveal('#pro-2', {
        duration:2000,
        origin:'right',
        distance:'50px'
    });

    sr.reveal('#pro-3', {
        duration:2000,
        origin:'left',
        distance:'50px'
    });

    sr.reveal('#pro-4', {
        duration:2000,
        origin:'right',
        distance:'50px'
    });

   
});
