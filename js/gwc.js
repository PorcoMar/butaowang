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
			})
			/*************************************获得cookie*********************************************************/
		console.log(getCookie("name"), getCookie("pass"), getCookie("email"), getCookie("a"))
		if (getCookie("a")) {
			$("#header .left .se").html("您好！" + getCookie("name") + "欢迎来到" + "<a href='javascript:;'>" + "步淘生活商城" + "</a><a href='javascript:;'>" + "&nbsp;退出" + "</a>")
		}

		/*****************************cookie传递***********************************************/

		var cookies = document.cookie; //alert(cookies) n7 =7; 7=7
		var cook = cookies.split("; ")
			//console.log(cookies,cook)
		var arr1 = [];
		var arr2 = [];
		var arr3 = [];
		var arr4 = [];
		for (var i in cook) {
			var cook2 = cook[i].split("=")
				//console.log(cook2)
			var num = cook2[0] * 1; //转为数字，相当于Number(cook2[0])
			//console.log(typeof (num),typeof (cook2),typeof (cook2[0]))//number object string
			if (!isNaN(num)) {
				arr1.push(cook2[1]) //选中后的index在arr里
				arr2.push(cook2[1]) //选中后的index在arr里
				arr3.push(cook2[1]) //选中后的index在arr里
				arr4.push(cook2[1]) //选中后的index在arr里
			}
		}
		console.log(cookies, arr1, getCookie("n" + cook2[1])) //arr为传进来的id值，例：31 
			//$("#Nav_rignt .pp").html(getCookie("n"+cook2[1]))	//！！！！！！！！！！要在点击事件之前先获得num的cookie值，这样才不会在刷新的时候全部归零

		/******************************ajax***********************************************/

		$.ajax({
				url: "../json/index.json",
				success: function(Date) {
					var mag1 = Date.data1
					var mag2 = Date.data2
					var mag3 = Date.data3
					var mag4 = Date.data4

					var zongjia1 = 0
					var zongjian1 = 0
					var zongjia2 = 0
					var zongjian2 = 0
					var zongjia3 = 0
					var zongjian3 = 0
					var zongjia4 = 0
					var zongjian4 = 0

					var zongjia = 0
					var zongjian = 0

					/******************************for1***********************************************/
					for (var i in arr1) {
						for (var j in mag1) {
							//console.log(mag1[j].id,arr[i])

							if (arr1[i] == mag1[j].id) {
								//给ul2追加内容//给li添加数量、优惠、总价
								var chajia1 = (Number(mag1[j].old.substring(1, 6)) - Number(mag1[j].price.substring(1, 6))) * getCookie("n" + mag1[j].id);
								var yichajia1 = (Number(mag1[j].old.substring(1, 6)) - Number(mag1[j].price.substring(1, 6))) * 1;		//一件的差价
								$("#big .content .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag1[j].img + '"><p class="l">' + mag1[j].name + '</p></li><li class="se l"><div class="num"><span class="sp1 l">-</span><span class="sp2 l">' + getCookie("n" + mag1[j].id) + '</span><span class="sp3 l">+</span><span class="sp4 l">件</span></div></li><li class="th l">' + mag1[j].price + '</li><li class="fo l" youhui="' + yichajia1 + '"></li><li class="ff l"></li><li class="l last" dataid = "' + mag1[j].id + '">删除</li></ul>')//在差价标签里自定义一个属性
								$("#big .content .ul2").eq(0).find("li.fo").html("￥" + getCookie("n" + mag1[j].id) * yichajia1) //差价

								var con1 = parseInt($(".sp2").html()) * parseInt($(".ul2 .th").html().substring(1, 6))
								$("#big .content .ul2").eq(0).find("li.ff").html("￥" + con1) //总价				
								console.log(j, $(".content").html())
									//??????????????????????????????????????????????????????????????????????为什么要加eq(0)才对?????????????????????
									//这一段有错误
									//					$("#big .content .ul1").after('<ul class="ul2">'+'<li class="st l">'+'<img class="img l" src= "'+"../"+mag1[i].img+'"/>'+
									//					'<p class="l">'+mag1[i].name+'</p>'+'</li>'+'<li class="se l"></li>'+'<li class="th l">'+mag1[i].price+'</li>'
									//					+'<li class="fo l"></li>'+'</li>'+'<li class="ff l"></li>'+'<li class="l last">删除</li>'+'</ul>')
									//								
									//												

								//					//给ul3追加内容
								zongjian1 += Number($("span.sp2").html())
								zongjian = zongjian1 + zongjian2 + zongjian3 + zongjian4 //必须这么写在加载后面几栏时才不会只统计当前的
								$("#big .content").find("b.bb1").html(zongjian)

								zongjia1 += Number($("li.ff").html().substring(1, 6))
								zongjia = zongjia1 + zongjia2 + zongjia3 + zongjia4
								$(".content").find("b.bb2").html("￥" + zongjia)
							}
						}
					}
					document.cookie = "zongjian=" + zongjian + ";path=/";
					document.cookie = "zongjia=" + zongjia + ";path=/";
					/******************************for2***********************************************/
					for (var i in arr2) {
						for (var j in mag2) {
							//console.log(mag2[j].id,arr2[i])

							if (arr2[i] == mag2[j].id) {
								//给ul2追加内容//给li添加数量、优惠、总价
								var chajia2 = (Number(mag2[j].old.substring(1, 6)) - Number(mag2[j].price.substring(1, 6))) * getCookie("n" + mag2[j].id);
								var yichajia2 = (Number(mag2[j].old.substring(1, 6)) - Number(mag2[j].price.substring(1, 6))) * 1;
								$("#big .content .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag2[j].img + '"><p class="l">' + mag2[j].name + '</p></li><li class="se l"><div class="num"><span class="sp1 l">-</span><span class="sp2 l">' + getCookie("n" + mag2[j].id) + '</span><span class="sp3 l">+</span><span class="sp4 l">件</span></div></li><li class="th l">' + mag2[j].price + '</li><li class="fo l" youhui="' + yichajia2 + '"></li><li class="ff l"></li><li class="l last" dataid = "' + mag2[j].id + '">删除</li></ul>')

								$("#big .content .ul2").eq(0).find("li.fo").html("￥" + getCookie("n" + mag2[j].id) * yichajia2) //差价

								var con2 = parseInt($(".sp2").html()) * parseInt($(".ul2 .th").html().substring(1, 6))
								$("#big .content .ul2").eq(0).find("li.ff").html("￥" + con2) //总价				
								console.log(j, $(".content").html())
									//??????????????????????????????????????????????????????????????????????为什么要加eq(0)才对?????????????????????
									//这一段有错误
									//					$("#big .content .ul1").after('<ul class="ul2">'+'<li class="st l">'+'<img class="img l" src= "'+"../"+mag2[i].img+'"/>'+
									//					'<p class="l">'+mag2[i].name+'</p>'+'</li>'+'<li class="se l"></li>'+'<li class="th l">'+mag2[i].price+'</li>'
									//					+'<li class="fo l"></li>'+'</li>'+'<li class="ff l"></li>'+'<li class="l last">删除</li>'+'</ul>')
									//								
									//												

								//					//给ul3追加内容
								zongjian2 += Number($("span.sp2").html())
								zongjian = zongjian1 + zongjian2 + zongjian3 + zongjian4
								$("#big .content").find("b.bb1").html(zongjian)

								zongjia2 += Number($("li.ff").html().substring(1, 6))
								zongjia = zongjia1 + zongjia2 + zongjia3 + zongjia4
								$(".content").find("b.bb2").html("￥" + zongjia)
							}
						}
					}
					document.cookie = "zongjian=" + zongjian + ";path=/";
					document.cookie = "zongjia=" + zongjia + ";path=/";

					//	$("#Nav_rignt .pp").html(getCookie(num))		//！！！！！！！！！！要在点击事件之前先获得num的cookie值，这样才不会在刷新的时候全部归零
					/******************************for3***********************************************/
					for (var i in arr3) {
						for (var j in mag3) {
							//console.log(mag3[j].id,arr3[i])

							if (arr3[i] == mag3[j].id) {
								//给ul2追加内容//给li添加数量、优惠、总价
								var chajia3 = (Number(mag3[j].old.substring(1, 6)) - Number(mag3[j].price.substring(1, 6))) * getCookie("n" + mag3[j].id);
								var yichajia3 = (Number(mag3[j].old.substring(1, 6)) - Number(mag3[j].price.substring(1, 6))) * 1;
								$("#big .content .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag3[j].img + '"><p class="l">' + mag3[j].name + '</p></li><li class="se l"><div class="num"><span class="sp1 l">-</span><span class="sp2 l">' + getCookie("n" + mag3[j].id) + '</span><span class="sp3 l">+</span><span class="sp4 l">件</span></div></li><li class="th l">' + mag3[j].price + '</li><li class="fo l" youhui="' + yichajia3 + '"></li><li class="ff l"></li><li class="l last" dataid = "' + mag3[j].id + '">删除</li></ul>')

								$("#big .content .ul2").eq(0).find("li.fo").html("￥" + getCookie("n" + mag3[j].id) * yichajia3) //差价

								var con3 = parseInt($(".sp2").html()) * parseInt($(".ul2 .th").html().substring(1, 6))
								$("#big .content .ul2").eq(0).find("li.ff").html("￥" + con3) //总价				
								console.log(j, $(".content").html())
									//??????????????????????????????????????????????????????????????????????为什么要加eq(0)才对?????????????????????
									//这一段有错误
									//					$("#big .content .ul1").after('<ul class="ul2">'+'<li class="st l">'+'<img class="img l" src= "'+"../"+mag3[i].img+'"/>'+
									//					'<p class="l">'+mag3[i].name+'</p>'+'</li>'+'<li class="se l"></li>'+'<li class="th l">'+mag3[i].price+'</li>'
									//					+'<li class="fo l"></li>'+'</li>'+'<li class="ff l"></li>'+'<li class="l last">删除</li>'+'</ul>')
									//								
									//												

								//					//给ul3追加内容
								zongjian3 += Number($("span.sp2").html())
								zongjian = zongjian1 + zongjian2 + zongjian3 + zongjian4
								$("#big .content").find("b.bb1").html(zongjian)

								zongjia3 += Number($("li.ff").html().substring(1, 6))
								zongjia = zongjia1 + zongjia2 + zongjia3 + zongjia4
								$(".content").find("b.bb2").html("￥" + zongjia)
							}
						}
					}
					document.cookie = "zongjian=" + zongjian + ";path=/";
					document.cookie = "zongjia=" + zongjia + ";path=/";

					//	$("#Nav_rignt .pp").html(getCookie(num))		//！！！！！！！！！！要在点击事件之前先获得num的cookie值，这样才不会在刷新的时候全部归零
					/******************************for4***********************************************/
					for (var i in arr4) {
						for (var j in mag4) {
							//console.log(mag4[j].id,arr4[i])

							if (arr4[i] == mag4[j].id) {
								//给ul2追加内容//给li添加数量、优惠、总价
								var chajia4 = (Number(mag4[j].old.substring(1, 6)) - Number(mag4[j].price.substring(1, 6))) * getCookie("n" + mag4[j].id);
								var yichajia4 = (Number(mag4[j].old.substring(1, 6)) - Number(mag4[j].price.substring(1, 6))) * 1;
								$("#big .content .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag4[j].img + '"><p class="l">' + mag4[j].name + '</p></li><li class="se l"><div class="num"><span class="sp1 l">-</span><span class="sp2 l">' + getCookie("n" + mag4[j].id) + '</span><span class="sp3 l">+</span><span class="sp4 l">件</span></div></li><li class="th l">' + mag4[j].price + '</li><li class="fo l" youhui="' + yichajia4 + '"></li><li class="ff l"></li><li class="l last" dataid = "' + mag4[j].id + '">删除</li></ul>')

								$("#big .content .ul2").eq(0).find("li.fo").html("￥" + getCookie("n" + mag4[j].id) * yichajia4) //差价

								var con4 = parseInt($(".sp2").html()) * parseInt($(".ul2 .th").html().substring(1, 6))
								$("#big .content .ul2").eq(0).find("li.ff").html("￥" + con4) //总价				
								console.log(j, $(".content").html())
									//??????????????????????????????????????????????????????????????????????为什么要加eq(0)才对?????????????????????
									//这一段有错误
									//					$("#big .content .ul1").after('<ul class="ul2">'+'<li class="st l">'+'<img class="img l" src= "'+"../"+mag4[i].img+'"/>'+
									//					'<p class="l">'+mag4[i].name+'</p>'+'</li>'+'<li class="se l"></li>'+'<li class="th l">'+mag4[i].price+'</li>'
									//					+'<li class="fo l"></li>'+'</li>'+'<li class="ff l"></li>'+'<li class="l last">删除</li>'+'</ul>')
									//								
									//												

								//					//给ul3追加内容
								zongjian4 += Number($("span.sp2").html())
								zongjian = zongjian1 + zongjian2 + zongjian3 + zongjian4
								$("#big .content").find("b.bb1").html(zongjian)

								zongjia4 += Number($("li.ff").html().substring(1, 6))
								zongjia = zongjia1 + zongjia2 + zongjia3 + zongjia4
								$(".content").find("b.bb2").html("￥" + zongjia)
							}
						}
					}

					$("#Nav_rignt .pp").html(zongjian) //！！！！！！！！！！加总件数比较好，如果是getCookie("n"+cook2[1]进来不会是已经统计好的值
					$("#header .sp").html(zongjian)
						//setCookie("zongjian",zongjian)	//因为路径不同，所以必须用这种格式
					document.cookie = "zongjian=" + zongjian + ";path=/";
					document.cookie = "zongjia=" + zongjia + ";path=/";
				}
			})
			/******************************减减***********************************************/

		$("#big").on("click", "span.sp1", function() { //因为sp1/sp2/sp4都是通过ajax加载，如果要写在外面，就必须用on写法，如果写在success里边则可以用常规写法

			$(this).next().html($(this).next().html() - 1) //判断当值小于1时等于1然后继续点击失效
				//!!!!!!!!!!!!!!!!!!!!!!!!!必须先写减一再判断，要不然会一直徘徊在01之间
			if ($(this).next().html() < 1) {
				$(this).next().html("1")
				return;
			}
			var price = parseInt($(this).next().html()) * parseInt($(this).parent().parent().next().html().substring(1, 6))
			$(this).parent().parent().next().next().next().html("￥" + price)
				//var saled =Number($(this).parent().parent().next().next().html().substring(1,6))- Number($(this).parent().parent().next().next().html().substring(1,6)/$(this).next().html())
													//*******************************计算优惠
			var newspnum = $(this).next().text() 	//找到件数
			var newyouhui = $(this).parents(".se").siblings(".fo").attr("youhui")	//找到一件的优惠，这个自定义属性是在定义差价标签里写的
			$(this).parents(".se").siblings(".fo").html("￥" + newspnum * newyouhui)

			//*******************************减减.ul3总价合计
			var danjiahe = 0;
			var heji = Number($(".content").find("b.bb2").html().substring(1, 6)) - parseInt($(this).parent().parent().next().html().substring(1, 6))
			for (var i = 0; i < $(".content").find(".ul2").size(); i++) { //找到ul2的个数
				danjiahe += Number($(".ul2").eq(i).find(".th").html().substring(1, 6)) //把所有ul的中的单价和相加	
			}
			if (heji <= danjiahe) { //判断不能小于每件商品一件时的总价格
				heji = danjiahe
			} else {
				$(".content").find("b.bb2").html("￥" + heji) //***********减后的价格和
			}

			//*****************************************.ul3数量合计
			if ($(".content").find("b.bb1").html() <= $(".content").find(".ul2").size()) {
				$(".content").find("b.bb1").html($(".content").find(".ul2").size())
			} else {
				var zongliang = Number($(".content").find("b.bb1").html()) - 1
				$(".content").find("b.bb1").html(zongliang) //************减后的数量和
				$("#Nav_rignt .pp").html(zongliang)
				$("#header .sp").html(zongliang)
			}

			document.cookie= "zongliang="+zongliang+";path=/";	//
			//document.cookie= "heji="+heji+";path=/";				//不同路径用document.cookie
			setCookie("heji", heji) //************************储存总价格(相同路径用setcookie)

			var singelprice = 0
			singelprice += $(this).next().html() //储存每点击一下-时的cookie
			setCookie("singelprice", singelprice)
			document.cookie = "singelprice=" + singelprice + ";path=/";
		})
		$("#big").on("click", "span.sp3", function() { //********************************************加加
			$(this).prev().html((Number($(this).prev().html()) + 1))
			var price = parseInt($(this).prev().html()) * parseInt($(this).parent().parent().next().html().substring(1, 6))
			$(this).parent().parent().next().next().next().html("￥" + price)
				//var saled =Number($(this).parent().parent().next().next().html().substring(1,6))- Number($(this).parent().parent().next().next().html().substring(1,6)/$(this).next().html())

			var newspnum = $(this).prev().text()
			var newyouhui = $(this).parents(".se").siblings(".fo").attr("youhui")
			$(this).parents(".se").siblings(".fo").html("￥" + newspnum * newyouhui)

			//*******************************加后.ul3总价合计
			var heji = Number($(".content").find("b.bb2").html().substring(1, 6)) + parseInt($(this).parent().parent().next().html().substring(1, 6))
			$(".content").find("b.bb2").html("￥" + heji) //************加后的价格和

			var zongliang = Number($(".content").find("b.bb1").html()) + 1
			$(".content").find("b.bb1").html(zongliang) //************加后的数量和
			$("#Nav_rignt .pp").html(zongliang)
			$("#header .sp").html(zongliang)

			document.cookie= "zongliang="+zongliang+";path=/";	
			//document.cookie= "heji="+heji+";path=/";			//储存总价格
			setCookie("heji", heji)

			var singelprice = 0
			singelprice += $(this).next().html()
			setCookie("singelprice", singelprice) //储存每点击一下+时的cookie
			document.cookie = "singelprice=" + singelprice + ";path=/";

		})

		$(".content").on("click", "li.last", function() { //点击删除购物车，包含cookie
			$(this).parent().hide()
			var dataid = $(this).attr("dataid")//jq获取自定义属性方法
			deleteCookie(dataid)
			deleteCookie("n" + dataid)
		})

		$(".botto .if1").click(function() {
			window.location.href = "../index.html"
		})
		$(".botto .if2").click(function() {
			if (getCookie("name") != "") {
				window.location.href = "pay.html"
			} else {
				window.location.href = "login.html"
			}
		})

	})