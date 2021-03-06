function animate(elem, attr, callback){      //声明animate函数
	clearInterval(elem.timer);			    //清楚定时器
	elem.timer = setInterval(function(){    //声明一个定时器
		var bStop = true;                   //一个标识位，true代表可以停止定时器，false代表不可不停止
		for(var prop in attr){       //1:{opciaty:100,width:200}
			var curr = parseInt(getStyle(elem, prop)); //得到原有属性的值0.1/10
			if(prop == 'opacity'){
				curr = parseInt(getStyle(elem, prop)*100); //
			}
			var speed = (attr[prop] -  curr) / 8; //12
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//speed取整
			if(curr != attr[prop]){
				bStop = false;
			}
			if(prop == 'opacity'){
				elem.style.opacity = (curr + speed) / 100; //12+10/100 2.2
				elem.style.filter = 'alpha(opacity='+(curr + speed)+')';
			}else{
				elem.style[prop] = curr + speed + 'px';
			}
		}
		if(bStop){
			clearInterval(elem.timer);
			callback && callback();
		}
	}, 100);
}
function getStyle(elem, attr){
	if(elem.currentStyle){//IE
		return elem.currentStyle[attr];
	}else{
		return getComputedStyle(elem, false)[attr];//谷歌
	}
}
function drag(elem, obj, callback){
	var option = {
		leftDragable: true,
		topDragable: true
	};
	option = extend(option, obj || {});
	elem.onmousedown = function(e){
		e = e || window.event;
		var disX = e.clientX - this.offsetLeft;
		var disY = e.clientY - this.offsetTop;
		document.onmousemove = function(e){
			e = e || window.event;

			elem.left = e.clientX - disX;
			elem.top = e.clientY - disY;

			callback && callback();

			if(option.leftDragable){
				elem.style.left = elem.left + 'px';
			}
			if(option.topDragable){
				elem.style.top = elem.top + 'px';
			}

		};

		elem.onmouseup = function(){
			document.onmousemove = null;//取消事件
		};
	};
}

function extend(target, obj){
	for(var p in obj){
		target[p] = obj[p];
	}

	return target;
}