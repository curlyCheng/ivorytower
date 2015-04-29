define(function(require,exports){
	exports.urlRandom = function(url){
		var strRandom = "random="+Math.random();
		var arr = url.split("?");
		if(arr[1] !== "undefined"){
			if(url.slice(-1) === '&')
				url = url+ strRandom;
			else
				url = url + '&'+ strRandom;
		}
		else
			url = url+ '?' + strRandom; 
		return url;
	};

});
