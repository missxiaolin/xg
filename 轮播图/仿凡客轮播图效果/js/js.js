

	$(function(){
		var images = 0;
		var aLi =$('.slideFooter li');
		var t = null;
		
		//公用的函数
		function time(){
			images++;	
			if(images>4){
				images=0;
			}
			$('.imgs a').eq(images).siblings().stop().animate({
				opacity:0
			});
			$('.imgs a').eq(images).stop().animate({
				opacity:1
			});
			aLi.eq(images).addClass('slideActive')
							.siblings().removeClass('slideActive');
		}
		
		//底部圆点按钮点击的制作
		aLi.click(function(){
			images = $(this).index();
			aLi.eq(images).addClass('slideActive')
							.siblings().removeClass('slideActive');
			$('.imgs a').eq(images).siblings().stop().animate({
				opacity:0
			});
			$('.imgs a').eq(images).stop().animate({
				opacity:1
			});
		})
		//定时器
		t=setInterval(function(){
			time();
		},2000)
		
		//左右按钮点击的制作
		$('.next').click(function(){
			time();
			
		})
		$('.prev').click(function(){
			images--;
			if(images<0){
				images=4;
			}
			$('.imgs a').eq(images).siblings().stop().animate({
				opacity:0
			});
			$('.imgs a').eq(images).stop().animate({
				opacity:1
			});
			aLi.eq(images).addClass('slideActive')
							.siblings().removeClass('slideActive');
		})
		
		//鼠标移入清除增加定时器
		$('.slide').mouseover(function(){
			clearInterval(t);
		})
		$('.slide').mouseout(function(){
			t=setInterval(function(){
				time();
			},2000)
		})
	})













