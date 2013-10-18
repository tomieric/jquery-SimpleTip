/*
* plugin: 简单tooltip 插件
* author: tomieric
* email: tomieric@gmail.com
* create: 2013-10-17
* blog: http://www.fenxiangyuan.com
*/
(function($){
	var SimpleTip = function(obj, options){
		this.target = obj;
		this.options = $.extend(this.defaults, options);
		this.init();
	};
	
	SimpleTip.prototype = {
		constructor: SimpleTip, 
		init: function(){
			this.create();
			this.bind();
			// 默认自动显示
			this.options.trigger != 'hover' && this.show();
		},
		create: function(){
			var options = this.options;
			this.Dom = $('<div class="simple-tip '+ (options.style === 'default' ? '' : ('simple-tip-'+ options.style))+'"><i class="simple-tip-arrow" '+ (options.id === '' ? '' : ('id="' + options.id + '"')) +'></i></div>');
			this.title = $('<div class="simple-tip-title"></div>');
			this.titleText = $('<span>'+ options.title +'</span>');
			this.close = $('<a href="javascript:void(0);" class="simple-tip-close" title="'+ options.closeText +'" hidefocus="true">x</a>');
			this.content = $('<div class="simple-tip-content">'+ options.content +'</div>');
			
			// 是否显示title
			!options.title && options.title.hide();
			// 是否显示关闭按钮
			!options.close && options.close.hide();
			
			this.Dom.css({
				'position': 'absolute',
				'width': Math.floor(options.width) + 'px',
				'height': Math.floor(options.height) + 'px',
				'top': Math.floor(options.y) + 'px',
				'left': Math.floor(options.x) + 'px',
				'z-index': Math.round(options.zIndex)
			}).addClass(options.className);
			
			// 设为相对
			if(options.relative){
				var offset = this.target.offset(), targetW = this.target.outerWidth(true), targetH = this.target.outerHeight(true);
				this.Dom.css({
					top: Math.floor(offset.top + targetH + options.y) + 'px',
					left: Math.floor(offset.left + targetW + options.x) + 'px'
				});
			}
			
			this.title.append(this.titleText).append(this.close);
			this.Dom.append(this.title).append(this.content).hide().appendTo($("body"));
			
			return this;
		},
		bind: function(){
			this.close.on("click", $.proxy(this.hide, this));
			
			this.options.trigger === 'hover' && (function(that){
				var _that = that;
				_that.Dom.hide();
				_that.target.on("mouseenter mouseleave", function(event){
					if(event.type === "mouseenter"){
						_that.show();
					}else{
						_that.hide();
					}
				});
			})(this);
		},
		show: function(){
			var that = this, options = this.options;
			
			this.Dom.fadeIn(options.time, function(){
				options.show && $.isFunction(options.show) && options.show.call(null, that);
			});
		},
		hide: function(fn){
			var that = this, options = this.options;
			
			this.Dom.fadeOut(options.time, function(){
				options.hide && $.isFunction(options.hide) && options.hide.call(null, that);
			});
		}
	};
	
	/*
	* defautls 默认配置
	* id: 标识popup的唯一性和样式覆盖
	* class: 皮肤类样式
	* title: 提醒框title
	* content: 提醒内容
	* style: 弹出框位置 default(左上) l(左侧) r(右侧) tr(右上) bl(左下) br(右下)
	* x: 相对于body的绝对x轴偏移
	* y: 相对于body的绝对y轴偏移
	* close: 是否显示关闭按钮
	* closeText: 关闭title文字，默认为“关闭”
	* trigger: 默认自动弹出，hover - 设置为鼠标滑过
	* relative: 相对于绑定dom对象位置偏移
	* time: 显示隐藏过渡时间
	* width: 固定宽度
	* height: 固定高度
	* zIndex: 1000 默认定位层级
	*/
	SimpleTip.prototype.defaults = { id: '', className: '', title: '\u63d0\u9192', content: '', style: 'default', x: 5, y: 15, close: true, closeText: '\u5173\u95ed', trigger: 'default', relative: false, time: 200, width: 'auto', height: 'auto', zIndex: 100 };
	
	$.fn.simpleTip = function(option){
		return this.each(function(){
			var that = $(this), ST = $(this).data('simpleTip'), options = typeof option === "object" && option;

			!ST && $(this).data('simpleTip', (ST = new SimpleTip(that, options)));
			
			if(typeof option === "string"){
				ST[option]();	
			}
		});
	};
})(jQuery);
