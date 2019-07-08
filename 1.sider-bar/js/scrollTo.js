//定义模块
define(['jquery'],function($) {
	
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
		this.$el = $('html,body');
	}
	
	ScrollTo.prototype = {
		constructor: ScrollTo, 
		move: function() {
			var opts = this.opts,
				dest = opts.dest;
			//不在目的的，且不在运动的时候点击才能触发
			if($(window).scrollTop() != dest) {
				if(!this.$el.is(':animated')) {
					
					this.$el.animate({
						scrollTop: dest
					}, opts.speed)
				}
			}
		},
		go: function() {
			var dest = this.opts.dest;
			//不在目的的，且不在运动的时候点击才能触发
			if($(window).scrollTop() != dest) {
				if(!this.$el.is(':animated')) {
					this.$el.scrollTop(dest);
				}
			}
			
		}
	}
	
	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800,
	}
	//通过return返回出去，以便其他文件引用
	return {
		ScrollTo: ScrollTo
	}
})