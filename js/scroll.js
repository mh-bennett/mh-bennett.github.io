$(document).ready(function(jQuery) { 
    
    // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    //scroll  back to the top of the page and reset the anchor @ top
    $('.js-top').click(function(e) {

        target = $($(this).attr('href'));
        var selected = $(".js-list-item.js-current-panel");

        $(selected).removeClass("js-current-panel");
        $(target).addClass("js-current-panel");

        e.preventDefault();
    });


    //scroll the the next anchor
    $('.js-next').click(function(e) {

      var selected = $(".js-list-item.js-current-panel");
      var anchors = $(".js-list-item");

      var pos = anchors.index(selected);
      var next = anchors.get(pos+1);
      var prev = anchors.get(pos-1);

      target = $(next);

      $(selected).removeClass("js-current-panel");
      $(next).addClass("js-current-panel");

        if (target.offset()) {
            $('html, body').animate({scrollTop: target.offset().top + 'px'}, 600);
        }


        e.preventDefault();
    });


}); 

