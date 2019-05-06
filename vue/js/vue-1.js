new Vue({//new 出来一个Vue
	el:'.zhb1',//el：用来获取元素，class/id/元素
	data:{//data：用来声明一个对象
	  name:"张红宾",//对象里面用键值对存储数据
	  type:"真帅",//对象里面用键值对存储数据
	  link:"http://www.baidu.com",//定义一个百度的url，用于让html通过指令调用
	  a标签:'<a href="http://www.baidu.com">这是在js里定义并添加到页面的元素，可以用v-html="属性名"调用</a>',//
	},
	methods:{//methods:用来声明函数
		changetype:function(e){//声明一个函数changetype，并接受一个事件对象e
			this.type=e.target.value;//vue会把data和methods都能用this调用，
			//this就是指向当前事件所绑定的元素，而e.target指向事件执行时鼠标所点击区域的那个元素
		},
		hanshu:function(){//声明一个hanshu函数
			return"是的";	//该函数返回一个“是的”
		}
	},
})
new Vue({//再new 出来一个Vue
	el:'.ondianji',//el：用来获取元素，class/id/元素
	data:{//data：用来声明一个对象
		count:0,//对象里面用键值对存储数据
		x:'0',
		y:'0'
	},
	methods:{//methods:用来声明函数
		jiayi:function(shuzhi){//声明一个jiayi方法
			this.count+=shuzhi;//让count加加
		},
		updateXY:function(e){
			this.x=e.clientX;//获取鼠标放在p标签上时距离左上角的x，y的坐标
			this.y=e.clientY;
		},
		stopXY:function(e){
			e.stopPropagation();//阻止冒泡事件的发生
		},
		input:function(){
			alert('zhb');
		}
	},
	
})

/*一个小练习
new Vue({
	el:'.lianxi',
	data:{
		lianxiname:'xiaohong',
		lianxiage:22,
		tupian:'../img/d3.jpg',
	},
})*/







