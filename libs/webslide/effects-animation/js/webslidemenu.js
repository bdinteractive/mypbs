$(function() {
	var items = $('.overlapblackbg, .slideLeft');
	var wsmenucontent = $('.wsmenucontent');
	
	var menuopen = function() {
	$(items).removeClass('menuclose').addClass('menuopen');
						}
	var menuclose = function() { 
	$(items).removeClass('menuopen').addClass('menuclose');
	}

	$('#navToggle').click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
		else {$(menuopen)}
	});
	wsmenucontent.click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
	});
	
	$('#navToggle,.overlapblackbg').on('click', function(){
	$('.wsmenucontainer').toggleClass( "mrginleft" );
	});

	$('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	
	$('.wsmenu-list li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
		
	$('.wsmenu-mobile').click(function(){
		$('.wsmenu-list').slideToggle('slow');
	});
	$('.wsmenu-click').click(function(){
	$(this).siblings('.wsmenu-submenu').slideToggle('slow');
	$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
	$(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
	$(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
	$(this).siblings('.megamenu').slideToggle('slow');
	});
	
	// Append the aero class
	$('.wsmenu-list > li').has('.wsmenu-submenu').addClass('menu-arrow-1');
	$('.wsmenu-list > li > .wsmenu-submenu > li').has('.wsmenu-submenu-sub').addClass('menu-arrow-2');
	$('.wsmenu-list > li > .wsmenu-submenu > li > .wsmenu-submenu-sub > li').has('.wsmenu-submenu-sub-sub').addClass('menu-arrow-2');		
	
	$('.wsmenu-list > li').has('.megamenu').addClass('menu-arrow-1');
		
	window.onresize = function(event) {
		console.log('window resize');
		if($(window).width() > 781){
			$('.wsmenu-submenu').removeAttr("style");
 			$('.wsmenu-list').removeAttr("style");
 		}
    };
	

});