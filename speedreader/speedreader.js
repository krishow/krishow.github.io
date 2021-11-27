(function() {
	"use strict";

	let list = [];       // an array to store words that will be displayed
	let speed = 171;    // the speed of animation
	let timer = null;      // set up the timer

	window.onload = function() {
		document.querySelector("#start").onclick = start;
		document.querySelector("#stop").onclick = stop;
		document.querySelector("#medium").onchange = changeSize;
		document.querySelector("#big").onchange = changeSize;
		document.querySelector("#bigger").onchange = changeSize;
		document.querySelector("#speed").onchange = changeSpeed;
          // 请修改上面的代码，将getElementById更换为querySelector
	};

	// start the animation 启动动画
	function start() {
		const inputText = document.getElementById("inputText");
		list = inputText.value.split(/[ \t\n]+/);  
		timer = setInterval(play, speed);
		document.getElementById("start").disabled = true;
		document.getElementById("stop").disabled = false;
		document.getElementById("inputText").disabled = true;
	}
	
	// stop the animation and return everything to default
     // 停止动画并恢复到默认设置
	function stop() {
		//在此处编写自己的代码，提示：会用到clearInterval函数
        clearInterval(timer);
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
		document.getElementById("inputText").disabled = false;
        document.getElementById("inputText").innerHTML = str;
		//document.getElementById("display").innerHTML = "";
	}
	
	// display words in the array  显示数组中的单词
	function play() {
		if (list.length == 0) {
			stop();
		} else {
			let str = list[0];
			let char = str.charAt(str.length - 1);
			if (char == ',' || char == '.' || char == '!' ||
				char == '?' || char == ';' || char == ':') {
				// 在此处编写自己的代码
				str = str.slice(0,str.length-1);
			}
			playOnce(str);
		}
	}
	
	// display the given word in the display box;
     // 在显示框中显示给定的单词
	function playOnce(str) {
		const box = document.getElementById("display");
		box.innerHTML = str;
		list.shift();
	}

	// change font size of text in the display box;
	function changeSize() {
		const box = document.getElementById("display");
        //____________________________________; 
		box.style.fontSize = this.value;
	}

	// change speed of animation in the display box;
	// 改变显示框中的速度
	function changeSpeed() {
		speed = this.value;
		if (timer !== null) {
			// 在此处编写自己的代码
				clearInterval(timer);
				timer = setInterval(play,speed);
	}
}
})();
