define(function(require,exports,module){
	var tab = require('./tab');
	var flbox = require("./window"),
		url = require("./urlRandom");
	var carousel = require('./carousel');
	exports.tab = tab.tab;
	exports.popup = function(elem){
		elem.onclick = function(){
			var href = this.href;
			flbox.open(href);
			return false;
		};
	};
	exports.carousel = carousel.slide;
});