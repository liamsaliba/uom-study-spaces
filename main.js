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
    setHours();
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

function setHours(){
    abp = hours_dict["Architecture, Building and Planning Library"];
    bail = hours_dict["Baillieu Library"];
    bailah = hours_dict["Baillieu Library After Hours Study Zone"];
    brown = hours_dict["Brownless Biomedical Library"];
    brownah = hours_dict["Brownless Biomedical Library After Hours Study Zone"];
    erc = hours_dict["Eastern Resource Centre"];
    ercah = hours_dict["Eastern Resource Centre After Hours Study Zone"];
    ge = hours_dict["Giblin Eunson Library"];
    geah = hours_dict["Giblin Eunson Library After Hours Study Zone"];
    law = hours_dict["Law Library"]

    $("#abp-widget .open").text(abp);
    $("#86-widget .open").text(bail);
    $("#86-widget .after").text(bailah);
    $("#brownless-widget .open").text(brown);
    $("#brownless-widget .after").text(brownah);
    $("#erc-widget .open").text(erc);
    $("#erc-widget .after").text(ercah);
    $("#ge-widget .open").text(ge);
    $("#ge-widget .after").text(geah);
    $("#law-widget .open").text(law);

    $("#abp-box .open").text(abp);
    $("#86-box .open").text(bail);
    $("#86-box .after").text(bailah);
    $("#brownless-box .open").text(brown);
    $("#brownless-box .after").text(brownah);
    $("#erc-box .open").text(erc);
    $("#erc-box .after").text(ercah);
    $("#ge-box .open").text(ge);
    $("#ge-box .after").text(geah);
    $("#law-box .open").text(law);
    
}



const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

 if (isInStandaloneMode()) {
    console.log("webapp is installed")
}