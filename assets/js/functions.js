	/***************** Responsive Nav ******************/

    $(document).ready(function() {
    $('.navigation__burger').click(function() {
	  
        navigationToggle();
        
    });
    
    function navigationToggle() {
        
        $('.navigation__burger').toggleClass('navigation__burger--is-open');
        $('.navigation__container').toggleClass('navigation__container--is-open');
        $('html, body').toggleClass('scroll-lock');
        
    }

     /***************** Smooth Scroll ******************/
  
//   $('a[href*="#"]:not([href="#0"])').click(function(ev) {
	  
//     ev.preventDefault();
      
//       if ($('.navigation__container').hasClass('navigation__container--is-open')) {
//           navigationToggle();
//       }
          
//       var target = $(this).attr('href');
      
//       TweenLite.to(window, 1, {scrollTo: target});
      
//   });
   /***************** Work Carousel ******************/
  
   $('.work__navigation-el').click(function() {
	  
    var $this = $(this),
            position = $this.parent().children().index($this);
            
    $this.parent().children().removeClass('work__navigation-el--is-active');
    $this.addClass('work__navigation-el--is-active');
    $('.work__list').children().removeClass('work__list-el--is-active');
    $('.work__list').children().eq(position).addClass('work__list-el--is-active');
    
});
});