$(function(){

    function isName(str){
    	var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
    	return username.test(str);//检测是否符合姓名规则
    };

    function isEmail(val){
    var patrn = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!patrn.test(val))   return false;
    return true;    
}

	$("#submit").bind("click",function (){
		var name = $("#chnName").val();
		var email = $("#email").val();
		var message = $("#message").val();
		if(name == "" || !isName(name)){
			alert("Please enter the correct name");
            return;
		}
        if(email == "" || !isEmail(email)){
            alert("Please enter the correct mailbox");
            return;
        }
        $("#sendBtn").attr("href","mailto:contact@cielo7.io?subject="+name+"&body="+message);
        document.getElementById("sendBtn").click();
	})


})