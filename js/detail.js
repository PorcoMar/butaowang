	//登陆和未登录的右边header
	/*******我的步淘***********/
	$(function() {
		$("#header .right li.se").mouseenter(function() {
			$(".pos1").show();
			$(".pos1 p").css("background", "#f0f0f0")

		});
		$(".pos1 p").mouseenter(function() {
			$(this).css("background", "url(img/bbb.jpg)").siblings().css("background", "#f0f0f0")
		})

		$(".pos1").mouseleave(function() {
			$(this).hide();
		});

		/******关注我们***********/
		$("#header .right li.last").mouseenter(function() {
			$("#header .pos2").show();
			$("#header .pos2 p").css("background", "#f0f0f0")

		});
		$("#header .pos2 p").mouseenter(function() {
			$(this).css("background", "url(img/bbb.jpg)").siblings().css("background", "#f0f0f0")
		})
		$("#header .pos2").mouseleave(function() {
			$(this).hide();
		});

		/*************************************获得cookie*********************************************************/
		console.log(getCookie("name"), getCookie("pass"), getCookie("email"), getCookie("a"))
		if (getCookie("a")) {
			$("#header .left .se").html("您好！" + getCookie("name") + "欢迎来到" + "<a href='javascript:;'>" + "步淘生活商城" + "</a><a href='javascript:;'>" + "&nbsp;退出" + "</a>")
		}

		/*********************con选项卡******************************/

		$("#_middle .left ul").find("li").eq(0).click(function() {
			$("#_middle .left .con .xxk1").show().siblings().hide()
			$(this).css({
				"background": "url(../img/nn.jpg)"
			}).siblings().css({
				"background": "url(../img/jkl.jpg) left -2px"
			})
		})
		$("#_middle .left ul").find("li").eq(1).click(function() {
			$("#_middle .left .con .xxk2").show().siblings().hide()
			$(this).css({
				"background": "url(../img/nn.jpg)"
			}).siblings().css({
				"background": "url(../img/jkl.jpg) left -2px"
			})

		})
		$("#_middle .left ul").find("li").eq(2).click(function() {
			$("#_middle .left .con .xxk3").show().siblings().hide()
			$(this).css({
				"background": "url(../img/nn.jpg)"
			}).siblings().css({
				"background": "url(../img/jkl.jpg) left -2px"
			})

		})
		$("#_middle .left ul").find("li").eq(3).click(function() {
				$("#_middle .left .con .xxk4").show().siblings().hide()
				$(this).css({
					"background": "url(../img/nn.jpg)"
				}).siblings().css({
					"background": "url(../img/jkl.jpg) left -2px"
				})

			})
			/*************************************************ajax加载选中数据***********************************************/
		var dataid = getCookie("dataid"); //alert(typeof Number(dataid))	number
		$.ajax({
			url: "../json/index.json",
			data1Type: "json",
			success: function(mag) {
				var shuju1 = mag.data1 //data是json里边的data
				var shuju2 = mag.data2 //data是json里边的data
				var shuju3 = mag.data3 //data是json里边的data
				var shuju4 = mag.data4 //data是json里边的data
				var str = ''
				var str2 = ''
				var str3 = ''
				var str4 = ''
				var strr = new Array()
				var strr2 = []
				var strr3 = []
				var strr4 = []
				var numm = Math.floor(Math.random() * 1000)

				//alert(num)		//12个[object,object]
				for (var i in shuju1) {
					//console.log(shuju1[i].id,dataid,shuju3[i].img)	//显示data1的id
					if (dataid == shuju1[i].id) {
						str += '<a class="name" href="javascript:;">' + shuju1[i].name + '</a>'
						str += '<img class="im l" src= "' + "../" + shuju1[i].img + '"/>' //shuju1[i].img为img/xxx.img，所以只加../
						str += '<div class="l h1">'
						str += '<p class="price l">' + shuju1[i].price + '</p>' + '<p class="se l">' + '<b class="sale">' + shuju1[i].sale + '</b>' + '<br/>' + '<b class="delete">' + shuju1[i].old + '</b>' + '</p>'
						str += '<img class="im2 l" src= "../img/cccc.jpg"/>'
						str += '<p class="inp l">' + '<input class="inp1" data1id="' + shuju1[i].id + '" type="button" value="立即购买">' +
							'<input class="inp2" dataid = "' + shuju1[i].id + '" type="button" value="加入购物车">' + '</p>'
						str += '</div>'

						/****************加载同类商品**********************/

						for (var j = 0; j < 4; j++) {
							//找到四个同类商品
							var num = Math.floor(Math.random() * shuju1.length) //shuju1.length 为json数据中当前data1的个数	
							var numm = Math.floor(Math.random() * 1000) //用来模拟购买人数
								//strr[j] = '<li class="l"><img class="im" src= "'+"../"+shuju1[num].img+'"/><a class="name" href="javascript:;">'+shuju1[num].name+'</a><div>'+'<span class="sp1 l">'+shuju1[num].price+'</span>'+'<span class="sp2 r"><b></b>人已购买</span>'+'</div></li>'
								//这两种方法都可以
							strr.push('<li class="p' + j + ' l"><img class="im" src= "' + "../" + shuju1[num].img + '"/><a class="name" href="javascript:;">' + shuju1[num].name + '</a><div class="box"><span class="sp1 l">' + shuju1[num].price + '</span>' + '<span class="sp2 r"><b>' + Math.floor(Math.random() * 1000) + '</b><i>人已购买</i></span></div></li>')
						}

						/****************截取json字符串**********************/
						//					var price = shuju1[i].price.substring(1,3)//由￥69.00变成69，在Number变成数字69
						var old = shuju1[i].old.substring(1, 4)
							//					alert(old)
							//					alert(Number(shuju1[i].old.substring(1,4))-Number(shuju1[i].price.substring(1,4)))//将字符串截取出来变成数字
						$("#_middle .ps ul").find("li").eq(0).append('<p>' + shuju1[i].old.substring(0, 4) + '</p>') //old price
						$("#_middle .ps ul").find("li").eq(1).append(shuju1[i].sale.substring(1, 4)) //折扣
						$("#_middle .ps ul").find("li").eq(2).append(Number(shuju1[i].old.substring(1, 4)) - Number(shuju1[i].price.substring(1, 4))) //差价
						$(".ps i").append(parseInt(shuju1[i].price.substring(1, 4))) //当前价格
						$("#_middle .bott ul").append(strr) //添加同类商品
							//$("#_middle .bott ul li div").find("b").append(numm)//随机模拟购买人数,必须放添加同类商品后边

						$("#float .hiden .box").append('<ul class="ul2">' + '<li class="st l">' + '<img class="img l" src= "' + "../" + shuju1[i].img + '"/>' +
							'<p class="l">' + shuju1[i].name + '</p>' + '</li>' + '<li class="se l"></li>' + '<li class="th l">' + shuju1[i].price + '</li>' + '<li class="fo l"></li>' + '<li class="l last">删除</li>' + '</ul>')
					}
				}

				$("#_cont .w").prepend(str) //添加商品栏

				/*************************************************con2***********************************************/

				for (var i in shuju2) {
					//console.log(shuju2[i].id,dataid,shuju2[i].img)	//显示data1的id
					if (dataid == shuju2[i].id) {
						str2 += '<a class="name" href="javascript:;">' + shuju2[i].name + '</a>'
						str2 += '<img class="im l" src= "' + "../" + shuju2[i].img + '"/>' //shuju2[i].img为img/xxx.img，所以只加../
						str2 += '<div class="l h1">'
						str2 += '<p class="price l">' + shuju2[i].price + '</p>' + '<p class="se l">' + '<b class="sale">' + shuju2[i].sale + '</b>' + '<br/>' + '<b class="delete">' + shuju2[i].old + '</b>' + '</p>'
						str2 += '<img class="im2 l" src= "../img/cccc.jpg"/>'
						str2 += '<p class="inp l">' + '<input class="inp1" data1id="' + shuju2[i].id + '" type="button" value="立即购买">' +
							'<input class="inp2" dataid = "' + shuju2[i].id + '" type="button" value="加入购物车">' + '</p>'
						str2 += '</div>'

						/****************加载同类商品**********************/

						for (var j = 0; j < 4; j++) {
							//找到四个同类商品
							var num = Math.floor(Math.random() * shuju2.length) //shuju2.length 为json数据中当前data1的个数	
							var numm = Math.floor(Math.random() * 1000) //用来模拟购买人数
								//strr[j] = '<li class="l"><img class="im" src= "'+"../"+shuju2[num].img+'"/><a class="name" href="javascript:;">'+shuju2[num].name+'</a><div>'+'<span class="sp1 l">'+shuju2[num].price+'</span>'+'<span class="sp2 r"><b></b>人已购买</span>'+'</div></li>'
								//这两种方法都可以
							strr2.push('<li class="p' + j + ' l"><img class="im" src= "' + "../" + shuju2[num].img + '"/><a class="name" href="javascript:;">' + shuju2[num].name + '</a><div class="box"><span class="sp1 l">' + shuju2[num].price + '</span>' + '<span class="sp2 r"><b>' + Math.floor(Math.random() * 1000) + '</b><i>人已购买</i></span></div></li>')
						}

						/****************截取json字符串**********************/
						//					var price = shuju2[i].price.substring(1,3)//由￥69.00变成69，在Number变成数字69
						var old = shuju2[i].old.substring(1, 4)
							//					alert(old)
							//					alert(Number(shuju2[i].old.substring(1,4))-Number(shuju2[i].price.substring(1,4)))//将字符串截取出来变成数字
						$("#_middle .ps ul").find("li").eq(0).append('<p>' + shuju2[i].old.substring(0, 4) + '</p>') //old price
						$("#_middle .ps ul").find("li").eq(1).append(shuju2[i].sale.substring(1, 4)) //折扣
						$("#_middle .ps ul").find("li").eq(2).append(Number(shuju2[i].old.substring(1, 4)) - Number(shuju2[i].price.substring(1, 4))) //差价
						$(".ps i").append(parseInt(shuju2[i].price.substring(1, 4))) //当前价格
						$("#_middle .bott ul").append(strr2) //添加同类商品
							//$("#_middle .bott ul li div").find("b").append(numm)//随机模拟购买人数,必须放添加同类商品后边
						$("#float .hiden .box").append('<ul class="ul2">' + '<li class="st l">' + '<img class="img l" src= "' + "../" + shuju2[i].img + '"/>' +
							'<p class="l">' + shuju2[i].name + '</p>' + '</li>' + '<li class="se l"></li>' + '<li class="th l">' + shuju2[i].price + '</li>' + '<li class="fo l"></li>' + '<li class="l last">删除</li>' + '</ul>')

					}
				}

				$("#_cont .w").prepend(str2) //添加商品栏
					/*************************************************con3***********************************************/

				for (var i in shuju3) {
					//console.log(shuju2[i].id,dataid,shuju3[i].img)	//显示data1的id
					if (dataid == shuju3[i].id) {
						str3 += '<a class="name" href="javascript:;">' + shuju3[i].name + '</a>'
						str3 += '<img class="im l" src= "' + "../" + shuju3[i].img + '"/>' //shuju3[i].img为img/xxx.img，所以只加../
						str3 += '<div class="l h1">'
						str3 += '<p class="price l">' + shuju3[i].price + '</p>' + '<p class="se l">' + '<b class="sale">' + shuju3[i].sale + '</b>' + '<br/>' + '<b class="delete">' + shuju3[i].old + '</b>' + '</p>'
						str3 += '<img class="im2 l" src= "../img/cccc.jpg"/>'
						str3 += '<p class="inp l">' + '<input class="inp1" data1id="' + shuju3[i].id + '" type="button" value="立即购买">' +
							'<input class="inp2" dataid = "' + shuju3[i].id + '" type="button" value="加入购物车">' + '</p>'
						str3 += '</div>'

						/****************加载同类商品**********************/

						for (var j = 0; j < 4; j++) {
							//找到四个同类商品
							var num = Math.floor(Math.random() * shuju3.length) //shuju3.length 为json数据中当前data1的个数	
							var numm = Math.floor(Math.random() * 1000) //用来模拟购买人数
								//str3r[j] = '<li class="l"><img class="im" src= "'+"../"+shuju3[num].img+'"/><a class="name" href="javascript:;">'+shuju3[num].name+'</a><div>'+'<span class="sp1 l">'+shuju3[num].price+'</span>'+'<span class="sp2 r"><b></b>人已购买</span>'+'</div></li>'
								//这两种方法都可以
							strr3.push('<li class="p' + j + ' l"><img class="im" src= "' + "../" + shuju3[num].img + '"/><a class="name" href="javascript:;">' + shuju3[num].name + '</a><div class="box"><span class="sp1 l">' + shuju3[num].price + '</span>' + '<span class="sp2 r"><b>' + Math.floor(Math.random() * 1000) + '</b><i>人已购买</i></span></div></li>')
						}

						/****************截取json字符串**********************/
						//					var price = shuju3[i].price.substring(1,3)//由￥69.00变成69，在Number变成数字69
						var old = shuju3[i].old.substring(1, 4)
							//					alert(old)
							//					alert(Number(shuju3[i].old.substring(1,4))-Number(shuju3[i].price.substring(1,4)))//将字符串截取出来变成数字
						$("#_middle .ps ul").find("li").eq(0).append('<p>' + shuju3[i].old.substring(0, 4) + '</p>') //old price
						$("#_middle .ps ul").find("li").eq(1).append(shuju3[i].sale.substring(1, 4)) //折扣
						$("#_middle .ps ul").find("li").eq(2).append(Number(shuju3[i].old.substring(1, 4)) - Number(shuju3[i].price.substring(1, 4))) //差价
						$(".ps i").append(parseInt(shuju3[i].price.substring(1, 4))) //当前价格
						$("#_middle .bott ul").append(strr3) //添加同类商品
							//$("#_middle .bott ul li div").find("b").append(numm)//随机模拟购买人数,必须放添加同类商品后边
						$("#float .hiden .box").append('<ul class="ul2">' + '<li class="st l">' + '<img class="img l" src= "' + "../" + shuju3[i].img + '"/>' +
							'<p class="l">' + shuju3[i].name + '</p>' + '</li>' + '<li class="se l"></li>' + '<li class="th l">' + shuju3[i].price + '</li>' + '<li class="fo l"></li>' + '<li class="l last">删除</li>' + '</ul>')

					}
				}

				$("#_cont .w").prepend(str3) //添加商品栏
					/*************************************************con4***********************************************/

				for (var i in shuju4) {
					//console.log(shuju4[i].id,dataid,shuju4[i].img)	//显示data1的id
					if (dataid == shuju4[i].id) {
						str4 += '<a class="name" href="javascript:;">' + shuju4[i].name + '</a>'
						str4 += '<img class="im l" src= "' + "../" + shuju4[i].img + '"/>' //shuju4[i].img为img/xxx.img，所以只加../
						str4 += '<div class="l h1">'
						str4 += '<p class="price l">' + shuju4[i].price + '</p>' + '<p class="se l">' + '<b class="sale">' + shuju4[i].sale + '</b>' + '<br/>' + '<b class="delete">' + shuju4[i].old + '</b>' + '</p>'
						str4 += '<img class="im2 l" src= "../img/cccc.jpg"/>'
						str4 += '<p class="inp l">' + '<input class="inp1" data1id="' + shuju4[i].id + '" type="button" value="立即购买">' +
							'<input class="inp2" dataid = "' + shuju4[i].id + '" type="button" value="加入购物车">' + '</p>'
						str4 += '</div>'

						/****************加载同类商品**********************/

						for (var j = 0; j < 4; j++) {
							//找到四个同类商品
							var num = Math.floor(Math.random() * shuju4.length) //shuju4.length 为json数据中当前data1的个数	
							var numm = Math.floor(Math.random() * 1000) //用来模拟购买人数
								//strr4[j] = '<li class="l"><img class="im" src= "'+"../"+shuju4[num].img+'"/><a class="name" href="javascript:;">'+shuju4[num].name+'</a><div>'+'<span class="sp1 l">'+shuju4[num].price+'</span>'+'<span class="sp2 r"><b></b>人已购买</span>'+'</div></li>'
								//这两种方法都可以
							strr4.push('<li class="p' + j + ' l"><img class="im" src= "' + "../" + shuju4[num].img + '"/><a class="name" href="javascript:;">' + shuju4[num].name + '</a><div class="box"><span class="sp1 l">' + shuju4[num].price + '</span>' + '<span class="sp2 r"><b>' + Math.floor(Math.random() * 1000) + '</b><i>人已购买</i></span></div></li>')
						}

						/****************截取json字符串**********************/
						//					var price = shuju4[i].price.substring(1,3)//由￥69.00变成69，在Number变成数字69
						var old = shuju4[i].old.substring(1, 4)
							//					alert(old)
							//					alert(Number(shuju4[i].old.substring(1,4))-Number(shuju4[i].price.substring(1,4)))//将字符串截取出来变成数字
						$("#_middle .ps ul").find("li").eq(0).append('<p>' + shuju4[i].old.substring(0, 4) + '</p>') //old price
						$("#_middle .ps ul").find("li").eq(1).append(shuju4[i].sale.substring(1, 4)) //折扣
						$("#_middle .ps ul").find("li").eq(2).append(Number(shuju4[i].old.substring(1, 4)) - Number(shuju4[i].price.substring(1, 4))) //差价
						$(".ps i").append(parseInt(shuju4[i].price.substring(1, 4))) //当前价格
						$("#_middle .bott ul").append(strr4) //添加同类商品
							//$("#_middle .bott ul li div").find("b").append(numm)//随机模拟购买人数,必须放添加同类商品后边
						$("#float .hiden .box").append('<ul class="ul2">' + '<li class="st l">' + '<img class="img l" src= "' + "../" + shuju4[i].img + '"/>' +
							'<p class="l">' + shuju4[i].name + '</p>' + '</li>' + '<li class="se l"></li>' + '<li class="th l">' + shuju4[i].price + '</li>' + '<li class="fo l"></li>' + '<li class="l last">删除</li>' + '</ul>')

					}
				}

				$("#_cont .w").prepend(str4) //添加商品栏

				/********************************************************************************************************/
			}
		})

		/********************************************选择购物车后的样式****************************************************/
		$("#float").on("click", ".ul1 li", function() { //点击颜色选项
			$(this).css({
					"border": "1px solid #ff1800"
				}).siblings().not("p").css({
					"border": "1px solid #dedede"
				}) //边框变成红色
			$(this).append('<img class="ed" src="../img/aaaaa.gif"/>').siblings().find("img.ed").hide() //添加已选择标记
			$("#float").css("height", "369px")
			$("#float .ff").css("height", "365px") //盒子高度变长
			$("#float .coun").show() //.coun出现
			$("#float .coun").find(".b2").html($(this).html()) //把当前颜色付给b2
			$("#float .coun").find(".b2").find("img").hide() //	隐藏img小图标
		})
		$("#float").on("click", ".ul2 li", function() { //点击尺寸选项
			$(this).css({
					"border": "1px solid #ff1800"
				}).siblings().not("p").css({
					"border": "1px solid #dedede"
				}) //边框变成红色
			$(this).append('<img class="ed" src="../img/aaaaa.gif"/>').siblings().find("img.ed").hide() //添加已选择标记
			$("#float").css("height", "369px")
			$("#float .ff").css("height", "365px") //盒子高度变长
			$("#float .coun").show() //.coun出现
			$("#float .coun").find(".b3").html($(this).html()) //把当前颜色付给b2
			$("#float .coun").find(".b3").find("img").hide() //	隐藏img小图标
		})
		var count = 1;
		$("#float").on("click", "span.sp1", function() { //数量减减
			count--;
			if (count < 1) {
				count = 1;
			}
			$(this).next().html(count)
			$("#float").css("height", "369px")
			$("#float .ff").css("height", "365px")
			$("#float .coun").show()
			$(".coun .b1").html($(".num .sp2").html())

		})
		$("#float").on("click", "span.sp3", function() { //数量加加
			count++;
			$(this).prev().html(count)
			$("#float").css("height", "369px")
			$("#float .ff").css("height", "365px")
			$("#float .coun").show()
			$(".coun .b1").html($(".num .sp2").html())

		})

		$("#float").on("click", ".tp img", function() { //关闭购物车确定页面
			$("#float").hide()
		})

		$("#_cont").on("click", "input.inp2", function() { //点购物车弹出选择界面
			$("#float").show()
			$("#float").css("height", "369px")
			$("#float .ff").css("height", "365px")
			$("#float .hiden").hide()
		})
		$("#_cont").on("click", "input.inp1", function() { //点购买弹出选择界面
				window.location.href = "pay.html"
			})
			/*****************************点击跳转并保存cookie********************************/
		if (getCookie("n" + dataid) == "") {
			$("#Nav_rignt .pp").html("0")
		} else {
			$("#Nav_rignt .pp").html(getCookie("n" + dataid)) //！！！！！！！！！！要在点击事件之前先获得num的cookie值，这样才不会在刷新的时候全部归零
			$("#header .ppp").html(getCookie("n" + dataid))
		}
		$("#float").on("click", " .bt .inp img.l", function() { // 点击第二次添加购物车
			$("#float").css("height", "582px")
			$("#float .ff").css("height", "586px")
			$("#float .hiden").show().css({
				"margin-top": "25px"
			})

			$("#float .hiden .box").find("li.se").html($("#float .bt .sp2").html() + "件")
				//var con = parseInt($("#float .hiden .box").find("li.se").html()) * parseInt($("#_cont p.price").html().substring(1,6))//显示总价
			$("#float .hiden .box").find("li.fo").html("￥" + parseInt($("#float .hiden .box").find("li.se").html()) * parseInt($("#_cont p.price").html().substring(1, 6)))
			$("#float .hiden .xia").find(".bb1").html($("#float .bt .sp2").html()) //多少件商品
			$("#float .hiden .xia").find(".bb2").html($("#float .hiden .box").find("li.fo").html())
				/*																		//点击删除删除当前商品		//暂时用不到
					$("#float .hiden .box").find("li.last").click(function(){
						
					})*/
				/*********保存cookie*****************/
			var dataid = $("#_cont div .inp2").attr("dataid") /*********自定义属性dataid在上一按钮.inp2中，因为太麻烦就把.inp2的dataid用来传递****************/
			var num = Number($("#float .bt .sp2").html()) //选中多少件
				//console.log(num,dataid) 				//选中多少件,id值
			if (getCookie(dataid)) { //基本上一直执行if
				setCookie(dataid, dataid)
				var oldnum = getCookie("n" + dataid)
				var newnum = Number(oldnum) + Number(num)
					//console.log(oldnum,newnum)		//数据累加
				setCookie("n" + dataid, newnum)
			} else {
				setCookie(dataid, dataid)
				setCookie("n" + dataid, num)
					//alert(dataid)

			}
			console.log(oldnum, newnum)

			//alert(getCookie("n"+dataid))
			/********************************************飞入购物车***************************************************/

			var L = $("#Nav_rignt .pp").offset().left
			var T = $("#Nav_rignt .pp").offset().top
			$("body").append($("#float .bt .inp img.l").clone().css({
				"left": "380px",
				"top": "396px",
				"width": "110px",
				"height": "33px",
				"position": "absolute",
				"z-index": "999"
			}).animate({
				"left": L,
				"top": T,
				"width": "10px",
				"height": "10px"
			}, 2000, function() {
				$(this).hide() //这里不能复制上面的，只能写this，this表示当前克隆的对象，复制的表示重新创建一个一共就有3个了，在animate里写display：none不生效因为display:block到none没有缓冲时间,但写opacity:0却可以
			}))
			var tim = setInterval(run3, 2000)

			function run3() {
				clearInterval(tim) //其实这里最好用setTimeout这样就不用先清除了，如果这里不先清除会有bug,会来回跳newnum的值
				$("#Nav_rignt .pp").html(newnum) //把最新累加的数值都放到购物车里
				$("#Nav_rignt .pp").html(getCookie("n" + dataid)) //！！！！！！！！！！要在点击事件之前先获得num的cookie值，这样才不会在刷新的时候全部归零

			}
			setTimeout(run4, 2900)

			function run4() {
				window.location.href = "gwc.html"
			}

			//alert("添加购物车成功")					//弹出页面后点购物车进入gwc.html

		})

		$("#float").on("click", " .bt .inp img.r", function() { //弹出页面后点快速抢购进入pay.html
				window.location.href = "pay.html"

			})
			/********************************************倒计时***************************************************/

		console.log(run1())
		var timer = setInterval(run, 1000);

		function run() {
			var now = new Date;
			var setTime = new Date(2016, 8, 5, 11, 59, 59);
			var cha = Math.floor(Math.abs(now - setTime) / 1000);
			var day = Math.floor(cha / 86400);
			var hours = Math.floor(cha % 86400 / 3600);
			var minutes = Math.floor(cha % 86400 % 3600 / 60);
			var seconds = cha % 60;
			//console.log(seconds)
			$("#_cont .daojishi").html("<div>" + "<b>" + "仅剩" + "<i>" + day + "</i>" + "天" + "<i>" + hours + "</i>" + "小时" + "<i>" + minutes + "</i>" + "分" + "<i>" + seconds + "</i>" + "</b>" + '<b class="b2"></b>' + "<span>" + "秒" + "</span>" + "</div>") //添加内容      

		}

		var sec = 9
		setInterval(run1, 100)

		function run1() {
			sec--
			if (sec < 0) {
				sec = 9
			}
			$("#_cont .daojishi").find("b.b2").html("<i>" + "." + sec + "</i>") //添加跑秒
		}

	})