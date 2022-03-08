$(window).on('load resize', function(){
	windowHeight = $(window).height();
	$('.scroll').css('height', windowHeight);
})
$(function(){
	$('.jacket img').click(function(){
		$('.modal').fadeIn();
	})
	$('.modal').click(function(){
		$(this).fadeOut();
	})
})
