$('#86-widget').click(function (e) {
    $('#all-box').fadeOut('fast', function () {
        $('#86-box').fadeIn('fast');
    });
});

$('#abp-widget').click(function (e) {
    $('#all-box').fadeOut('fast', function () {
        $('#abp-box').fadeIn('fast');
    });
});

$('#brownless-widget').click(function (e) {
    $('#all-box').fadeOut('fast', function () {
        $('#brownless-box').fadeIn('fast');
    });
});
$('#ge-widget').click(function (e) {
    $('#all-box').fadeOut('fast', function () {
        $('#ge-box').fadeIn('fast');
    });
});

$('#law-widget').click(function (e) {
    $('#all-box').fadeOut('fast', function () {
        $('#law-box').fadeIn('fast');
    });
});

$('.back-btn').click(function (e) {
    $('.other-widget').fadeOut('fast', function () {
        $('#all-box').fadeIn('fast');
    });
});

const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

 if (isInStandaloneMode()) {
    console.log("webapp is installed")
}