			$(function(){
				//var img = 0;
				var oSide = $('.slide');
				$('.img').append("<li class='cr'></li>");
				//把第一个LI的内容给最后的LI
				$($('.top').html()).clone().prependTo(".img");
				var oLi = $('.img').eq(0).find('li');
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
				oSide.mouseenter(function(){
					var jsthis = $(this)[0];
					$('.left').stop().animate({left:0},150);
					$('.right').stop().animate({right:-1},150);
					clearInterval(jsthis.t);
				})
//				鼠标移除按钮隐藏
				oSide.mouseleave(function(){
					$('.left').stop().animate({left:-39},150);
					$('.right').stop().animate({right:-40},150);
					var jsthis = $(this)[0];
					jsthis.t=setInterval(function(){
						jsthis.img++;
						jsthis.move(jsthis.img);
					},1000)
					//time();
				})
//				制作一个公用的函数
				
//				制作一个定时器
				function time(){
					//循环所有div，每个div上都绑定一个定时器
					$('.slide').each(function(){
						//将jquery形式的对象转成原生js形式的对象
						var jsthis = $(this)[0];
						var jqthis = $(this);
						
						jsthis.img = 0;
						jsthis.t=setInterval(function(){
							jsthis.img++;
							jsthis.move();
						},1000)
						
						jsthis.move = function(){
							if (jsthis.img>oLi.length-1){
								jqthis.find('.img').css({
									left:0,
								})
								jsthis.img = 1;
								//jsthis.img = dle;
							}
							if(jsthis.img<0){
								jqthis.find('.img').css({
									left:-(oLi.length)*index,
								})
								jsthis.img=oLi.length-2;
								jsthis.img=jsthis.img;
							}
							for(var i=0;i<$('.dot span').length;i++){
								$('.dot span')[i].className = '';
							}
							if(jsthis.img == $('.dot span').length){
								$('.dot span').eq(0).addClass('active')
							}else{
								$('.dot span').eq(jsthis.img).addClass('active')
							}
							var sum = jsthis.img*index;
							jqthis.find('.img').stop().animate({left:-sum},500);	
						}
					})
				
					
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