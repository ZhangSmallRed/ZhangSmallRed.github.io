new Vue({
	el:"#app",
	data:{
		gaibian:false,//声明一个改变为false
		color:"hongse",//声明一个color，值为一个类名，让页面上的vue直接调用
	},
	computed:{//声明一个计算属性
		divClass:function(){//divClass用来监听里面函数中值的变化
			return {//返回值
				yuan:this.gaibian,//类名：true/flase
				lanse:!this.gaibian,
				}
			}
	}
})

new Vue({
	el:"#app2",
	data:{
		color:"red",
		kuan:"200px",
		gao:"200px"
	},
	computed:{//声明一个计算属性
	    divStyle:function(){
			return {
				backgroundColor:this.color,
				width:this.kuan,
				}
			}
	},
})