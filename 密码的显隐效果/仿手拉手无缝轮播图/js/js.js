			$(function(){
				var img = 0;
				var oSide = $('.slide');
				$('.img').append("<li class='cr'></li>");
				//把第一个LI的内容给最后的LI
				$($('.top').html()).clone().prependTo(".img");
				var oLi = $('.img li');
				var index = $('.slide').width();
				$('.img').css({
					width:(oLi.length)*index,
				})
//				小圆点点击实现切换
				$('.dot span').click(function(){
					img = $(this).index();
					move(img);
				})
//				鼠标移入按钮出现
				oSide.mouseover(function(){
					$('.left').stop().animate({left:0},150);
					$('.right').stop().animate({right:-1},150);
					clearInterval(t);
				})
//				鼠标移除按钮隐藏
				oSide.mouseleave(function(){
					$('.left').stop().animate({left:-39},150);
					$('.right').stop().animate({right:-40},150);
					time();
				})
//				制作一个公用的函数
				function move(dle){
					if (dle>oLi.length-1){
						$('.img').css({
							left:0,
						})
						dle = 1;
						img = dle;
					}
					if(dle<0){
						$('.img').css({
							left:-(oLi.length)*index,
						})
						dle=oLi.length-2;
						img=dle;
					}
					for(var i=0;i<$('.dot span').length;i++){
						$('.dot span')[i].className = '';
					}
					if(dle == $('.dot span').length){
						$('.dot span').eq(0).addClass('active')
					}else{
						$('.dot span').eq(dle).addClass('active')
					}
					var sum = img*index;
					$('.img').stop().animate({left:-sum},500);	
				}
//				制作一个定时器
				function time(){
					t=setInterval(function(){
						img++;
						move(img);
					},3000)
				}
				time();
//				左右按钮的实现
				$('.right').click(function(){
					img++;
					move(img);
				})
				$('.left').click(function(){
					img--;
					move(img);
				})
				
			})