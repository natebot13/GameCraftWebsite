'use strict';

$(document).ready(function () {
  $('.btn-hamburger').click(function (e) {
    $(e.target).toggleClass('change');
  });

  $('#side-menu-toggler').click(function (e) {
    $('#side-menu').toggleClass('hidden');
  });
});