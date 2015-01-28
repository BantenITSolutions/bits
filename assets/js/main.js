

$(document).ready(function() {



  $("div.blog-post").hover(
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    }
  );

  $('.flexslider').flexslider({
        prevText: '',
        nextText: ''
    });

  $('.testimonails-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    prevText: '',
    nextText: '',
    controlNav: false
  });

  $(function(){

  // Instantiate MixItUp:

  $('#Container').mixItUp();



  $(document).ready(function() {
      $(".fancybox").fancybox();
    });

  });


});

jQuery(function($) {
    //portfolio
    $(window).load(function(){
        $portfolio_selectors = $('.portfolio-filter >li>a');
        if($portfolio_selectors!='undefined'){
            $portfolio = $('.portfolio-items');
            $portfolio.isotope({
                itemSelector : 'li',
                layoutMode : 'fitRows'
            });
            $portfolio_selectors.on('click', function(){
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({ filter: selector });
                return false;
            });
        }
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
});