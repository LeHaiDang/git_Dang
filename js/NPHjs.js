//menu
$('.menu , .linee').on('click', function() {
  $('.menu').toggleClass('over')
  $('.linea1').toggleClass('overL1')
  $('.linea2').toggleClass('overL2')
  $('.linea3').toggleClass('overL3')
  $('nav').toggleClass('overvoci')
});

// back to top
$(function() {
	var offset = 300,
		scroll_opacity = 1200,
		scroll_duration = 700;

	$back_to_top = $('#back_to_top');

	$(window).scroll(function() {
		($(this).scrollTop > offset) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade-out');
		if ( $(this).scrollTop() > scroll_opacity ) {
			$back_to_top.addClass('fade-out');
		}
	});

	$back_to_top.on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: 0}, scroll_duration);
	});
});