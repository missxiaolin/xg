$(function(){
	
	
	var obj = new Object();
	obj.img = 0;
	obj.node = $('.slide');
	slide(obj);

	var objA = new Object();
	objA.img = 0;
	objA.node = $('.slideA');
	slide(objA);
	

	function slide(obj){
//		创建一个LI
		$(obj.node).find('.img').append("<li class='cr'></li>");
		//把第一个LI的内容给最后的LI
		$($('.top').html()).clone().prependTo($(obj.node).find(".img"));
//		设置UL的宽度
		var oLi = $(obj.node).find('.img li');
		var index = $(obj.node).width();
		$(obj.node).find('.img').css({
			width:(oLi.length)*index,
		})
	//	圆点点击实现切换
		$(obj.node).find('.dot span').click(function(){
			obj.img = $(this).index();
			move(obj);
		})
	//	鼠标移入按钮出现
		$(obj.node).mouseover(function(){
			$(obj.node).find('.left').stop().animate({left:0},150);
			$(obj.node).find('.right').stop().animate({right:-1},150);
			clearInterval(obj.t);
		})
	//	鼠标移除按钮隐藏
		$(obj.node).mouseleave(function(){
			$(obj.node).find('.left').stop().animate({left:-39},150);
			$(obj.node).find('.right').stop().animate({right:-40},150);
			time(obj);
		})
		//	左右按钮的实现
		$(obj.node).find('.right').click(function(){
			obj.img++;
			move(obj);
		})
		$(obj.node).find('.left').click(function(){
			obj.img--;
			move(obj);
		})

		time(obj);
	}

	//				制作一个公用的函数
	function move(obj){
		var dle = obj.img;
		var oLi = $(obj.node).find('.img li');
		var index = $(obj.node).width();
//		当大于宽度的时候执行left为0再移动
		if (dle>oLi.length-1){
			$(obj.node).find('.img').css({
				left:0,
			})
			dle = 1;
			obj.img = dle;
		}
//		当小于0的时候拉到最后
		if(dle<0){
			$(obj.node).find('.img').css({
				left:-(oLi.length)*index,
			})
			dle=oLi.length-2;
			obj.img = dle;
		}
//		中间小圆点的实现
		for(var i=0;i<$(obj.node).find('.dot span').length;i++){
			$(obj.node).find('.dot span')[i].className = '';
		}
		if(dle == $(obj.node).find('.dot span').length){
			$(obj.node).find('.dot span').eq(0).addClass('active')
		}else{
			$(obj.node).find('.dot span').eq(dle).addClass('active')
		}
		var sum = obj.img*index;
		$(obj.node).find('.img').stop().animate({left:-sum},500);	
	}
//	制作一个定时器
	function time(obj){
		obj.t=setInterval(function(){
			obj.img++;
			move(obj);
		},3000)
	}
})
