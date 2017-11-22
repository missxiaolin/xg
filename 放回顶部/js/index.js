//随着滚动条下拉
	$(function() {
		$(window).scroll(function() {
			var top = $(window).scrollTop()+300;
			$("#editInfo").css({top: top + "px" });
			});
	});
//当移动到某个div显示
	$(function(){
		var zd_height = $(".zd").offset().top-300;
		$(window).scroll(function(){
			var this_scrollTop = $(this).scrollTop();
			if(this_scrollTop>zd_height ){
			$(".fh").show();
			}else{
				$(".fh").hide();
			}
		});
	}); 


	$(function(){
		$('.fh').click(function(){
			$('html,body').animate({
				scrollTop:0
			},500,'easeOutExpo')
		})
	});










 