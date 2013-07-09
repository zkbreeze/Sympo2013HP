$(function(){
	var $nav = $("#side-nav");
	var nav_width = $nav.width();
	var offset = $nav.offset().top;
	var $window = $(window);
	
	// $window.scroll(function(){
		// if($window.scrollTop() > offset - 10 && $(window).width() > 780){
			// $nav.css({
				// position: "fixed",
				// top: "20px",
				// width: nav_width
			// });
		// }else{
			// $nav.css({
				// position: "inherit",
				// width: nav_width
			// });
		// }
	// });
});
