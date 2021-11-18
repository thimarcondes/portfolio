/**
 *
 *  slider
 *
 */


$('.slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="prev_arrow"><i class="fa fa-angle-left"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fa fa-angle-right""></i></span>',
  responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
       dots: false
     }
   },
   {
     breakpoint: 770,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       infinite: true,
       dots: false
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
       dots: false
     }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    ,
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});

var scroll = new SmoothScroll('a[href*="#sec"]', {
  speed: 1500
});

var scroll_offset = 120;
$(window).scroll(function(){
	var $this = $(window);
	if( $('.float-button-wrapper').length ) {
		if( $this.scrollTop() > scroll_offset ) { 
			$('.float-button-wrapper').addClass('revealed');
		} else {
			$('.float-button-wrapper').removeClass('revealed');
		}	
	}
});