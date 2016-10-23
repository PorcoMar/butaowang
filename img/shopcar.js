function shopCar_add(obj,team_id,sku_id){
	var quantity = $(obj).val();
	if(quantity<1){
		alert('数量必须大于0');
		return false;
	}
	var team_id = parseInt(team_id);
	var sku_id = $('#'+sku_id).val();
	if(isNaN(team_id) || !team_id){
		alert('项目错误!');
		return false;
	}
	if(sku_id<1 && $('.select_more #color').length>0){
		alert('请选择项目属性');
		return false;
	}
	X.get('/ajax/shopcar.php?'+$.param({'action':"plus",team_id:team_id,sku_id:sku_id,quantity:quantity}));
	quantity = parseInt(quantity);
	quantity = parseInt($("#header_cart").html()) + quantity;
	/*$("#header_cart").html(quantity);
	$("#BarCartNo").html(quantity);*/
	alert("添加购物车成功");
	window.location.href="/shopcar/";
	return true;
}

function shopping_cart_buynow(obj,team_id,sku_id){
	var quantity = $(obj).val();
	var team_id = parseInt(team_id);
	var sku_id = $('#'+sku_id).val();
	X.get('/ajax/shopcar.php?'+$.param({'action':"quickbuy",team_id:team_id,sku_id:sku_id,quantity:quantity}));
	window.location.href="/shopcar/confirm.php?id="+team_id;
}

function shopcar_del(team_id,sku_id,updater){
	X.get('/ajax/shopcar.php?'+$.param({'action':"del",team_id:team_id,sku_id:sku_id,updater:updater}));
}

function shopCar(teamid){
	var teamid = 'undefined' == typeof teamid ? 0 : parseInt(teamid);
	if(isNaN(teamid) || !teamid){
		return false;
	}
	window.location.href="/shopcar/confirm.php?id="+teamid;
}

function open_shopcar(teamid){
	X.get('/ajax/shopcar.php?action=addShopCar&id='+teamid);
}

function getCurrentList(updater){	
	X.get('/ajax/shopcar.php?action=getList&updater='+updater);
}

function addshopresult(message){
	X.get('/ajax/shopcar.php?action='+message);
}

//minNumber最小的数
//maxNumber最大的数
//multiple倍数
function minusPlusNumber(name,current_number,maxNumber,minNumber,multiple){
	this.name = name || 'shopcar';
	this.current_number = current_number*1 || 1;
	this.maxNumber = maxNumber*1 || 0;
	this.minNumber = minNumber*1 || 0;
	this.per_number = 0;
	this.multiple = multiple*1 || 1;
	this.team_id = 0;
	this.sku_id = 0;
	this.updater = '';
	this.set=function(){
		var q = this.html_input.val()*1;
		if(isNaN(q)){
			return;
		}
		if(this.team_id < 1 || q< 1 || this.updater==''){
			return ;
		}
		X.get('/ajax/new/shopcar.php?'+$.param({'action':"set",team_id:this.team_id,sku_id:this.sku_id,quantity:this.html_input.val(),updater:this.updater}));
	}
	this.refresh=function(){
		var q = this.html_input.val()*1;
		if(isNaN(q)){
			return;
		}
		if(this.team_id < 1 || q< 1 || this.updater==''){
			return ;
		}
		X.get('/ajax/new/shopcar.php?'+$.param({'action':"set",refresh:1,team_id:this.team_id,sku_id:this.sku_id,quantity:this.html_input.val(),updater:this.updater}));
	}
	this.auto_set = 0;
	this.auto_refresh = 0;
	this.input_change = function(number){
		$.get('/ajax/shopcar.php?action=change_number&id='+this.team_id+'&sukid='+this.sku_id+'&quantity='+number,'',function(res){
			if(res != 'error'){
				var arr=res.split('@');
        		$("#total_quantity").html(arr[0]);
        		$("#money"+arr[3]).html('￥'+arr[1]);
        		var total_money = parseFloat(arr[2]);
        		$("#total_money").html('￥'+total_money);
			}
		});
	};
	
	this.action=[];
	
	var that = this;
	var this_minus = this.html_minus=$('<input type="button" class="reduce" value="-" />');
	var this_input = this.html_input=$('<input class="input_4" type="text" name="'+this.name+'" />');
	var this_plus = this.html_plus=$('<input type="button" class="add" value="+" />');	
	
	this.html_input.val(this.current_number);
	
	this.show=function(wrapid){
		$('#'+wrapid).append(this.html_minus).append(this.html_input).append(this.html_plus);
		this.html_input.change(function(){
			var that_val = this_input.val()*1;
			if(isNaN(that_val)){
				this_input.val(1);
				return;
			}
			if(that_val<1){
				this_input.val(1);
			}else if(that.maxNumber && that_val>that.maxNumber){
				this_input.val(that.maxNumber);
			}
			if(that.auto_set){
				that.set();
			}
			if(that.auto_refresh){
				that.refresh();
			}
			that.input_change(this_input.val());
		});
		this.html_minus.bind('click',function(){
			var that_val = this_input.val();
			if(that_val<=1){
				return;
			}else if(that.minNumber && that_val<=that.minNumber){
				this_input.val(that.minNumber*1);
				alert('不能少于'+that.minNumber);
				return;
			}else{
				this_input.val(that_val*1-1);
				this_input.trigger('change');
			}
		});
		this.html_plus.bind('click',function(){
			var that_val = this_input.val();
			if(that.per_number>0 && that_val>=that.per_number ){
				alert('限购'+that.per_number+'件');
				return;
			}else if(that.maxNumber && that_val>=that.maxNumber){
				alert('不能超过'+that.maxNumber);
				return;
			}else if(that.minNumber && that_val<that.minNumber){
				this_input.val(that.minNumber*1);
				alert('不能少于'+that.minNumber);
				return;
			}else{
				this_input.val(that_val*1+1);
				this_input.trigger('change');
			}
		});
	}
	var _these_action = ['input_change'];
	this.add_action=function(item,value){
		if('undefined' == typeof item){
			return;
		}
		if(_these_action.indexOf(item)!==-1 && 'function' == typeof value){
			this.action[item]=value;
		}
	}
}
