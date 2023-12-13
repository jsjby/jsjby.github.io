(function($){

  "use strict";

  $(window).load(function() {

    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
    $(window).trigger("resize");

  });

  $(window).resize(function() {
    hideNavbar();
    removeNavShift();
  });


  /* Detect Browser Size
  -------------------------------------------------------*/
  var minWidth;
  if (Modernizr.mq('(min-width: 0px)')) {
    // Browsers that support media queries
    minWidth = function (width) {
      return Modernizr.mq('(min-width: ' + width + 'px)');
    };
  }
  else {
    // Fallback for browsers that does not support media queries
    minWidth = function (width) {
      return $(window).width() >= width;
    };
  }


  $('.local-scroll').localScroll({offset: {top: -20},duration: 1500,easing:'easeInOutExpo'});

  // Nav
  var $menuIcon = $('#menu-icon'),
      $menuIconClose = $('#menu-icon-close'),
      $navbar = $('.navbar'),
      $contentWrapper = $('.content-wrapper');

  function openNavbar(e) {
    e.stopPropagation();
    $contentWrapper.addClass('content-wrapper--is-open');
    $navbar.addClass('navbar--is-open');
    $(this).fadeOut();
    $menuIconClose.fadeIn();
  }

  function closeNavbar() {
    $contentWrapper.removeClass('content-wrapper--is-open');
    $navbar.removeClass('navbar--is-open');
    $(this).fadeOut();
    $menuIcon.fadeIn();
  }

  function hideNavbar() {
    if(!minWidth(1001)) {
      $navbar.find('a').on('click', function() {
        $contentWrapper.removeClass('content-wrapper--is-open');
        $navbar.removeClass('navbar--is-open');      
        $menuIconClose.fadeOut();
        $menuIcon.fadeIn();
      });
    }
  }

  function removeNavShift() {
    if(minWidth(1001)) {
      $contentWrapper.removeClass('content-wrapper--is-open');
      $navbar.removeClass('navbar--is-open');
      $menuIconClose.hide();
      $menuIcon.show();
    }
  }

  $menuIcon.on('click', openNavbar);
  $menuIconClose.on('click', closeNavbar);
  $contentWrapper.on('click', function() {
    $(this).removeClass('content-wrapper--is-open');
    $navbar.removeClass('navbar--is-open');
    $menuIconClose.fadeOut();
    $menuIcon.fadeIn();
  });

  

})(jQuery);
