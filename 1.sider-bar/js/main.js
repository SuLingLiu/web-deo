requirejs.config({
	paths: {//定义别名，js后缀可以不加
		jquery: 'jquery.min',
		
	}
})


/* 
	config里定定义好别名后，下面数组里就不需要写那么长的路径
 */
requirejs(['jquery','backTop'],function($,backTop) {
	
	/* new backTop.BackTop($('#backTop'), {
		move: 'move'
	}); */
	
	//注册成插件的方式
	$('#backTop').backtop({
		mode: 'go'
	})
	
	
	
})