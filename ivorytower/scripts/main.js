define(function(require, exports, module) {
	var tab = require('./tab');
	var flbox = require("./window"),
		url = require("./urlRandom");
	var carousel = require('./carousel');
	var util = require('./util');
	exports.tab = tab.tab;
	exports.popup = function(elem) {
		elem.onclick = function() {
			var href = this.href;
			var title = this.innerHTML;
			flbox.open(href, title);
			return false;
		};
	};
	exports.carousel = carousel.slide;
	exports.util = util;
});