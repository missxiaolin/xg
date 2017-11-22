$(function(){
	
//	先获取第一个框的位置定位好红色快
	var offset = $('td[hd="0"]').offset();
	$('.bg').css(offset);
	
//	创建一个对象和函数
	var $bg = $('.bg');
	
	var s = 0;
	var n = 0;
	var max = 50;
//	点击执行函数
	$('.box tr .ble').click(function(){
		for (i=0;i<=50;i++) {
			strmove($bg,s,n,max + sj());
		}
	})
//	创建一个函数   用作移动小红快
	function move($bg,index){
//		获取位置 
		var offset = $('td[hd="'+index+'"]').offset();
		$('.bg').css(offset,50);
	}
//	递归如果小就一直执行
	function strmove($bg,index,sum,count){
//		创建一个定时炸弹
		window.setTimeout(function(){
//			执行move函数让红色快移动起来
			move($bg,++index);
//			做一个判断如果到11重新在0号元素上移动
			if(index==11){
				index=-1;
			}
//			用作递归判断如果一直小于最后一个数就一直执行
			sum++;
//			document.title = sum;
			if(sum<count){
				strmove($bg,index,sum,count);
			}
//			记录最后的位置
			s = index;
			n = index;
			max = s + 50;
		},50)
	}
	
	
//	生成随机数
	function sj(){
		return (Math.floor(Math.random()*100)%30);
	}
	
	
	
	
})
