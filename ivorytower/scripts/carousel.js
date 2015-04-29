define(function(require, exports) {
	exports.slide = function(width,interval, milesecond) {
		var container = document.getElementById("slide-container");
		var show = document.getElementById("slide-show");
		var slides = show.getElementsByTagName("li");
		var btns = document.getElementById("slide-box").getElementsByTagName("li");
		var prev = document.getElementById("prev-btn");
		var next = document.getElementById("next-btn");
		var index = 1;
		var timer;

		var count = slides.length - 2;
		show.style.left = -width + 'px'
		var animated = false;

		function animate(offset) {
			if (offset == 0)
				return;
			animated = true;
			var time = 300;
			var interval = 10;
			var speed = offset / (time / interval);
			var left = parseInt(show.style.left) + offset;

			go = function() {
				if ((speed > 0 && parseInt(show.style.left) < left) || (speed < 0 && parseInt(show.style.left) > left)) {
					show.style.left = parseInt(show.style.left) + speed + 'px';
					setTimeout(go, interval);
				} else {
					show.style.left = left + 'px';
					if (left > -200)
						show.style.left = (-count * width) + 'px';
					else if (left < -count * width)
						show.style.left = -width + 'px';
					animated = false;
				}
			}
			go();
		}

		function buttons() {
			for (var i = 0; i < btns.length; i++) {
				if (btns[i].className == 'show')
					btns[i].className = '';
			}
			btns[index - 1].className = 'show';
		}

		play = function() {
			timer = setTimeout(function() {
				next.onclick();
				play();
			}, interval);
		}

		stop = function() {
			clearTimeout(timer);
		}

		prev.onclick = function() {
			if (animated)
				return;
			if (index == 1)
				index = 5;
			else index--;
			animate(width);
			buttons();
		}

		next.onclick = function() {
			if (animated)
				return;
			if (index == 5)
				index = 1;
			else
				index++;
			animate(-width);
			buttons();
		}

		container.onmouseover = stop;
		container.onmouseout = play;

		play();

	}
});