$(document).ready(function(){
	//basic slider
	$(".image_next").on('click', function(){
		var activeImage = $("img.active");
		var nextImage = activeImage.next();
		if(nextImage.length){
			activeImage.removeClass("active");
			nextImage.addClass("active");
		}
	})
	$(".image_back").on('click', function(){
		var activeImage = $("img.active");
		var prevImage = activeImage.prev();
		if(prevImage.length){
			activeImage.removeClass("active");
			prevImage.addClass("active");
		}
	})


})