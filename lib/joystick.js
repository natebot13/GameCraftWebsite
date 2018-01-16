'use strict';

$(document).ready(function () {
    $("body").mousemove(function (event) {
        var x = event.pageX;
        var y = event.pageY;

        var center = $('#joystick-handle').offset();

        var centerx = center.left;
        var centery = center.top;

        // const centerx = $(window).width() / 2;
        // const centery = $(window).height() / 2;


        var dx = x - centerx;
        var dy = y - centery;

        var dist = Math.sqrt(dx * dx + dy * dy);
        var transDist = Math.min(dist * 7 / (centerx / 2), 45);
        var circleDist = Math.min(dist * 45 / (centerx / 2), 45);

        var angle = Math.atan2(dy, dx);
        var adj = circleDist * Math.cos(angle);
        var opp = circleDist * Math.sin(angle);

        var trans = 'translateX(-50%) translateY(-50%) rotateX(' + -opp + 'deg) rotateY(' + adj + 'deg) translateZ(10em)';
        var transObj = { webkitTransform: trans, msTransform: trans, mozTransform: trans, transform: trans };
        $('#joystick-head').css(transObj);
    });
});