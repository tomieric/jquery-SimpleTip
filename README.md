jquery-SimpleTip
================

a simple tooltip plugin for jQuery 



用法
===============

```
  $(yourId).simpleTip(options);
```

参数配置
==============

```
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
	* show: function(simpleTip){ // 显示后回调函数并返回当前ST对象 }
	* hide: function(simpleTip){ // 隐藏后回调函数并返回当前ST对象 }
	*/
```

demo
==================
```
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>jquery-SimpleTip</title>
	<link rel="stylesheet" href="assert/js/gallery/jquery.simpleTip.css" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="assert/js/gallery/jquery.simpleTip.js"></script>
	<style>
		*{ margin: 0; padding: 0;}
		body{ font-size: 12px; }
		a{ text-decoration: none; }
		#target{ margin: 100px 0 0 100px; width: 100px; height: 100px; background: #ffcccc; }
	</style>
</head>
<body>
	<div id="target"></div>
	<script>
	$(function(){
		/* 相对页面 */
		//$("#target").simpleTip({ content: 'tool tip' });
		
		//$("#target").simpleTip({ x: 200, y: 200, content: 'I\'m Here'});
		
		/* 相对元素 */
		$("#target").simpleTip({ relative: true, x: 0, y: 0, content: 'I\'m Here'});
	});
	</script>
</body>
</html>
```
