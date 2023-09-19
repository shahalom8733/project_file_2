

// Hero-Slider-area 

var swiper = new Swiper(".hero-slider", {
        autoplay:true,
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
        autoPlay:true
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,

      }
    }
  });
  jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 30,
        time: 1000,
    });

});

// slider 
var swiper = new Swiper(".sliders-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// accordion
$(document).ready(function(){
	$('.accordion-box:first').addClass('active');
	$('.accordion-box:first').children('.acc-trigger').children('i').addClass('');
	$('.accordion-box:first').children('.acc-trigger').addClass('selected').next('.acc-container').show();

	

    $('.acc-trigger').click(function(event){
    	if($(this).hasClass('selected')){

    		$(this).removeClass('selected');
    		$(this).children('i').removeClass('fa-plus');
    		$(this).next().slideUp();
    		$(this).parent().removeClass('active');


    	}else{

    		$('.acc-trigger').removeClass('selected');
    		$(this).addClass('selected');
    		$('.acc-trigger').children('i').addClass('fa-plus');
    		$(this).children('i').removeClass('fa-plus');
    		$('.acc-trigger').next().slideUp();
    		$(this).next().slideDown();
    		$('.accordion-box').removeClass('active');
    		$(this).parent().addClass('active');
    	}
    });



    $('.shows').click(function(){
      $('.menu-bar').addClass("show");
      $('ul').addClass('slider');
      $(this).hide();
    })

    $('.hide').click(function(){
      $('.menu-bar').removeClass("show");
      $('ul').removeClass('slider');
      // $('.header-btn .d-btn').hide();
      $('.shows').show();

    })

  })