'use strict';

$(document).ready(function () {

  var currentEvent = 0;

  var slideToCurrentEvent = function() {
    var translateL = {transform: 'translateX(100%)'};
    var translateR = {transform: 'translateX(-100%)'};
    var translateNone = {transform: 'none'};

    var w = $('.event-card').width()
    var translate = {transform: 'translateX(-' + (w * currentEvent + w/2) + 'px)'}
    $('.event-row').css(translate);
    $('.event-card').each(function(n, e) {
      if (n == currentEvent) {
        $(e).find('.cover .l').css(translateL);
        $(e).find('.cover .r').css(translateR);
      }
      else if (n < currentEvent) {
        $(e).find('.cover .l').css(translateL);
        $(e).find('.cover .r').css(translateNone);
      }
      else if (n > currentEvent) {
        $(e).find('.cover .r').css(translateR);
        $(e).find('.cover .l').css(translateNone);
      }
    });
  };

  $('.event-card').each(function (n, e) {
    var dateStr = $(e).data('date');
    if (moment() < moment(dateStr, 'MMDDYYYY')) {
      currentEvent = n;
      slideToCurrentEvent();
      return false;
    }
  });

  $('.event-arrow-left').click(function() {
    currentEvent -= 1;
    if (currentEvent < 0) currentEvent = 0;
    slideToCurrentEvent();
  });

  $('.event-arrow-right').click(function() {
    currentEvent += 1;
    if (currentEvent >= $('.event-card').length) currentEvent = $('.event-card').length - 1;
    slideToCurrentEvent();
  });

  $('.event-card').click(function() {
    var target = this;
    $('.event-card').each(function(n, el) {
      if (el === target) {
        currentEvent = n;
        slideToCurrentEvent();
        return false;
      }
    });
  });
});