$(document).ready(function(){
	$(".nav li ul").hide();
	
	$('#container .nav li').has('ul').prepend('<span class="arrow"></span>');
	
	$('#container .nav li').hover(
			function () {
				$('ul', this).stop().slideDown(100);			
			}, 
			function () {
				$('ul', this).stop().slideUp(100);			
			}
	);
	
	$(".slides").cycle({ 
    fx:     'fade', 
    speed:  1000, 
    next:   '#next', 
    prev:   '#prev'
	});
	
	$topHeaderHeight = $("#topHeader").height();
	$navHeight = $(".nav").height();
	$sliderHeight = $(".slider").height();
	
	$theHeight = $navHeight + 395 + $leftHeight;
	
	$("#container").height($theHeight);


});
