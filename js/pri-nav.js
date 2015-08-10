

$(document).ready(function() {

	console.log('Slider Binding');

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function primarySlideMenuTimer(){
		window.menuSlide = setTimeout(function(){
			primarySlideMenu();
		}, 2500);
	}

	function primarySlideMenu(){
		$('.primary-slide-menu-wrapper').toggleClass('psmw-close psmw-open');
		$('.js-primary-side-menu .pbs-icon-menu, .js-primary-side-menu .pbs-icon-menu-open').toggleClass('pbs-icon-menu pbs-icon-menu-open');
	}
	$('.js-primary-side-menu').on('click', function(){
		primarySlideMenu();
	});







	/* Accordion Widgets */
	if($('.widget-primary-accordion')){
		$('.widget-primary-accordion h5').click(function(){
			$(this).next('ul').toggle().toggleClass('open');
			$(this).find('i').toggleClass('open');
		});
	}

	$('.widget-content-accordion h5').click(function(){
		$(this).next('.accordian-content').toggle().toggleClass('open');
		$(this).find('i').toggleClass('pbs-icon-accordion pbs-icon-accordion-open');
	});
	$('.widget-accordion-list li').click(function(){
		$(this).next('li').toggle();
	});




	if(getParameterByName('callouts') == 'hide'){
		$('#menu-dropdown-02 .promo-vert-list').hide();
	}





	// Hover to display Dropdown menu item to Right Content
	$('.menu-item .drop-down-left-menu-list a').on('click', function(){
		var menuIndex = $(this).parent().index();
		$(this).parent().parent().find('li').removeClass('active');
		$(this).parent().addClass('active');
		console.log(menuIndex);


		var thisMenu = $(this).parent().parent().parent().parent();

		console.log(thisMenu);

		$('.drop-down-right-menu').hide();
		thisMenu.find('.drop-down-right-menu').eq(menuIndex).show();

		var dropdownRightMenuHeight = thisMenu.find('.drop-down-right-menu').eq(menuIndex).innerHeight();
		var menuItemHeight = thisMenu.find('.drop-down-left-menu-list').innerHeight();

		console.log('Right:'+dropdownRightMenuHeight+' | Left:'+menuItemHeight);

		if(dropdownRightMenuHeight < menuItemHeight){
			thisMenu.find('.drop-down-right-menu').eq(menuIndex).height(menuItemHeight+'px');
			console.log('adjusting right...');
		}else if(dropdownRightMenuHeight > menuItemHeight){
			thisMenu.find('.drop-down-left-menu-list').eq(menuIndex).height(menuItemHeight+'px');
			console.log('adjusting left...');
		}
	});







	// Sets Drop Down Menu Right Content Active
	$('.menu-item').on('mouseenter', function(){
		$(this).find('.drop-down-left-menu-list ul li').removeClass('active');
		$(this).find('.drop-down-left-menu-list ul li').eq(0).addClass('active');
		$(this).find('.drop-down-right-menu').hide();
		$(this).find('.drop-down-right-menu').eq(0).show();

		var dropdownRightMenuHeight = $(this).find('.drop-down-right-menu').eq(0).innerHeight();
		var menuItemHeight = $(this).find('.drop-down-left-menu-list').eq(0).innerHeight();

		if(dropdownRightMenuHeight < menuItemHeight){
			$(this).find('.drop-down-right-menu').eq(0).height(menuItemHeight+'px');
		}else if(dropdownRightMenuHeight > menuItemHeight){
			$(this).find('.drop-down-left-menu-list').eq(0).height(menuItemHeight+'px');
		}
	});



});





