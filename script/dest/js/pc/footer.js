'use strict';
(function () {
    var documentHeight = $(document).height();
    var offsetHeight = 150;
    var bodyHeight = $("body").height();
    if (bodyHeight < documentHeight) {
        if (documentHeight - bodyHeight > 180) {
            $("body").height(documentHeight);
        } else {
            $("body").height(documentHeight + 180);
        }
    } else {
        $("body").height(documentHeight);
    }
})();
