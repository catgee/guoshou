i = 0;
j = 0;
count = 0;
MM = 0;
SS = 1800;  // 秒 90s
MS = 0;
totle = (MM + 1) * 600;
d = 180 * (MM + 1);
MM = "0" + MM;
var gameTime = 1800;
var resettime = function () {
	i = 0;
	j = 0;
	count = 0;
	MM = 0;
	SS = 90;  // 秒 90s
	MS = 0;
	totle = (MM + 1) * 600;
	d = 180 * (MM + 1);
	MM = "0" + MM;
	gameTime = 1800;
	clearInterval(s);
	clearInterval(t1);
	$(".pie1").css("-o-transform", "rotate(" + 179.999999999999 + "deg)");
	$(".pie1").css("-moz-transform", "rotate(" + 179.999999999999 + "deg)");
	$(".pie1").css("-webkit-transform", "rotate(" + 179.999999999999 + "deg)");

	$(".pie2").css("-o-transform", "rotate(" + 359.4000000000022 + "deg)");
	$(".pie2").css("-moz-transform", "rotate(" + 359.4000000000022 + "deg)");
	$(".pie2").css("-webkit-transform", "rotate(" + 359.4000000000022 + "deg)");
	$(".pie1").css("backgroundColor", "#fff");
	$(".pie2").css("backgroundColor", "#fff");
	countDown();
}
//count down
var showTime = function () {
	totle = totle - 1;
	if (totle == 0) {
		clearInterval(s);
		clearInterval(t1);
	} else {
		if (totle > 0 && MS > 0) {
			MS = MS - 1;
			if (MS < 10) {
				MS = "0" + MS
			}
			;
		}
		;
		if (MS == 0 && SS > 0) {
			MS = 10;
			SS = SS - 1;
			if (SS < 10) {
				SS = "0" + SS
			}
			;
		}
		;
		if (SS == 0 && MM > 0) {
			SS = 1800;
			MM = MM - 1;
			if (MM < 10) {
				MM = "0" + MM
			}
			;
		}
		;
	}
	;

	//console.log(SS);
	if (SS == 00) {
		$(".pie1").css("-o-transform", "rotate(" + 0 + "deg)");
		$(".pie1").css("-moz-transform", "rotate(" + 0 + "deg)");
		$(".pie1").css("-webkit-transform", "rotate(" + 0 + "deg)");
	}
};
var start1 = function () {
	//i = i + 0.6;
	i = i + 360 / ((gameTime) * 10);  //旋转的角度  90s 为 0.4  60s为0.6
	count = count + 1;
	if (count <= (gameTime / 2 * 10)) {  // 一半的角度  90s 为 450
		$(".pie1").css("-o-transform", "rotate(" + i + "deg)");
		$(".pie1").css("-moz-transform", "rotate(" + i + "deg)");
		$(".pie1").css("-webkit-transform", "rotate(" + i + "deg)");
		//console.log('count <= (gameTime/2*10)==========>'+i);
	} else {
		if (i < 348) {
			$(".pie2").css("backgroundColor", "#d13c36");
			$(".pie2").css("-o-transform", "rotate(" + i + "deg)");
			$(".pie2").css("-moz-transform", "rotate(" + i + "deg)");
			$(".pie2").css("-webkit-transform", "rotate(" + i + "deg)");
		}
		else {
			$(".pie1").css("-o-transform", "rotate(" + 0 + "deg)");
			$(".pie1").css("-moz-transform", "rotate(" + 0 + "deg)");
			$(".pie1").css("-webkit-transform", "rotate(" + 0 + "deg)");
			$(".pie1").css("backgroundColor", "#d13c36");
		}
		//console.log('i<348==========>'+i);
	}
};

var countDown = function () {
	i = 0;
	j = 0;
	count = 0;
	MM = 0;
	SS = gameTime;
	MS = 0;
	totle = (MM + 1) * gameTime * 10;
	d = 180 * (MM + 1);
	MM = "0" + MM;
	showTime();
	s = setInterval("showTime()", 100);
	start1();
	t1 = setInterval("start1()", 100);
}
countDown();
