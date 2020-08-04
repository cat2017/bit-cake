function autoAnimate() {
    var changeClass = function (top) {
        var obj = $("*");
        var name = "data-animate-name";
        var offsetTop = 40;


        obj.each(function () {
            var $this = $(this);
            var className = $this.attr(name);

            var tgTop = $this.offset().top - offsetTop;


            if (!!className) {

                if (top > tgTop && !$this.hasClass(className)) {

                    $this.addClass(className);

                }

            }


        });
    };


    $(window).scroll(function () {
        var top = $(this).scrollTop() + $(this).height();
        changeClass(top);
    });
    setTimeout(changeClass, 500, $(window).height());
}

$(function () {
    autoAnimate();

});