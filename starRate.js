(function(){
    //定义构造函数
	var Beautifier = function(ele,opt){
        this.$element = ele;
        this.defaluts = {
        	'color':'red',
        	'fontSize':'14px'
        };
            //合并默认参数opt和defaluts
            this.options = $.extend({},this.defaluts,opt);
		}
		//定义构造函数的方法
	Beautifier.prototype={
	   getCurrent :function() {
		    return this.$element.css({
		    	   'color':this.defaluts.color,
                   'fontSize':this.defaluts.fontSize
		    }});
		};
         }
	$.fn.starRate = function(options){
		var beautifier = new Beautifier(this,options);
		//调用其方法
		return beautifier.getCurrent();

	}
})(jQuery);