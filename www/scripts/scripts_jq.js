$('document').ready(function(){
	console.log('JQ Connected')
	$('.container_menu').bind("click", function(){
		$('.load2').css({
			'animation-name':'slide',
  			'animation-duration':'1s',
		});
		$('.load2').css({
			'display':'block'
		});
		$('.load2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		    $(this).css('display', 'block');
		});
	});
	$('.back_menu').bind('click', function(){
		$('.load2').css({
			'animation-name':'slideback',
  			'animation-duration': '2s',
		});
		$('.load2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		    $(this).css('display', 'none');
		});
	});
});