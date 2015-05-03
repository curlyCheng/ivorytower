define(function(require, exports, module) {
	var util = require('./util');

	var getElementsByData = util.getElementsByData,
		addClass = util.addClass,
		rmClass = util.rmClass,
		show = util.show,
		hide = util.hide;

	exports.tab = function(root,tab,role){
		pageChange();
		bindEvents(root,tab,role);
	}

	function pageChange() {
		var pageId = location.hash.substring(1);
		if(!pageId) pageId = "singin";
		pages = getElementsByData("page-wrap", "page");
		for (var i = 0, len = pages.length; i < len; i++) {

			if (pages[i].getAttribute("data-page") === pageId)
				show(pages[i]);
			else
				hide(pages[i]);
		}
	}

	function blockChange(obj,role) {
				if ((obj.className).indexOf(role + '-on') > -1) return;
				var index = links.indexOf(obj);
				for (var j = 0,len=links.length; j < len; j++) {
					if (index === j) {
						show(blocks[j]);
						addClass(links[j], role + '-on');
					} else {
						hide(blocks[j]);
						rmClass(links[j], role + '-on');
					}
				}		
	}

	function bindEvents(root, tab, role) {
		if ('onhashchange' in window) {
			window.onhashchange = function() {
				pageChange();
			}
		}
		links = getElementsByData(root, tab);
		blocks = getElementsByData(root, role);
		for (var i = 0, len = links.length; i < len; i++) {
			var link = links[i];
			link.onclick = function() {
				blockChange(this,role);
			}
		}
	}
})