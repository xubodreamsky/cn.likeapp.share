'use strict';
(function() {
    $(".tabs h4").on("click", function() {
        var index = $(this).data("index");
        $(".tabs h4").removeClass("active");
        $("#owl .item").hide();
        $($("#owl .item").get(index)).show();
        $(this).addClass("active");

        var windowHeight = $(window).height();
        var bodyHeight = $(".header-wrapper").height() + $(".main").height() + 283;
        if(bodyHeight < windowHeight) {
            $("body").height(windowHeight);
        } else {
            $("body").height(bodyHeight);
        }
    });

    $(".tabs h4").on("mouseenter", function() {
        $(this).addClass("hover");
    });

    $(".tabs h4").on("mouseleave", function() {
        $(this).removeClass("hover");
    });
})();
