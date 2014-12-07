//$(window).on('eyeready', function() {
  $('.btn-default').on('click blink doubleblink', function() {
    $('.active').removeClass("active");
    $(this).addClass("active");
  });

  $($('.btn-primary')[0]).on('click blink doubleblink', function() {
    //$.post('game');
    $('form[id=startForm]').submit();
  });

  $($('.btn-primary')[1]).on('click blink doubleblink', function() {
    //$.post('game');
    $('form[id=joinForm]').submit();
  });
//});