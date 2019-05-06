var app=new Vue({//声明一个Vue
	el:".app",
	data:{
		shu:20,
		list:[//定义数据
		
		{
			id:1,
			shop:"余生记",
			qian:100,
			shu:1,
		},
		{
			id:2,
			shop:"麻辣人生",
			qian:150,
			shu:1,
		},
		{
			id:3,
			shop:"兰源拉面",
			qian:120,
			shu:1,
		}],
	},
	methods:{//函数
		jiayi:function(index){
			this.list[index].shu++;
		},
		jianyi:function(index){
			if(this.list[index].shu===1){return ;}
			this.list[index].shu--;
		},
		sanchu:function(index){
			this.list.splice(index,1);
		},
	},
	computed:{//计算属性
		zongjia:function(){
			var jia=0;
			for(var i=0;i<this.list.length;i++){
				var item=this.list[i];
				jia+=(item.qian*item.shu);
			}
			return jia;
		},
	},
	
})