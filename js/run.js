define(function (require, exports) { //dedine闭包  
	exports.sysindex = function () {
		// if (myBrowser() == 8 || myBrowser() == 9) {
		// 	window.location.href = "index-ie89.html";
		// }
		// var inbox = new Swiper(".inbox", {
			//initialSlide :1,
			//pagination : '.swiper-pagination',
			//paginationClickable :true,
		 	//autoplay : 3000
		// });

		// pageimg($(".page"), 1920, 1080);
		// window.onresize = function () {
		//     pageimg($(".page"), 2000, 1126);
		// }

		$(".tvbut").click(function () {
			$(this).hide().parent().find("video")[0].play();
		});

	}




	//实现图片全自适应的函数
	function pageimg(id, w, h) { //输入的参数为，id为父类ID，w,h为该父类里图片的真实的宽高
		id.each(function (i) {
			var tw = $(this).width(); //父类宽
			var th = $(this).height(); //父类高
			var new_imgw = Math.floor((w / h) * th); //根据父类高算图片的实践宽
			var new_imgh = Math.floor((h / w) * tw); //根据父类宽算图片的实践高
			console.log(tw, th, new_imgw, new_imgh);
			var ml = 0,
				mt = 0;
			if (tw < new_imgw) { //当实践图片宽大于父类宽，启动高限制模式，宽两边裁；
				ml = Math.floor((new_imgw - tw) / 2);
				$(this).find("img").removeClass("w").css("margin-left", -ml + "px");
			} else { //当实践图片宽小于父类宽，启动宽限制模式，高上下两边裁；

				$(this).find("img").addClass("w").css("margin-left", "0px");
				if (th < new_imgh) {
					mt = Math.floor((new_imgh - th) / 2);
					$(this).find("img").css("margin-top", -mt + "px");
				} else {
					$(this).find("img").css("margin-top", "0px");
				}
			}
		});
	}

	//辅助函数
	exports.isNull = function (data) {
		return (data == "" || data == undefined || data == null) ? "kong" : data;
	}
	exports.selectDraw = function (id, data, fun) {
		var optionHtml = "";
		for (var i = 0; i < data.length; i++) {
			optionHtml += '<option value="' + data[i][1] + '" uid="' + data[i][0] + '">' + data[i][1] + '</option>';
		}
		id.html(optionHtml);
		id.change(function () {
			var onse = $(this).find("option:selected");
			fun(onse.attr("value"), onse.attr("uid"));
		});
	}
	exports.setSelect = function (id, toid) {
		id.find("option[uid='" + toid + "']").attr("selected", true);
	}
	exports.getUrl = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}

	//浏览器判断
	function myBrowser() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
		var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
		var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
		if (isIE) {
			var IE5 = IE55 = IE6 = IE7 = IE8 = false;
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			IE55 = fIEVersion == 5.5;
			IE6 = fIEVersion == 6.0;
			IE7 = fIEVersion == 7.0;
			IE8 = fIEVersion == 8.0;
			IE9 = fIEVersion == 9.0;
			return fIEVersion;
		} //isIE end
		if (isFF) {
			return "FF";
		}
		if (isOpera) {
			return "Opera";
		}
	}

});