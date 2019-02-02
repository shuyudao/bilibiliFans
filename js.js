var uid;
setWidth();
document.getElementById('button').onclick = function(){
	var uid = document.getElementById('uid').value;
	if (uid=='') {
		alert('请填写UP主的UID');
		return false;
	}
	document.getElementById('get_uid').style.opacity = '0';
	document.getElementById('get_uid').style.zIndex = '-1';
	document.getElementById('get_uid').style.display = 'none';
	document.getElementById('fans').style.display = 'block';
	setInterval(function(){getfans(uid)},1000);
	getinfo(uid);
}
function getfans(uid){
	$.ajax({
	    type:"GET",
	    url:"./getfans.php",
	    data:"uid="+uid,
	    success:function(data){
	       var obj = JSON.parse(data);
	       $("#fans_count").html(obj['data']['follower']);
	    }
	});
}

function getinfo(uid){
	$.ajax({
	    type:"GET",
	    url:"./getfans.php",
	    data:"info_uid="+uid,
	    success:function(data){
	       var obj = JSON.parse(data);
	       $("#img").attr('src',obj['data']['face']);
	       $("#name").html(obj['data']['name']);
	       $("#lv").html("LV"+obj['data']['level']);
	       $("#des").html(obj['data']['sign']);
	       $("#b_link").attr('href',"https://space.bilibili.com/"+uid);
	       if (obj['data']['vip']['status']!='1') {
	       	$("#vip").remove();
	       }else{
	       	if (obj['data']['vip']['type']=='1') {
	       		$("#vip").html("大会员");
	       	}else{
	       		$("#vip").html("年度大会员");
	       	}
	       	
	       }
	    }
	});
}

function setWidth(){
	console.log('Copyright©2019 术与道 All Rights Reserved. MIT License');
	var width = document.body.offsetWidth;
	if (width < 530) {
		document.getElementById('info_name').style.width = (width-54-width*0.04-1-20)+'px';
	}
}
//解决移动端点击输入UID时的布局问题
var winHeight = $(window).height();
    $(window).resize(function() {  
        //当窗体大小变化时
        var thisHeight = $(this).height();
        if (winHeight - thisHeight > 50) {  
            $('footer').css('display', 'none');  
        } else {   
            $('footer').css('display', 'block');  
        }  
    }); 