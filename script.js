/* images qui slide vers le haut */

$(window).scroll(function () {
    $('#').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideUp");
        }
    });
});

$('#object').click(function () {
    $(this).addClass("slideUp");
});