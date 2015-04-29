define(function(require,exports){
	exports.get = function(url,callback){
		if(url+"" === "undefined"){
			console.log("url is not defined");
			return;
		}
		var xhr = new XMLHttpRequest();
		xhr.open("GET",url);

		xhr.onreadystatechange = function(){

			if(xhr.readyState === 4 && xhr.status === 200 && typeof callback === "function")
			{
			callback.call(xhr,xhr.responseText);}
		};
		xhr.send();
	};
});
