$(document).ready(function() {
  $('a.toggle-button').click(function() {
    if ($(this).hasClass('sidebar-open')) {
      $(this).removeClass('sidebar-open');
      $(this).addClass('sidebar-closed');
      $(this).text('open');
      $('.left-sidebar').animate({left: '-9%'}, 'fast');
    }
    else {
      $(this).addClass('sidebar-open');
      $(this).removeClass('sidebar-closed');
      $(this).text('close');
      $('.left-sidebar').animate({left: '8'}, 'fast');
    }
  });
});
