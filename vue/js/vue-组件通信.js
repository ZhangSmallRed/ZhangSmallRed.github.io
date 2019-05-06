var app=new Vue({//声明的vue本身就是一个组件
	el:"#app",
	data:{
		list:'父级数据',//这个就相当于父级组件的数据
		list2:'这里是父级组件，实例中，通过孙子元素改变父级元素',//这个就相当于父级组件的数据
    },
	components:{//定义一个局部组件
	    "my-zi":{//局部组件名，让html用这个组件名调用
		    props:["fu","fu2","fu3"],//通过props可以将父级的数据传递到子组件中使用，传输数据名就行，没有props就不能传给子组件
			data:function(){//把fu2这个数据重新付一下值，这样改变当前组件的数据时并不会影响到父级的fu2的数据，控制台也不好报错
				return {
					fufu:this.fu2,
					fufufu:this.fu3
				}
			},
		    template:`<div>
			              <div>
						      局部组件的内容和父级通过props传过来的数据:{{fu}}
					      </div>
						  <div>
						      局部组件的内容和父级通过props传过来的数据:{{fufu}}2222改变fufu的数据，对数据的操作
					      </div>
						  <div ref="f3">
						      局部组件的内容和父级通过props传过来的数据:{{fufufu}}3333改变fufu的数据，对dom的操作
					      </div>
						  <mySun @suntext="changesfu" :sun='fu'> 
						  //这里通过@接收了自定义的事件suntext，同时也获得了数据,自定义的事件发生后执行向对应的方法
						  </mySun>
				      </div>`, 
					   //第二个div(mySun)是sun组件声明一个属性名sun，属性值fu，fu是从父级组件中拿出的数据,mySun必须跟div在一个根标签中
			
			methods:{//声明一个函数
				changesfu:function(str){//通过自定义的事件，调用这个函数
					//console.log(str);
					this.fufu=str;//改变fufu的数据，对数据的操作
					this.$refs.f3.innerHTML=str;//改变fufu的数据，对dom的操作
				    
				}
			}	,	  
			components:{//在子组件中添加一个孙子组件
				'mySun':{//局部组件名，sun组件，让父级的html用这个组件名调用
				 props:["sun"],
					template:`<div>
					              <div>这里是孙子组件拿到的父级组件的数据：{{sun}}</div>
								  <div @click="clickSun">让孙子组件向父级组件传递数据，先绑定一个点击事件，执行方法clickSun,这一行可以点击</div>
						      </div>`,
					methods:{
						clickSun:function(e){
							console.log(e.target.innerHTML);//可以在控制台打印Sun组件的绑定点击事件的组件中的内容
						    this.$emit("suntext",e.target.innerHTML);//触发自定义事件的方法，第一个参数就是自定义参数的名字,第二个参数是要向自定义事件传递的数据/参数,触发了自定义的事件后，还要在父级中接收这个数据
						}
					}
				}
			}
		}
	}
})