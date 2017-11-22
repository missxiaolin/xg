			$(function(){
				//选项栏事件
//				大于0的内容都隐藏
				$('.box_bottom:gt(0)').hide();
//				获取LI
				var oLi = $('.box_top ul li');
//				移入oLi发生奇迹
				oLi.mouseenter(function(){
//						改变LI的样式
					$(this).addClass('active')
						.siblings().removeClass('active');
//						获取移入LI的编号
					var dex = oLi.index(this);
//						显示编号的内容
					$('.box_bottom').eq(dex).show()
								.siblings().hide();
//						改变他的下面箭头样式
					$('.box_top ul li em').removeClass('actibe');
					$(this).find('em').addClass('actibe');
//						改变图标的移动			
					$('.box_top ul li i').eq(dex).stop().animate({top:-40},60,function(){
//						移动上去的时候过个200毫秒再下来
						setTimeout(function(){
							$('.box_top ul li i').eq(dex).stop().animate({top:0},60);
						},200)
					});
				})
				
				//号码的获得失去焦点事件
				$("#phone").focus(function(){
//					defaultValue:放回文本的初始内容
					if ($(this).val()==this.defaultValue){
						$(this).val("");
					}
				}).blur(function(){
					if ($(this).val()==""){				
						$(this).val(this.defaultValue);										
					}
				})
				
//				获取元素
				var oMoney = $('.money');
				var aLi = $('.money ul li');
				var oSpan = $('#cr');
				//话费面值移入
				oMoney.mouseenter(function(){
//					移入显示下面div
					$('.money ul').show();
//						单击
						aLi.click(function(){
//							单击的时候先获取LI的内容然后删除span的内容最后添加LI的内容
							var ble = $(this).html();
							oSpan.empty();
							oSpan.append(ble);
						})
				})
//				移除隐藏
				oMoney.mouseleave(function(){
					$('.money ul').hide();
				})

			})