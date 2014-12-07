//$(window).on('eyeready', function() {
  $($('.btn-primary')[0]).on('click blink doubleblink', function() {
  	$(location).attr('href',"/")
  });

  $($('.btn-primary')[1]).on('click blink doubleblink', function() {
    //$.post('game');
    $('form[id=joinForm]').submit();
  });
//});