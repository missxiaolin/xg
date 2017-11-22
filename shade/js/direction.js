function direction(obj,ev){
	//计算元素的尺寸
	var w=obj.width();
	var  h=obj.height();
	//计算鼠标点击的坐标
	var x = ev.pageX - obj.offset().left-(w/2);
	var y = ev.pageY - obj.offset().top-(h/2);
	//计算鼠标的角度
	var angle = Math.atan2(y, x)*(180/Math.PI);
	//left时，angle的取值范围
	if(angle>135 || angle<-135){
		var direction = 'left';
	//bottom时，angle的取值范围
	}else if(angle>45){
		var direction = 'bottom';
	//right时，angle的取值范围
	}else if(angle>-45){
		var direction = 'right';
	//top时，angle的取值范围
	}else{
		var direction = 'top';
	}
	//返回当前从哪个方向进入
	return direction;
}