define(function(require,exports,module){
	var util = require('./util.js');
	var overlayout = (function(){
		var elem = util.elementCreate("div", {

				class: "overlayout"
		
		});
		document.body.appendChild(elem);
		return {
			display : false,
			show : function(){
				elem.style.display = "block";
				this.display = true;
				return this;
			},
			hide : function(){
				elem.style.display = "none";
				this.display = false;
				return this;
			}
		};
	})();
	exports.overlayout = overlayout;
})
