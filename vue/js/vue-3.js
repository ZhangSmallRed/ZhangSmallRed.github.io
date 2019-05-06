new Vue({
	el:"#app",
	data:{
		value:0,
		value2:'',//声明一个空字符串
		value3:'',
	},
	methods:{
		jiayi:function(){
			this.value++;
			//this.value2=this.value > 4?"大于4":"小于4";
		},
		jianyi:function(){
			this.value--;
			//this.value2=this.value > 4?"大于4":"小于4";
		},
		bijiao:function(){//这个代替掉上面注释掉的那两行，然后在页面中调用这个方法
			return this.value2=this.value > 4?"大于4":"小于4";
		}
	},
	//监听数据的的第一种方式-computed计算属性;
	computed:{//计算属性，在计算属性中函数会考虑页面的变化是否与其中的数据相关，如果页面变化与函数里的变化不想关，就不会执行代码，提高效率
	    output:function(){//函数里只有value2发生变化时才会执行,页面可以直接用output调用
			return this.value2=this.value > 4?"大于4":"小于4";
		},
	},
	//监听数据的的第二种方式-watch;
	watch:{
		value:function(val){//要监听value2这个数据，并把value2的最新值传到第一个参数里
			this.value3=val > 4?"大于4":"小于4";//和computed区别1，不需要返回值
			//区别二，watch可以执行异步事件
			var th=this
			window.setTimeout(function(){//五秒之后让value等于0
				th.value=0;//这里要注意使用外部的this指向
			},5000)
		}
	}
})