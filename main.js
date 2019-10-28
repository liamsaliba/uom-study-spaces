$('#86-widget').click(function (e) {
    goForward( function () {
        $('#86-box').fadeIn('fast');
    });
});

$('#abp-widget').click(function (e) {
    goForward( function () {
        $('#abp-box').fadeIn('fast');
    });
});

$('#brownless-widget').click(function (e) {
    goForward( function () {
        $('#brownless-box').fadeIn('fast');
    });
});
$('#ge-widget').click(function (e) {
    goForward(function () {
        $('#ge-box').fadeIn('fast');
    });
});

$('#law-widget').click(function (e) {
    goForward(function () {
        $('#law-box').fadeIn('fast');
    });
});

function goBack(e) {
    $('.other-widget').fadeOut('fast', function () {
        $('#all-box').fadeIn('fast');
    });
}

function goForward(func){
    $('#all-box').fadeOut('fast', func());
}

$('.back-btn').click(goBack);
$('header').click(goBack);


var hours_dict = {};
$(function(){ 
    var week0 = new $.LibCalWeeklyGrid( $("#s-lc-whw0"), { iid: 855, lid: 0,  weeks: 4, systemTime: true }); 
});


$("body").on('DOMSubtreeModified', "#s-lc-whw0", function() {
    $("body").off("DOMSubtreeModified", "#s-lc-whw0");
    getHours();
});

function getHours() {
    $("#s-lc-whw0")
    .find("table tbody:first tr")
    .find("td:eq(0)")
    .map(function() {
        hours_dict[this.innerText] = $(this)
            .parent()
            .find(".s-lc-whw-today")
            .text(); 
    });
}



const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

 if (isInStandaloneMode()) {
    console.log("webapp is installed")
}