define(function(require, exports, module) {
	/**
	 * [Array.prototype.indexOf for ie]
	 * @param  {[type]} !Array.prototype.indexOf [description]
	 * @return {[type]}                          [description]
	 */
	if (!Array.prototype.indexOf){
  		Array.prototype.indexOf = function(elt /*, from*/){
	    var len = this.length >>> 0;
	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;
	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}

	exports.elementCreate = function(tagName, attr)
	{
		var element = null;
		if(typeof tagName === "string")
		{
			element = document.createElement(tagName);
			
			if(typeof attr === "object") { 
				var key, style;
				for(key in attr){
					if(key === "styles" && typeof attr[key] === "object"){
						for(style in attr[key]) {
							element.style[style] = attr[key][style];
							if(style == "opacity" && window.innerWidth+"" == "undefined")
								element.style.filter = "alpha(opacity=" + (attr[key][style]*100) + ")";
						}
					}
				}
				if(key == "class")
					element.className = attr[key];
				else
					element[key] = attr[key];
			}
		}
		return element;
	};

	/**
	 * [getElementsByClassName description]
	 * @param  {[string]} root      [出发节点id]
	 * @param  {[string]} classname [classname]
	 * @return {[Array]}            []
	 */
	exports.getElementsByClassName = function(root, classname) {

		root = (root == '' ? document : document.getElementById(root));

		if (document.getElementsByClassName)
			return root.getElementsByClassName(classname);
		var ret = [];
		var elements = document.getElementsByTagName('*');
		for (var elem in elements) {
			if ((' ' + elem.className + ' ').indexOf(classname) > -1)
				ret.push(elem);
		}
		return ret;
	}


	/**
	 * [addClass description]
	 * 
	 * @param {[Object]} obj       [description]
	 * @param {[string]} classname [description]
	 */
	exports.addClass= function(obj, classname) {
		var objClass = obj.className;
		obj.className = objClass + ' ' + classname;
		return obj;
	}

	/**
	 * [rmClass description]
	 * @param  {[Object]} obj       [description]
	 * @param  {[string]} classname [description]
	 * @return {[type]}           [description]
	 */
	exports.rmClass = function(obj, classname) {
		obj.className = obj.className.replace(classname, '');
		return obj;
	}

	/**
	 * [hide description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	exports.hide = function(obj) {
		obj.style.display = "none";
	}

	/**
	 * [show description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	exports.show = function(obj) {
		obj.style.display = "block";
	}

	/**
	 * [getElementsByData description]
	 * @param  {[string]} root [root node]
	 * @param  {[string]} role [data-role]
	 * @return {[type]}      [description]
	 */
	exports.getElementsByData = function(root, role) {
		root = document.getElementById(root);
		var ret = [];
		var elements = root.getElementsByTagName('*');
		for (var i = 0, len = elements.length; i < len; i++) {
			if (elements[i].getAttribute("data-" + role)) {
				ret.push(elements[i]);
			}
		}
		return ret;
	}


});