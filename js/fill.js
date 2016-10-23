$(function(){
//已有账户登陆
$("#fill .nav").find("a").eq(1).click(function(){
	window.location.href = "login.html";
})
$("#fill ul").find("li").find("input").val("")//刷新清空表格

var count = 0; //记录判断成功个数，count=4登陆
/********************邮箱注册失焦**********************/
var emailStr = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
$("#fill ul").find("li").eq(0).find("input").blur(function(){
	var val = $(this).val()
	var length = $(this).parent().index()
	console.log(val,length)
	$("#fill ul").find("li").eq(0).find("span").html("请输入正确的邮箱")
	if (emailStr.test(val)) {
		$("#fill ul").find(".yes1").show()
		$("#fill ul").find(".yes11").hide()
		count++
	}else{
		$("#fill ul").find("li").eq(0).find("span").show()
		$("#fill ul").find(".yes1").hide()
		$("#fill ul").find(".yes11").show()
	}
	if(val==""){
		$("#fill ul").find("li").eq(0).find("span").html("邮箱不能为空")
	}
})
/********************邮箱注册得焦**********************/
$("#fill ul").find("li").eq(0).find("input").focus(function(){
		$("#fill ul").find("li").eq(0).find("span").hide()
})
/********************账户注册失焦**********************/
var nameStr = /^\w{4,16}$/;
$("#fill ul").find("li").eq(1).find("input").blur(function(){
	var val = $(this).val()
	$("#fill ul").find("li").eq(1).find("span").html("用户名为4-16个数字")
	if (nameStr.test(val)) {
		$("#fill ul").find(".yes2").show()
		$("#fill ul").find(".yes22").hide()
		count++
	}else{
		$("#fill ul").find("li").eq(1).find("span").show()
		$("#fill ul").find(".yes2").hide()
		$("#fill ul").find(".yes22").show()
	}
	if(val==""){
		$("#fill ul").find("li").eq(1).find("span").html("账户名不能为空")
	}
})
/********************邮箱注册得焦**********************/
$("#fill ul").find("li").eq(1).find("input").focus(function(){
		$("#fill ul").find("li").eq(1).find("span").hide()
})


/********************密码注册失焦**********************/
var passString = /^([A-Z]|[a-z]|[0-9]){6,20}$/;
$("#fill ul").find("li").eq(2).find("input").blur(function(){
	var val = $(this).val()
	$("#fill ul").find("li").eq(2).find("span").html("为了用户安全，建议至少为6个字符以上")
	if (passString.test(val)) {
		$("#fill ul").find(".yes3").show()
		$("#fill ul").find(".yes33").hide()
		count++
	}else{
		$("#fill ul").find("li").eq(2).find("span").show()
		$("#fill ul").find(".yes3").hide()
		$("#fill ul").find(".yes33").show()
	}
	if(val==""){
		$("#fill ul").find("li").eq(2).find("span").html("密码不能为空")
	}
})
/********************邮箱注册得焦**********************/
$("#fill ul").find("li").eq(2).find("input").focus(function(){
		$("#fill ul").find("li").eq(2).find("span").hide()
})


/********************确认密码注册失焦**********************/
$("#fill ul").find("li").eq(3).find("input").blur(function(){
	var val = $(this).val()
	var val2 = $("#fill ul").find("li").eq(2).find("input").val()
	$("#fill ul").find("li").eq(3).find("span").html("与上次输入的密码不符")
	if (val ==val2 &&val2 !="") {
		$("#fill ul").find(".yes4").show()
		$("#fill ul").find(".yes44").hide()
		count++
	}else{
		$("#fill ul").find("li").eq(3).find("span").show()
		$("#fill ul").find(".yes4").hide()
		$("#fill ul").find(".yes44").show()
	}
	if(val==""){
		$("#fill ul").find("li").eq(3).find("span").html("密码不能为空")
	}
})
/********************确认密码注册得焦**********************/
$("#fill ul").find("li").eq(3).find("input").focus(function(){
		$("#fill ul").find("li").eq(3).find("span").hide()
})
/********************注册提交**********************/
$("#fill ul").find("li").eq(5).find("img").click(function(){
	for(var i=0;i<4;i++){
		if($("#fill ul").find("li").eq(i).find("input").val()==""){
				$("#fill ul").find("li").eq(i).find("input").focus()	
		}
	}
	//alert(count)
	if(count>=4){
			var email = $(".email").val()
			var name = $(".name").val()
			var pass = $(".pass").val()
			//var day = setCookie(1)
			document.cookie= "name="+name+";path=/";
			document.cookie= "pass="+pass+";path=/";
			document.cookie= "email="+email+";path=/";
		//存cookie
			document.cookie = "a="+true+";path=/"
			window.location.href = "../indexed.html";
			count = 0;						//cout归零防止count无限加大
			$("#fill ul img").not("img.mm").hide()	//回来的时候也要清空img（勾勾叉叉）
	}else{
		//count = 0;						//cout归零防止count无限加大
	}
	
})



























})