//定义需要的图片元素
var brid = new Image();
brid.src='images/brid.png';
var street = new Image();
street.src='images/street.png';
var pipeline = new Image();
pipeline.src='images/pipeline.png';
var pipelinetop = new Image();
pipelinetop.src='images/pipelinetop.png';
var pipelinebottom = new Image();
pipelinebottom.src='images/pipelinebottom.jpg';
var bulid = new Image();
bulid.src='images/bulid.png';
var tree = new Image();
tree.src ='images/tree.png'; 
var bgImg = new Image();
bgImg.src='images/bg.png';
var topImg =new Image();
topImg.src='images/brid45deg.png';
var downImg=new Image();
downImg.src='images/brid2.png';
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame    || 
	window.oRequestAnimationFrame      || 
	window.msRequestAnimationFrame     || 
	function(/* function */ callback, /* DOMElement */ element){
		window.setTimeout(callback, 1000 / 60);
    };
})();
if(!window.cancelAnimationFrame){
	window.cancelAnimationFrame = function(id) {
   		clearTimeout(id);
	};
}	
//游戏函数
function Brid(){
	this.down=document.getElementsByClassName('down');
	this.fly=document.getElementById('fly');
	this.hit=document.getElementById('hit');
	this.scoremusic=document.getElementById('scoremusic');
	this.scores=document.getElementById('scores');
	this.cav = document.getElementById('cav');
	this.canvas = this.cav.getContext('2d');
	this.width=window.innerWidth;
	this.height=window.innerHeight;//画布高度
	this.cav.width=this.width+10000;
	this.cav.height=this.height;
	this.nextStep=Math.floor(this.width/4*5);
	this.between=150;//上下管道间的间隔
	this.stepH = 1; 
	this.step=10;
	this.num=Math.floor(this.height/this.step);
//	console.log(this.num);
	this.times=0;//向上运动的时间参数
	this.pipeW=this.width/8;
	//下水管道数组
	this.pipeArr=[];
	this.bridArr=[];
	this.timer=null;//定时器
	this.score=0;//分数
	this.scoreIndex=this.score%10;
	this.rdeg=0;//小鸟飞行的角度值
	this.static=1;//小鸟飞行状态 0 往上飞 1 往下飞
	this.isOver=0;//游戏结束变量 1 游戏结束
	//1.游戏初始界面
	this.draw=function(){
		//画背景
		this.canvas.drawImage(bgImg,0,0,this.width,this.height);
		//画街道
		this.canvas.drawImage(street,-100,this.height/4*3,this.width+400,this.height/4);
		//画树
		this.canvas.drawImage(tree,0,this.height/4,this.width,this.height/2);
		//画楼房
		this.canvas.drawImage(bulid,0,this.height/4*2,this.width,this.height/3);
		//画鸟
		if(this.bridArr.length<1){
			this.bridArr[0]={
				x:Math.floor(this.width/6),
				y:Math.floor(this.height/1.5),
				img:brid
			}
		}	
		//画下水管道
		if(this.pipeArr.length==0){
			//初始画管道数组
			for(var i=0;i<10;i++){
				this.pipeArr[i]={
					x:this.nextStep,
					y:Math.floor(Math.random()*this.num/2)*this.step,
				}
				this.nextStep+=this.width/1.8;//管道间的间隔
			}
		}
		if(this.pipeArr[0].x+this.pipeW<0){
			this.scoreIndex=0;
			var pipeArr={
				x:this.pipeArr[9].x+this.width/1.8,
				y:Math.floor(Math.random()*this.num/2)*this.step,
			}
			for(var j=0;j<10;j++){
//				console.log(this.pipeArr[j]);
				if(j==9){
					this.pipeArr[j]=pipeArr;
				}else{
					this.pipeArr[j]=this.pipeArr[j+1];
				}
			}
//			console.log(this.pipeArr.length);
			
//			alert(this.pipeArr[0].x);
		}
		for(var i=0;i<this.pipeArr.length;i++){
			this.canvas.drawImage(pipeline,this.pipeArr[i].x,0,this.pipeW,this.pipeArr[i].y);
			this.canvas.drawImage(pipelinebottom,this.pipeArr[i].x,this.pipeArr[i].y,this.pipeW,35);
			this.canvas.drawImage(pipeline,this.pipeArr[i].x,this.pipeArr[i].y+35+35+this.between,this.pipeW,this.height-this.height/4-this.pipeArr[i].y-this.between);
			this.canvas.drawImage(pipelinetop,this.pipeArr[i].x,this.pipeArr[i].y+35+this.between,this.pipeW,35);
		}
		//画鸟
		//this.canvas.drawImage(this.bridArr[0].img,this.bridArr[0].x,this.bridArr[0].y,35,30)
		this.canvas.save();
	    this.canvas.translate(this.bridArr[0].x+35/2,this.bridArr[0].y+30/2);
	    this.canvas.rotate(this.rdeg * Math.PI / 180);//旋转
	    this.canvas.translate(-this.bridArr[0].x-35/2,-this.bridArr[0].y-30/2);
		this.canvas.drawImage(this.bridArr[0].img,this.bridArr[0].x,this.bridArr[0].y,35,30)
	    this.canvas.restore();
		//画街道
		//this.canvas.drawImage(street,-100,this.height/4*3,this.width+400,this.height/4);
		this.drawPipe();
	}
	//console.log(this.pipeArr);
	//画管道
	this.drawPipe=function(){
		if(this.isOver){
			this.down[0].style.display='block';
		}else{
			this.down[0].style.display='none';
			//var timex= this.pipeArr[999].x;
			for(var i=0;i<10;i++){
				this.pipeArr[i].x-=2.5;
			}
			this.bridArr[0].y=This.bridArr[0].y+This.stepH;
			if(this.bridArr[0].y<0){
				this.bridArr[0].y=0;
			}
			if(this.stepH>0&&This.stepH<10){
				This.stepH+=0.1;
			}
			this.times--;
			if(this.times==0){
				//this.bridArr[0].img=downImg;
				this.stepH=1;
			}
			if(this.static){
				this.rdeg+=5;
			}else{
				this.rdeg-=5;
			}
			if(this.rdeg>=25){
				this.rdeg=25;
				this.static=1;
			}
			if(this.rdeg<=-25){
				this.static=1;
				this.rdeg=-25
			}
		}		
	}
	//console.dir(this.pipeArr);
	var This=this;
	//2.让游戏动(管道向前走)
	this.run=function(){
		This.touchPress();
		requestAnimFrame(This.run);
    		This.draw();
    		This.die();
		//console.log(this.bridArr[0]);
//		this.timer=setInterval(function(){
//			for(var i=0;i<This.pipeArr.length;i++){
//				This.pipeArr[i].x-=5;
//			}
//			This.bridArr[0].y=This.bridArr[0].y+This.stepH;
//			if(This.bridArr[0].y<0){
//				This.bridArr[0].y=0;
//			}
//			if(This.stepH>0&&This.stepH<15){
//				This.stepH+=1;
//			}
//			This.times--;
//			if(This.times==0){
//				This.bridArr[0].img=downImg;
//				This.stepH=5;
//			}
//			This.draw();
//			This.die();
//		},50)
	}
	//3.让鸟去死
	this.die=function(){
		//console.log(this.pipeArr[0].x+this.pipeW);
		//console.log(this.bridArr[0].x);
		//加分
		if(this.pipeArr[this.scoreIndex].x+this.pipeW<this.bridArr[0].x){
			//console.log(this.bridArr[0]);
			//console.log(this.pipeArr);
			this.score++;
			this.scoreIndex=1;
//			console.log(this.scoreIndex);
			this.scoremusic.play();
		//console.log(this.score);
			this.scores.innerHTML="分数:"+this.score;
		}
		//游戏结束
		//1.碰到管子
		if(this.IsPipelin()){
			this.gameOver();
		}
		//掉到地上
		if(this.bridArr[0].y-30>this.height/4*3){
			this.gameOver();
		}
	}
	//判断鸟是否碰到管子
	this.IsPipelin=function(){
		if(this.bridArr[0].x+35>=this.pipeArr[this.scoreIndex].x&&(this.bridArr[0].y<this.pipeArr[this.scoreIndex].y+40||this.bridArr[0].y>this.pipeArr[this.scoreIndex].y+5+this.between)){
			return true;
		}
		return false;
	}
	//游戏结束
	this.gameOver = function(){
		if(this.isOver){
			return;
		}
		this.hit.play();
		//console.log(this.score);
		this.isOver=1;
		//alert(1);
		//console.log(this.height/4*3);
		//console.log(this.bridArr[0].y);
	}
	//屏幕按压小鸟往上跑
	this.touchPress=function(){
		window.addEventListener('touchstart',function(){
//			console.log(ev);
//			This.bridArr[0].img=topImg;
			This.static=0;
			This.stepH=-10;
			This.times=5;
			This.fly.currentTime=0;
//			This.fly.play();
//			console.log(This.rdeg);
		})
	}
}
