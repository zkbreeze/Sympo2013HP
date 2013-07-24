$(function(){
	// side-navスライド設定
	
	// var $nav = $("#side-nav");
	// var nav_width = $nav.width();
	// var offset = $nav.offset().top;
	// var $window = $(window);
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
	
	
	//ホームへ戻るボタン
	var $return_to_top = $("#return_to_top");
	var $window = $(window);
	var offset = 300; //ここまでスクロールしたら表示
	//スクロール表示処理
	$window.scroll(function(){
		if($window.scrollTop() > offset){
			$return_to_top.fadeIn('slow', function(){});
		}else{
			$return_to_top.fadeOut('slow', function(){});
		}
	});
	//クリックで上まで戻る
	$return_to_top.click(function(){
		//上に戻る処理
		$('body,html').animate({
			scrollTop : 0
		}, 500);
	});
});
