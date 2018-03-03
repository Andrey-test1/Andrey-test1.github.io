$(document).ready(function(){	
	$(function() {
	  $(window).scroll(function() {
	  if($(this).scrollTop() != 0) {
	  $('.top_button').fadeIn();
	  } else {
	  $('.top_button').fadeOut();
	  }
	  });
	  $('.top_button').click(function() {
	  $('body,html').animate({scrollTop:0},700);
	  });
	});
	
		$(".tariff-order").click(function(){
        $(".form").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
		$(".order").click(function(){
        $(".form").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
	//E-mail Ajax Send
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});