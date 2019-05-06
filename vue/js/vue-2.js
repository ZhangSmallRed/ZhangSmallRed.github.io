// JavaScript Document
new Vue({
	el:'.app',
	data:{
		count:0,
		value:"zhb",
	},
	methods:{
		jiayi:function(){
			this.count++;
		},
		jianyi:function(){
			this.count--;
		},
		input:function(e){//声明一个函数让输入框每次输入时都执行这个函数，双向绑定时就不需要这个函数
			this.value=e.target.value;
		}
	},
})