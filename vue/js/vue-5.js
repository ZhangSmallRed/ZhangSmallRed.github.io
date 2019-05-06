new Vue({
    el:".tiaojian",
	data:{
		shu:20,
		show:true,
	}	
})

new Vue({
    el:".xunhuan",
	data:{
		liebiao:[
		    {
			name:"小红1号",
			age:22,
		    },
			{
			name:"小红2号",
			age:23,
		    },
			{
			name:"小红3号",
			age:24,
		    },
		],
		duixiang:{
			name:"zhb",
			age:22,
			sex:"男",
		}
	},
	methods:{
		add:function(){
			this.liebiao.push({//vue重写了push方法，可以直接push数组元素
				name:"小红x号",
				age:100,
			})
		    	
		},	
	}
})