$(document).ready(() => {
  $("body").mousemove(event => {
    const x = event.pageX;
    const y = event.pageY;

    const center = $('#joystick-handle').offset();

    const centerx = center.left;
    const centery = center.top;

    // const centerx = $(window).width() / 2;
    // const centery = $(window).height() / 2;


    const dx = x - centerx;
    const dy = y - centery;

    const dist = Math.sqrt(dx*dx + dy*dy);
    const transDist = Math.min((dist * 7) / (centerx / 2), 45);
    const circleDist = Math.min((dist * 45) / (centerx / 2), 45);

    const angle = Math.atan2(dy, dx);
    const adj = circleDist * Math.cos(angle);
    const opp = circleDist * Math.sin(angle);

    const trans = `translateX(-50%) translateY(-50%) rotateX(${-opp}deg) rotateY(${adj}deg) translateZ(10em)`;
    const transObj = {webkitTransform: trans, msTransform: trans, mozTransform: trans, transform: trans};
    $('#joystick-head').css(transObj);
  });
});