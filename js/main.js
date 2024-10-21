(function($) {
	"use strict";
	//
	//====================================================================//
	// Preloader
	//====================================================================//
	//
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	//
	//====================================================================//
	// Header Style
	//====================================================================//
	//
	function headerStyle() {
		if($('.fixed-header-area').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.fixed-header-area');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();
	
	//
	//====================================================================//
	// Submenu
	//====================================================================//
	//
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Main Menu Fade Toggle
		$('.header-style-three .nav-toggler').on('click', function() {
			$('.header-style-three .main-menu').fadeToggle(300);
		});
		
	}
	//
	//====================================================================//
	// Toggle Box
	//====================================================================//
	//
	
	if($('.main-header .header-upper .option-box .nav-btn').length){
		//Show Form
		$('.main-header .header-upper .option-box .nav-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('appointment-form-visible');
		});
		//Hide Form
		$('.appointment-box .inner-box .cross-icon,.form-back-drop').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('appointment-form-visible');
		});
	}
	//
	//====================================================================//
	// Progress Bar
	//====================================================================//
	//
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	//
	//====================================================================//
	// Accordion
	//====================================================================//
	//
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	//
	//====================================================================//
	// Main Slider
	//====================================================================//
	//
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			autoplayHoverPause: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1},
					600:{
					items:1},
					800:{
					items:1},
					1024:{
					items:1},
					1200:{
					items:1}
				}
			});    		
		}

	//
	//====================================================================//
	// Tabs Box
	//====================================================================//
	//
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	//
	//====================================================================//
	// Sticky Content
	//====================================================================//
	//
	if($('.sticky-box').length){
		var a = new StickySidebar('.business-section .title-column .inner-column', {
			topSpacing: 80,
			bottomSpacing: 0,
			containerSelector: '.sticky-container',
			innerWrapperSelector: '.sticky-box'
		});
	}

	//
	//====================================================================//
	// Fact Counter
	//====================================================================//
	//
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	//
	//====================================================================//
	// Gallery Carousel Two
	//====================================================================//
	//
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:true,
			margin:50,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{items:1},
				600:{items:1},
				800:{items:1},
				1024:{items:1},
				1200:{items:1}
			}
		});    		
	}

	//
	//====================================================================//
	// Sponsors Carousel
	//====================================================================//
	//
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{items:2},
				480:{items:2},
				600:{items:3},
				800:{items:4},
				1024:{items:6}
			}
		});    		
	}

	
	//
	//====================================================================//
	// Sortable Masonary with Filters
	//====================================================================//
	//
	function sortableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-3'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	sortableMasonry();
	//
	//====================================================================//
	// Custom Seclect Box
	//====================================================================//
	//
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	//
	//====================================================================//
	// Gallery Filters
	//====================================================================//
	//
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	//
	//====================================================================//
	// LightBox / Fancybox
	//====================================================================//
	//
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	//
	//====================================================================//
	// Contact Form Validation
	//====================================================================//
	//
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				firstname: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	//
	//====================================================================//
	// Scroll to a Specific Div
	//====================================================================//
	//
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	//
	//====================================================================//
	// Elements Animation
	//====================================================================//
	//
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		  }
		);
		wow.init();
	}
	//
	//====================================================================//
	// When document is Scrollig, do
	//====================================================================//
	//
	$(window).on('scroll', function() {
		headerStyle();
	});
	//
	//====================================================================//
	// When document is loading, do
	//====================================================================//
	//	
	$(window).on('load', function() {
		handlePreloader();
		sortableMasonry();
	});	
})(window.jQuery);
