	$("#start-button").on("click", function(){ // as soon as i put this in, i cant cycle through questions.
		$("#start-button").remove();
		$(".quiz").show();
		start();
	})