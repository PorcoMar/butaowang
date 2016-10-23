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
		//console.log(cookies,arr1,getCookie("n"+cook2[1]))	//arr为传进来的id值，例：31 
		$("#Nav_rignt .pp").html(getCookie("n" + cook2[1])) //！！！！！！！！！！要在点击事件之前先获得num的cookie值，这样才不会在刷新的时候全部归零

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

				console.log(getCookie("singelprice"), getCookie("zongliang"))
					//console.log(getCookie("heji"),getCookie("zongliang"))
					/******************************for1***********************************************/
				for (var i in arr1) {
					for (var j in mag1) {
						//console.log(mag1[j].id,arr[i])

						if (arr1[i] == mag1[j].id) {
							//给ul2追加内容//给li添加数量、优惠、总价
							var chajia1 = (Number(mag1[j].old.substring(1, 6)) - Number(mag1[j].price.substring(1, 6))) * getCookie("n" + mag1[j].id);
							var yichajia1 = (Number(mag1[j].old.substring(1, 6)) - Number(mag1[j].price.substring(1, 6))) * 1;
							$("#big .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag1[j].img + '"><p class="l">' + mag1[j].name + '</p></li><li class="se l">' + getCookie("n" + mag1[j].id) + '</li><li class="th l">' + mag1[j].price + '</li><li class="fo l"></li></ul>')

							var con1 = parseInt(getCookie("n" + mag1[j].id)) * parseInt($(".ul2 .th").html().substring(1, 6))
							$("#big .ul2").eq(0).find("li.fo").html("￥" + con1) //总价	
								//					allprice += Number($("#big .ul2").eq(0).find("li.fo").html().substring(1,6))
								//					$("#big").find("b.bb2").html("￥"+allprice)
								//					$("#big").find(".bt3 b").html("￥"+allprice)
							$("#big").find("b.bb2").html("￥" + getCookie("heji"))
							$("#big").find(".bt3 b").html("￥" + getCookie("heji"))

						}
					}
				}

				/******************************for2***********************************************/
				for (var i in arr2) {
					for (var j in mag2) {
						//console.log(mag2[j].id,arr[i])
						if (arr2[i] == mag2[j].id) {
							//给ul2追加内容//给li添加数量、优惠、总价
							var chajia2 = (Number(mag2[j].old.substring(1, 6)) - Number(mag2[j].price.substring(1, 6))) * getCookie("n" + mag2[j].id);
							var yichajia2 = (Number(mag2[j].old.substring(1, 6)) - Number(mag2[j].price.substring(1, 6))) * 1;
							$("#big .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag2[j].img + '"><p class="l">' + mag2[j].name + '</p></li><li class="se l">' + getCookie("n" + mag2[j].id) + '</li><li class="th l">' + mag2[j].price + '</li><li class="fo l"></li></ul>')

							var con2 = parseInt(getCookie("n" + mag2[j].id)) * parseInt($(".ul2 .th").html().substring(1, 6))

							$("#big .ul2").eq(0).find("li.fo").html("￥" + con2) //总价	
							$("#big").find("b.bb2").html("￥" + getCookie("heji"))
							$("#big").find(".bt3 b").html("￥" + getCookie("heji"))
						}
					}
				}

				/******************************for3***********************************************/
				for (var i in arr3) {
					for (var j in mag3) {
						//console.log(mag3[j].id,arr[i])

						if (arr3[i] == mag3[j].id) {
							//给ul2追加内容//给li添加数量、优惠、总价
							$("#big .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag3[j].img + '"><p class="l">' + mag3[j].name + '</p></li><li class="se l">' + getCookie("n" + mag3[j].id) + '</li><li class="th l">' + mag3[j].price + '</li><li class="fo l"></li></ul>')

							var con3 = parseInt(getCookie("n" + mag3[j].id)) * parseInt($(".ul2 .th").html().substring(1, 6))

							$("#big .ul2").eq(0).find("li.fo").html("￥" + con3) //总价	
							$("#big").find("b.bb2").html("￥" + getCookie("heji"))
							$("#big").find(".bt3 b").html("￥" + getCookie("heji"))
						}
					}
				}

				/******************************for4**********************************************/
				for (var i in arr4) {
					for (var j in mag4) {
						//console.log(mag4[j].id,arr[i])

						if (arr4[i] == mag4[j].id) {
							//给ul2追加内容//给li添加数量、优惠、总价
							$("#big .ul1").after('<ul class="ul2"><li class="st l"><img class="img l" src="' + "../" + mag4[j].img + '"><p class="l">' + mag4[j].name + '</p></li><li class="se l">' + getCookie("n" + mag4[j].id) + '</li><li class="th l">' + mag4[j].price + '</li><li class="fo l"></li></ul>')

							var con4 = parseInt(getCookie("n" + mag4[j].id)) * parseInt($(".ul2 .th").html().substring(1, 6))

							$("#big .ul2").eq(0).find("li.fo").html("￥" + con4) //总价	
							$("#big").find("b.bb2").html("￥" + getCookie("heji"))
							$("#big").find(".bt3 b").html("￥" + getCookie("heji"))
						}
					}
				}

			}
		})
		$("#seach .st").click(function(){
			window.location.href ="../index.html"
		})
	})