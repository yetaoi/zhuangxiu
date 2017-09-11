/*
*清除一个指定元素下的空白文本节点-----通过函数
*参数：
ele:要清除指定空白文本子节点的元素
*/
function clearNoneNode(ele){ //形参
	var thisChild=ele.childNodes; //元素的返回列表赋值给变量 thisChild
	for(var i=0;i<thisChild.length;i++){
		if(thisChild[i].nodeType==3 && !/\S/.test(thisChild[i].nodeValue)){
			ele.removeChild(thisChild[i]);
		}
	}
}


/*
*清除指定元素下的空白文本子节点-----通过原型对象的方法
*参数：无
this:指向要清除空白子节点的元素
*/
Element.prototype.cnn=function(){ //给元素的原型对象绑定一个cnn方法，目的是元素继承这个方法
	var thisChild=this.childNodes;//页面中的元素是谁，this就指向谁
	for(var i=0;i<thisChild.length;i++){  //
		if(thisChild[i].nodeType==3 && !/\S/.test(thisChild[i].nodeValue)){ //判断有没有非空字符
			this.removeChild(thisChild[i]);
		}
	}
}


/*
*清除页面中所有元素的空白文本节点
*参数：无
*/
function CNN(){
	var alldom=document.getElementsByTagName('*');//所有页面中的元素
	for(var i=0;i<alldom.length;i++){
		alldom[i].cnn();    //调用原型对象的方法 逐个清除里面的元素的空白节点
		// clearNoneNode(alldom[i]);//调用函数
	}
}
CNN();//清除页面中所有元素的空白文本节点




Element.prototype.hasClass = function(_classname){
	if(this.hasAttribute('class')){
		var dClass = ' '+getAttribute('class')+' ';
		var arrC = new RegExp(' '+_classname+' ');
		if(arrC.test(dClass)){
			return true;
		}
	}
	return false;
}

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/ig,'')
	//替换空白字符
}
Element.prototype.Avv = function(_setclass){
	if(this.hasAttribute('class')){
		var oClass = ' '+this.getAttribute('class')+' ';
		var reg = new RegExp(' '+_setclass+' ');
		while(ref.test(oClass)){
			oClass = oClass.replace(reg,'');
		}
		//while先执行后循环
		//if先判定再执行
		this.setAttribute('class',oClass.trim());
	}
}