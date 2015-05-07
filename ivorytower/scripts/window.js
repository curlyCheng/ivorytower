define(function(require,exports,module){
	var util = require('./util');
	var overlayout = require('./overlayout');
	var $ajax = require('./ajax');
	
	var eleWin = util.elementCreate("div",{
		class: "window"
	});
	var eleBar = util.elementCreate("div",{
		class: "winBar"
	});
	var eleBody = util.elementCreate("div",{
		class: "winBody"
	});
	var eleClose = util.elementCreate("a",{
		href: "javascript:;",
		class: "winClose"
	});
	var overlay = overlayout.overlayout;
	eleWin.appendChild(eleBar);
	eleWin.appendChild(eleClose);
	eleWin.appendChild(eleBody);
	document.body.appendChild(eleWin);

	eleClose.innerHTML = "关闭";
	eleClose.onclick = function(){
		flbox.close();
		return false;
	};
	
	var flbox = {
		open: function(url,title){
			var box =  flbox;
			eleBar.innerHTML = title;
			$ajax.get(url,function(html){
				eleBody.innerHTML = html;
				flbox.position();
			});
		},
		position: function(){
			util.show(eleWin);
			var width = eleWin.clientWidth;
			var height = eleWin.clientHeight;
			overlay.show();
			eleWin.style.marginLeft = "-"+(width/2)+"px";
			eleWin.style.top = (screen.availHeight-height-100)/2 + "px";
		},
		close: function(){
			overlay.hide();
			util.hide(eleWin);
			eleBody.innerHTML = "";
		}
	}
	exports.open = flbox.open;
});
