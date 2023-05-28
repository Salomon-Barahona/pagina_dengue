/* =====================================
Template Name: Tromas
Author Name: Codeglim
Description: Tromas is a Multipurpose Business HTML5 Theme. It's Perfect for any business websites. You can customize every section as your need.
Version:	1.1
========================================*/    
/*=======================================
[Start Activation Code]
=========================================
	01. Sticky Header JS
	02. One Page Nav
	03. Mobile Nav JS
	04. Home Slider One
	05. Home Slider Two
	06. Mouse Moving JS
	07. Counter JS
	08. Team JS
	09. Testimonial JS
	10. Checkbox JS
	11. Clients Carousel JS
	12. Blog Slider JS
	13. Service Slider JS
	14. Countdown JS
	15. Project Single Slider JS
	16. Blog Archive Slider JS
	17. Parallax JS
	18. Animate Scroll JS
	19. Scroll Up JS
	20. Video Popup JS
	21. Extra JS
=========================================
[End Activation Code]
=========================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){	
		
		
		
		/*===============================
		04. Home Slider One
		=================================*/ 
		$(".slider-one").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 700,
			autoplayTimeout:4500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:true,
			items:1,
			responsive:{
				300: {
					nav:false,
				},
				480: {
					nav:false,
				},
				768: {
					nav:false,
				},
				1170: {
					nav:true,
				},
			}
		});	
		
		/*===============================
		05. Home Slider Two
		=================================*/ 
		$(".slider-two").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 700,
			autoplayTimeout:4500,
			autoplayHoverPause:true,
			center:false,
			nav:false,
			dots:true,
			items:1
		});	
		
		/*===============================
		06. Mouse Moving
		=================================*/ 
		$('.single-layer.one').mouseParallax({
			moveFactor: 3
		});
		$('.single-layer.two').mouseParallax({
			moveFactor: 3
		});
		$('.single-layer.three').mouseParallax({
			moveFactor: 3
		});
		$('.single-layer.four').mouseParallax({
			moveFactor: 3
		});	$('.single-layer.five').mouseParallax({
			moveFactor: 3
		});
				
	
    });		
	
})(jQuery);	