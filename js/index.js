$(function(){
		/*************************************hreder滑入滑出效果***************************************/
	//未登录也得左边header
	$(".left li.last").mouseenter(function(){
		$(".left b").show();
		$(".left .pos").show();
		
	});
	$(".left .pos p").mouseenter(function(){
			$(this).css("background","url(img/bbb.jpg)").siblings().css("background","#f0f0f0")
		})

	$(".left .pos").mouseleave(function(){
		$(this).hide();
		$(".left b").hide();
	});
	//登陆和未登录的右边header
/*******我的步淘***********/
	$("#header .right li.se").mouseenter(function(){
		$(".pos1").show();
		$(".pos1 p").css("background","#f0f0f0")
		
	});
	$(".pos1 p").mouseenter(function(){
			$(this).css("background","url(img/bbb.jpg)").siblings().css("background","#f0f0f0")
		})

	$(".pos1").mouseleave(function(){
		$(this).hide();
	});

/******关注我们***********/
$("#header .right li.last").mouseenter(function(){
		$("#header .pos2").show();
		$("#header .pos2 p").css("background","#f0f0f0")
		
});
$("#header .pos2 p").mouseenter(function(){
		$(this).css("background","url(img/bbb.jpg)").siblings().css("background","#f0f0f0")
})
$("#header .pos2").mouseleave(function(){
	$(this).hide();
});

if(getCookie("zongjian")!=""){
	$("#Nav_rignt .pp1").html(getCookie("zongjian"))
	
}else{
	$("#Nav_rignt .pp1").html("0")
}


/*************************************左边右边返回顶部 **********************************************************/
$("#Nav_rignt2 .a6").click(function(){
		$("body,html").animate({
				scrollTop : $("#header").offset().top	//滚动条下滑高度
			},500)
})

$("#returntop .a8").click(function(){
		$("body,html").animate({
				scrollTop : $("#header").offset().top	//滚动条下滑高度
			},500)
})



/*************************************楼梯效果 **********************************************************/
$("#returntop a").click(function(){
	if($(this).index()==0){
	$("body,html").animate({
				scrollTop : $("#seach").eq($(this).index()).offset().top	//滚动条下滑高度
			},500)
		
	}/*else if($(this).index()==7){
	$("body,html").animate({
				scrollTop : $("#header").eq($(this).index()).offset().top	//滚动条下滑高度
			},500)
	}*/else{
	$("body,html").animate({
				scrollTop : $("#content .top").eq($(this).index()-1).offset().top	//滚动条下滑高度
			},500)
	}
	//alert($(this).index())
})


/*************************************content json **********************************************************/
/*******content .con1*********/
$.ajax({
	type:"get",
	url:"json/index.json",
	dataType:"json",
		success:function(mag){
		//console.log(mag) object,object
		var data = mag.data1 //data是json里边的data
		var data2 = mag.data2
		var data3 = mag.data3	
		var data4 = mag.data4
		var data5 = mag.data5
		
		var str =''
		var str2=''
		var str3 = ''
		var str4 = ''
		var str5 = ''
		
		for(var i in data){
			
			str +='<dl class="a'+data[i].id+'">'
			str +='<dt><a href="javascript:;"><img src= "'+data[i].img+'"/></a></dt>'
			str +='<dd class="name">'+'<a href="javascript:;">'+data[i].name+'</a>'+'</dd>'
			str +='<h4>'+'<dd class="price l">'+data[i].price+'</dd>'+'<dd class="se l">'+'<b class="delete">'+data[i].old+'</b>'
			+data[i].sale+'<br/>'+'<strong>'+data[i].product+'</strong >'+'</dd>'+'<input dataid="'+data[i].id+'" type="button" value="立即购买">'+'</h4>'
			str +='</dl>'
			console.log(data[i].id)
		}
		$("#content .con1 .pic").append(str);
/*******content .con2*********/
		for(var i in data2){
			str2 +='<dl class="a'+data2[i].id+'">'
			str2 +='<dt><a href="javascript:;"><img src= "'+data2[i].img+'"/></a></dt>'
			str2 +='<dd class="name">'+'<a href="javascript:;">'+data2[i].name+'</a>'+'</dd>'
			str2 +='<h4>'+'<dd class="price l">'+data2[i].price+'</dd>'+'<dd class="se l">'+'<b class="delete">'+data2[i].old+'</b>'
			+data2[i].sale+'<br/>'+'<strong>'+data2[i].product+'</strong >'+'</dd>'+'<input dataid="'+data2[i].id+'" type="button" value="立即购买">'+'</h4>'
			str2 +='</dl>'
			console.log(data2[i].id,str)
		}
		$("#content .con2 .pic").append(str2);
/*******content .con3*********/
		for(var i in data3){
			str3 +='<dl class="a'+data3[i].id+'">'
			str3 +='<dt><a href="javascript:;"><img src= "'+data3[i].img+'"/></a></dt>'
			str3 +='<dd class="name">'+'<a href="javascript:;">'+data3[i].name+'</a>'+'</dd>'
			str3 +='<h4>'+'<dd class="price l">'+data3[i].price+'</dd>'+'<dd class="se l">'+'<b class="delete">'+data3[i].old+'</b>'
			+data3[i].sale+'<br/>'+'<strong>'+data3[i].product+'</strong >'+'</dd>'+'<input dataid="'+data3[i].id+'" type="button" value="立即购买">'+'</h4>'
			str3 +='</dl>'
			console.log(data3[i].id,str3)
		}
		$("#content .con3 .pic").append(str3);
/*******content .con4*********/
		for(var i in data4){
			str4 +='<dl class="a'+data4[i].id+'">'
			str4 +='<dt><a href="javascript:;"><img src= "'+data4[i].img+'"/></a></dt>'
			str4 +='<dd class="name">'+'<a href="javascript:;">'+data4[i].name+'</a>'+'</dd>'
			str4 +='<h4>'+'<dd class="price l">'+data4[i].price+'</dd>'+'<dd class="se l">'+'<b class="delete">'+data4[i].old+'</b>'
			+data4[i].sale+'<br/>'+'<strong>'+data4[i].product+'</strong >'+'</dd>'+'<input dataid="'+data4[i].id+'" type="button" value="立即购买">'+'</h4>'
			str4 +='</dl>'
			console.log(data4[i].id,str4)
		}
		$("#content .con4 .pic").append(str4);
		
/*******file商品详情***************/
		for(var i in data5){
			str5 +='<ul>'
			str5 +='<li>'
			str5 +='<p>'+data5[i].title+'<p>'
			str5 +='<a href="javascript:;">'+'<img src= "'+data5[i].img+'"/>'+'</a>'
			str5 +='<h2 class="a'+data5[i].id+'">'+'<a href="javascript:;">'+data5[i].sp1+'</a>'+'<a href="javascript:;">'+data5[i].sp2+'</a>'+'<a href="javascript:;">'+data5[i].sp3+'</a>'+'<a href="javascript:;">'+data5[i].sp4+'</a>'+'</h2>'
			str5 +='</li>'
			str5 +='</ul>'
			console.log(data5[i].id,str5)
		}
		$("#file .w").append(str5);
		
	}
})
/*********************************************点击所有跳转记录cookie**************************************************************/
		
		$("#content .pic").on("click","dl",function(){
			var dataid = $(this).find("input").attr("dataid")//只有input里面才有自定义属性dataid,不然是undefinded
			setCookie("dataid",dataid)
			//alert(dataid)
			window.location.href = "html/detail.html"
		})
		

/*************************************轮播图**********************************************************/
	var tab = {
		lunbo:function(options){
			var defults = {
				oli:$("#banner ul li"),
				timer:1500
			}
			
			var opt = $.extend(defults,options)
			var _index = 0;
			var length = opt.oli.size();
			
			setInterval(function(){
				
				_index++;
				if(_index > length-1){//12300
					_index = 0;
				}
				opt.oli.eq(_index).show(1000).siblings().hide(1500);
				//console.log(_index)
			},opt.timer)
		}
	}
	
	
		//调用	
		tab.lunbo({
			oli:$("#banner ul li"),
			timer:2000
		})




/*************************************content移入抖动 和shadow**********************************************************/
$("#content").on("mouseenter","dl",function(){
		$(this).find("dt").animate({"margin-left":"5px","margin-top":"5px"},function(){
			$(this).animate({"margin-left":"-5px","margin-top":"-5px"},function(){
				$(this).animate({"margin-left":"2px","margin-top":"2px"},function(){
					$(this).animate({"margin-left":"-2px","margin-top":"-2px"},function(){
						$(this).animate({"margin-left":"0px","margin-top":"0px"})
					})
				})
			})
		})
		

		$(this).css({"-webkit-box-shadow":"0 0 0 5px #eee","box-shadow":"0 0 0 5px #eee"})
})

$("#content").on("mouseleave","dl",function(){
	$(this).css({"box-shadow":"none"})
})
/*************************************content top li 追随**********************************************************/
$("#content li").mouseenter(function(){
	$(this).find("a").animate({"height":"34px","line-height":"30px"},00).parent().siblings().find("a").animate({"height":"37px","line-height":"37px"},200)
	$(this).find("a").css({"border-bottom":"3px solid red"}).parent().siblings().find("a").css({"border":"0"})
})








})



/*window.onload = function(){

};*/



