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
		$('.all').css({
			'animation-name':'blur',
  			'animation-duration':'1s',
		})
	});
	$('.arrow').bind('click',function(){
		$('.arrow').css({
			'animation-name':'brightarr',
  			'animation-duration':'1s',
		})
		$('.load2').css({
			'animation-name':'slideback',
  			'animation-duration': '2s',
		});
		$('.load2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		    $('.load2').css('display', 'none');
		    $('.arrow').css({
		    	'animation-name':'brightarr_end',
  				'animation-duration':'1s',
		    })
		});
		$('.all').css({
			'animation-name':'blurout',
  			'animation-duration':'1s',
		})
	})
});