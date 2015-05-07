define(function(require,exports,module){
	var util = require('./util');
	var $ajax = require('./ajax');
	
	exports.pageAjax = function(area,index)
	{
		var pageId = location.hash.substring(1);
		if(pageId == "")
				pageId = index;
		var url = pageId + ".html";
		var eleBody = document.getElementById(area);
		$ajax.get(url,function(html){
			eleBody.innerHTML = html;
		});
	}
	exports.pageBlock = function(root,role){
		var pageId = location.hash.substring(1);
		pages = util.getElementsByData(root, role);
		for (var i = 0, len = pages.length; i < len; i++) {
			if (pages[i].getAttribute("data-page") === pageId)
				util.show(pages[i]);
			else
				util.hide(pages[i]);
		}
	}
});
