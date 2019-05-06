
Vue.component("my-component",{//组件跟vue实例创建的方法一样需要注册后使用，这里是全局注册，my-component就是注册的自定义的标签，之后就可以使用<my-component></my-component>，全局组件可以在任意vue控制的实例中使用,如在#App2中也可以使用
	template:'<div>全局注册的内容</div>',//在<my-component></my-component>添加内容
	template:'<div @click="count++">{{count}}</div>',//在<my-component></my-component>添加内容
	data:function(){//data必须写成函数，写成对象会报错
		return {
			count : 0,
		}
	}
});

var app=new Vue({
	el:'#app',
	data:{
		name:"zhb",
		},
	//template:'<div>{{name}}<div>123</div></div>',//template会覆盖div中已有的元素，并且必须要有一个根元素,将<div>123</div>写在大的<div></div>外面就不会显示
	components:{//定义一个局部组件
	    "my-zujian":{//局部组件名，让html用这个组件名调用
		    template:"<div>局部组件的内容</div>",    
		}
	}
})
var app2=new Vue({
	el:"#app2",
	//template:'<my-component></my-component>',
})
