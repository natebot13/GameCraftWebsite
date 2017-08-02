$(document).ready(() => {
  $("body").mousemove(event => {
    var x = event.pageX;
    var y = event.pageY;
    var centerx = $(window).width() / 2;
    var centery = $(window).height() / 2;

    var dx = x - centerx;
    var dy = y - centery;

    var dist = Math.sqrt(dx*dx + dy*dy);
    var transDist = (dist * 7) / centerx;
    var circleDist = (dist * 45) / centerx;

    var angle = Math.atan2(dy, dx);
    var adj = circleDist * Math.cos(angle);
    var opp = circleDist * Math.sin(angle);

    var trans = `translateX(-50%) translateY(-50%) rotateX(${-opp}deg) rotateY(${adj}deg) translateZ(10em)`;
    var transObj = {webkitTransform: trans, msTransform: trans, mozTransform: trans, transform: trans};
    console.log($('#joystick-head').css(transObj));
  });
});