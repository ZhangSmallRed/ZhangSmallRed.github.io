// JavaScript Document
var zhb = new Vue({
    el:"#app",
	data:{
		name:"zhb",
		date:new Date(),
		dan: "yi",//数据dan的值与按钮的value的值一致时，就会选中该选项
		fu:["yi","san"],//数据fu的值与按钮的value的值一致时，就会选中该选项
		selected:11,
		selected2:["11","33"],
		message:'',
		message2:'',
		message3:'',
	},
	methods:{
		
		},
		
})
console.log(zhb.name);