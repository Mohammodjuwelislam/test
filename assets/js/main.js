(function ($) {
"use strict";



  // meanmanu-active
	$('#mobile-manu-active').meanmenu({
		meanScreenWidth:"767",
		meanMenuContainer:'.mobile-manu',

	});


  // header-manu-sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 1) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});


  $('#container').imagesLoaded( function() {
    // images have loaded
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
        // horizontalOrder: true,
      }
    })

    // filter items on button click
    $('.more-work-manu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //isotope menu active class
    $('.more-work-manu button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });


    
  });

    


 

  
  




})(jQuery);