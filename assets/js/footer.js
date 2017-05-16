$(document).ready(function(){

  function side1() {
    $('.ui.side').addClass('invisible');
    $('.ui.side .ui.menu').removeClass('accordion');
    $('.ui.side .ui.menu').addClass('icon');
    $('.ui.side .ui.menu .dropdown.icon').remove();
    $('.ui.side .ui.menu div.item:not(.header)').addClass('ui dropdown');
    $('.ui.dropdown.item').dropdown({on: 'hover'});
    $('.ui.side .ui.menu .item:not(.header)').removeClass('hidden');
  }

  function side2() {
    $('.ui.side').removeClass('invisible');
    $('.ui.side .ui.menu').addClass('accordion');
    $('.ui.side .ui.menu').removeClass('icon');
    $('.ui.side .ui.menu .item:not(.header)').removeClass('ui dropdown');
    $('.ui.side .ui.menu .title').append('<i class="dropdown icon"></i>');
    $('.ui.accordion').accordion({selector: {trigger: '.title'}});
    $('.ui.side .ui.menu .item:not(.header)').dropdown('destroy');
  }

  $('#close_side').click(function() {
    if ($('.ui.side').hasClass('invisible')) {
      side2();
    } else {
      side1();
    }
  });

});


