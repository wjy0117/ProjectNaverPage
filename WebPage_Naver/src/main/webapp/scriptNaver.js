//로그인 페이지로 이동
function SignUp(){
	if(document.getElementById("using_guide").checked === true 
			&& document.getElementById("info_guide").checked === true){
		document.getElementById("wrap").style.display = "none";
		document.getElementById("lang").style.display = "none";
		document.getElementById("result").style.display = "block";
	}else{
		document.getElementById("warning").setAttribute("style", "display: block; color:red;");
	}
}
//전체 동의 체크박스(4개의 체크박스 한번에 클릭)
function All_check(){
	if(document.getElementById("all_agree").checked === true){
		document.getElementById("using_guide").checked = true;
		document.getElementById("info_guide").checked = true;
		document.getElementById("which_guide").checked = true;
		document.getElementById("pr_guide").checked = true;
	}else{
		document.getElementById("using_guide").checked = false;
		document.getElementById("info_guide").checked = false;
		document.getElementById("which_guide").checked = false;
		document.getElementById("pr_guide").checked = false;
	}
}

/*정규식을 통해 입력양식 확인*/
//나중에 함수 하나로 만들어서 정규식과 요소이름을 파라미터로 가지는 함수만들기
//id부터 input요소 들의 정규식 user_id
function _inputId(){
	if (!/^[a-z0-9-_]{5,20}$/.test(document.user.user_id.value)) {
		document.getElementById("errorTextId").innerText = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
		document.getElementById("errorTextId").setAttribute("style", "display: block; color:red;");
	}else{
		document.getElementById("errorTextId").style.display = "none";
	}
}
//정규식에 따라 비밀번호 에러 표시 출력하는 함수.
function _inputPw(){
	if(!/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/.test(document.user.user_pw.value)) {
		document.getElementById("errorTextPw").innerText = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
		document.getElementById("errorTextPw").setAttribute("style", "display: block; color:red;");
	}else{
		document.getElementById("errorTextPw").style.display = "none";
	}
}
//비밀번호 확인 텍스트와 비밀번호가 동일한 지 확인하는 함수.
function _samePw(){
	if(document.user.user_pw.value === document.user.user_okpw.value && document.user.user_okpw.value != "")
	{
		document.getElementById("errorTextOkpw").innerText = "똑같이 입력되었습니다.";
		document.getElementById("errorTextOkpw").setAttribute("style", "display: block; color:green;");
	}else if(document.user.user_okpw.value === ""){
		document.getElementById("errorTextOkpw").style.display = "none";
	}else{
		document.getElementById("errorTextOkpw").innerText = "비밀번호가 다릅니다.";
		document.getElementById("errorTextOkpw").setAttribute("style", "display: block; color:red;");
	}
}

//이름 user_name
//<input name="user_name" type="text" onblur = "input_name()"><br>
//한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)
function input_name(){
	if(!/^[가-힣A-Za-z]{2,30}$/.test(document.user.user_name.value))
	{
		document.getElementById("errorTextName").innerText = "이름을 다시 확인해주세요.";
		document.getElementById("errorTextName").setAttribute("style", "display: block; color:red;");
	}else{
    	document.getElementById("errorTextName").style.display = "none";
    }
}

//생년월일
//1203이하라면 빨간 글씨로 정말이세요? 출력
function input_year(){
	if (!/^(120[3-9]|12[1-9][0-9]|1[3-9][0-9]{2}|20[0-1][0-9]|202[0-3])$/.test(document.user.birth_year.value)) {
		document.getElementById("errorTextBirth").innerText = "정말인가요?";
		document.getElementById("errorTextBirth").setAttribute("style", "display: block; color:red;");
    }else{
		document.getElementById("errorTextBirth").style.display = "none";
	}
}
function input_day(){
	if (!/^([1-9]{1}|0[1-9]{1}|[1-2][0-9]|3[0-1])$/.test(document.user.birth_day.value)) {
        document.getElementById("errorTextBirth").innerText = "날짜를 다시 확인해주세요.";
		document.getElementById("errorTextBirth").setAttribute("style", "display: block; color:red;");
    }else{
		document.getElementById("errorTextBirth").style.display = "none";
	}
}

//본인확인 이메일 user_email (선택)
//이메일 주소를 다시 확인해주세요.
//이메일 주소 형식에 맞는지 확인하는 함수
function input_email(){
	if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(document.user.user_email.value)) {
        document.getElementById("errorTextEmail").innerText = "이메일 주소를 다시 확인해주세요.";
		document.getElementById("errorTextEmail").setAttribute("style", "display: block; color:red;");
    }else if(document.user.user_email.value === ""){
		document.getElementById("errorTextEmail").style.display = "none";
	}else {
        document.getElementById("errorTextEmail").innerText = "이메일이 정상적으로 입력되었습니다.";
		document.getElementById("errorTextEmail").setAttribute("style", "display: block; color:green;");
    }
}
	
//휴대전화번호의 형식에 맞게 입력시 인증번호 발송하는 알림표시하는 함수.
function input_phone(){
	if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(document.user.phone_num2.value)) {
        document.getElementById("errorTextPhone").innerText = "형식에 맞지 않는 번호입니다.";
		document.getElementById("errorTextPhone").setAttribute("style", "display: block; color:red;");
    }else{
		document.getElementById("errorTextPhone").innerText = "인증번호를 발송했습니다.(유효시간 30분)<br/>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br/>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.";
		document.getElementById("errorTextPhone").setAttribute("style", "display: block; color:green;");
		alert("인증번호: 142123");
    	document.getElementById("number").readOnly = false;
    }
}
//인증번호 number
//숫자로 이루어진 6자리 입력.
function input_number(){
	if (document.user.number.value != "142123") {
        document.getElementById("errorTextPhone").innerText = "번호가 다릅니다.";
		document.getElementById("errorTextPhone").setAttribute("style", "display: block; color:red;");
    } else {
        document.getElementById("errorTextPhone").innerText = "인증번호가 정상적으로 입력되었습니다.";
		document.getElementById("errorTextPhone").setAttribute("style", "display: block; color:green;");
    }
}