//方法1，在js中定义一个空的vue实例,在要向外传数据的my-di组件中定义一个$emit()自定义事件将数据传输出去，然后在哥哥组件中接收数据，并改变哥哥组件当中的元素
var bus=new Vue();

var app=new Vue({
	el:'#app',
	components:{
		"my-ge":{
			template:'<div>{{g1}}:{{g2}}</div>',
			data:function(){
				return {
					g1:"哥哥组件",
					g2:"被弟弟组件改变"
				}
			},
			mounted:function(){//订阅，通过生命周期接受数据
				bus.$on('chuanShu',function(str){//在空vue实例中使用$on接收chuanShu事件
					console.log(str);
					//this这里指向的是bus的指向，在这里需要修改一下
					this.g2=str;
				}.bind(this));//可以通过.bind(this)改变this指向，指向my-ge的this
			}
		},
		"my-di":{
			template:'<ul><li>{{d1}}</li><li @click="gettext" v-for="item in d2">{{item}}</li></ul>',
			data:function(){
				return {
					d1:"弟弟组件",
					d2:["第一","第二","第三"]
				}
			},
			methods:{//声明一个函数，在my-di中通过点击调用此函数
				gettext:function(e){//函数名gettext
					//console.log(e.target.innerHTML);
					//发布
					bus.$emit("chuanShu",e.target.innerHTML);//函数中自定义一个事件，事件名chuanShu，第二个参数就是要传输的数据
				}
			}
		}
     }
})