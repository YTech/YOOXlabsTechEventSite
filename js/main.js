$(document).ready(

    function () {

        $("html").niceScroll();

    }

);

$('a[href*=#]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        $('nav li').removeClass('active');
        $(this).parent().addClass('active');
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 800);
            return false;
        }
    }
});