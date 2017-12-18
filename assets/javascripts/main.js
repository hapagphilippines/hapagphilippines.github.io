$(document).ready(function() {
   

    var url = 'https://script.google.com/macros/s/AKfycbyDRikFx-IpOwHl4UBCR4fXgnJW8QbuYwBUJcQ2PHJiypsnWaI/exec'

        $('.ui.submit.button#subscribe').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('loading');
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $('#sub-form').serializeObject(),
            success: function() {
                $('#subscribe').removeClass('loading');
                $('#subscribe').empty();
                $('#subscribe').append('<i class="icon check"></i>');
            }
        });
        });
        
    var url = 'https://script.google.com/macros/s/AKfycbyUMqcx1gjQiV4PZgH7UmoSswXi3JDxgPRrmmv-Ro2Uqvj7idg/exec'

        $('.ui.submit.button#submit-message').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('loading');
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $('#form-message').serializeObject(),
            success: function() {
                $('#submit-message').removeClass('loading');
                $('#submit-message').empty();
                $('#submit-message').append('<i class="icon check"></i>');
            }
        });
        });
    
   // Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
		) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			scrollTop: target.offset().top - 80
			}, 500, function() {
			// Callback after animation
			// Must change focus!
			//   var $target = $(target);
			//   $target.focus();
			//   if ($target.is(":focus")) { // Checking if the target was focused
			//     return false;
			//   } else {
			//     $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			//     $target.focus(); // Set focus again
			//   };
			});
		}
		}
	});

    $('#break').visibility({
        onTopPassedReverse: function(){
            $('#navbar').transition('fade out');
        },
        onTopPassed: function() {
            $('#navbar').transition('fade in');
        },
        once: false
    });
});