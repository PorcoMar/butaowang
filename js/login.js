$(function(){
	
$("#login .nav").find("a").eq(1).click(function(){
	window.location.href = "fill.html";
})
$(".content .err").hide()
$(".content ul li").eq(0).find("input").val("")	//清空input
$(".content ul li").eq(1).find("input").val("")
$(".content ul li").find("input").focus(function(){//失焦清空
	$(this).val("")
})
$(".content ul").find(".li4").find(".inp4").click(function(){
	var name=$(".name").val()
	var email=$(".email").val()
	var pass=$(".pass").val()
	
	if(name==getCookie("name")&&pass==getCookie("pass")){
		alert("登陆成功")
		setCookie("a",true)
		window.location.href="../indexed.html"
	}else if(email==getCookie("email")&&pass==getCookie("pass")){
		alert("登陆成功")
		setCookie("a",true)
		window.location.href="../indexed.html"		
	}else{
		$(".content .err").show()
		setCookie("a",false)
	}


})















})