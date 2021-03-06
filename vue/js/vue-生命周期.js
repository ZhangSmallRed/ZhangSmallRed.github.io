//vue的生命周期大致又分为3个周期，1、创建时的生命周期（4个构造函数），2、运行时的生命周期（2个构造函数），3、销毁时的生命周期
new Vue({
	el:"#app",
	data:{
		name:'zhb',
		
	},
	methods:{
		show:function(){
			console.log("这个是show方法");
		}
	},
	beforeCreate(){//第一个生命周期函数，该函数在生命周期创建前，控制台输出undefined
		//console.log(this.name);
		//this.show();//data和methods中的数据都未被初始化，方法会报错
	},
	created(){//第二个生命周期函数，该函数在生命周期创建后，控制台输出zhb
		//console.log(this.name);
		//this.show();//正常展示
	},
	//之后会编译模板，把vue代码中的那些指令进行执行，最终，在内存中生成一个编译好的最终模板字符串
	//判断有没有el，有就向下执行，再判断有没有template
	//然后，把模板字符串渲染为内存中的dom，只是放在了内存中，渲染好了模板，还没挂载到页面
	beforeMount(){//第三个生命周期函数，该函数在生命周期挂载前，此时数据已经在内存中编辑完成了，但还尚未把模板渲染到页面当中去
		console.log(document.getElementById("h1").innerHTML);//输出{{name}}，这时数据在模板中，还未渲染到页面
	},
	mounted(){//第四个生命周期函数，该函数在生命周期挂载后，数据从模板渲染到了页面当中去
		console.log(document.getElementById("h1").innerHTML);//可以在控制台中打印数据zhb
		//mounted()是实例创建期间的最后一个函数，当执行完成之后就表示实例已经完全创建好了，进行到运行阶段
	},
	//运行阶段的生命周期函数，共两个,这两个函数会根据data数据的改变触发0到无数次
	beforeUpdate(){//数据已经被更新，但界面还未被更新，通过我在html的input框写的点击事件，触发这个函数
		console.log("执行beforeUpdate函数：界面上的内容是:"+document.getElementById("h1").innerHTML);
		console.log("执行beforeUpdate函数：data中的数据是:"+this.name);
	},
	//beforeUpdate函数之后会重新构造出一个虚拟dom，然后渲染，然后挂载到页面上
	updated(){//更新后
		console.log("执行updated函数：界面上的内容是:"+document.getElementById("h1").innerHTML);
		console.log("执行updated函数：data中的数据是:"+this.name);
	}
	//实例被销毁（关闭浏览器）的时候会执行两个函数beforeDestroy（）{}和destroyde（）{}，这两个实例不好演示
	//这里说一下特点
	//beforeDestroy函数执行时就已经从运行阶段进入了销毁阶段，所有的data和methods都可以使用，还未真正的销毁
	//destroyde函数执行时就已经被完全销毁，所有的data和methods都已经不可以使用了
});
