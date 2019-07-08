define(['jquery', 'scrollTo'],function($,scrollTo) {
	
	function BackTop(el, opts) {
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el = $(el);
		this.scroll = new scrollTo.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});
		//这样不行的原因是，this指向的是this.$el，需要修改this,用下面的方法
		// this.$el.on('click', this._move);
		
		this._checkPosition();
		
		if(this.opts.mode == 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		}else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		$(window).on('scroll', $.proxy(this._checkPosition, this));
	}
	BackTop.prototype = {
		constructor: BackTop,
		_move: function() {
			this.scroll.move();
		},
		_go: function() {
			this.scroll.go();
		},
		_checkPosition: function() {
			var $el = this.$el;
			if($(window).scrollTop() > this.opts.pos) {
				$el.fadeIn();
			}else {
				$el.fadeOut();
			}
		}
	}
	BackTop.DEFAULTS = {
		mode: 'move',
		pos: $(window).height(),////超过一个屏的高度
		speed: 800
	}
	
	//jquery 插件的方式
	$.fn.extend({
		backtop: function() {
			//这里之所以循环，是考虑到可能选择的元素是多个
			return this.each(function() {
				new BackTop(this,opts);
			})
		}
	})
	
	return {
		BackTop: BackTop
	};
})