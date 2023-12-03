document.querySelector("#submit").addEventListener('click', (e) => {
    const idlength = [/^.{6,16}$/]
    const regexps = [/^.{8,12}$/, /[a-z]/i, /[0-9]/, /[!@#$%^&*()]/];
    const emailcheck = [/[@]/];
    const gendercheck = [/[남|여]/]
    const idval = document.querySelector("#id").value;
    const pss1 = document.querySelector('#password').value;
    const psscheck = document.querySelector('#password_checked').value;
    const emailval = document.querySelector('#email').value;
    const gender = document.querySelector('#gender').value;
    if(!idlength[0].test(idval)){
        alert('아이디는 6자 이상 16자 이하만 가능합니다.');
        e.preventDefault();
        return;
    }

    if(!regexps[0].test(pss1)){
        alert('비밀번호는 8~12자리여야 합니다.');
        e.preventDefault();
        return;
    }

    if(!regexps[1].test(pss1)){
        alert('비밀번호는 영문자를 하나 이상 포함해야합니다.');
        e.preventDefault();
        return;
    }

    if(!regexps[2].test(pss1)){
        alert('비밀번호는 숫자를 하나 이상 포함해야 합니다.');
        e.preventDefault();
        return;
    }

    if(!regexps[3].test(pss1)){
        alert('비밀번호는 특수문자(!@#$%^&*())를 하나 이상 포함해야 합니다.');
        e.preventDefault();
        return;
    }

    if(pss1 != psscheck){
        alert('입력한 비밀번호와 체크 비밀번호가 다릅니다.');
        e.preventDefault();
        return;
    }

    if(!emailcheck[0].test(emailval)){
        alert('이메일 형태가 올바르지 않습니다.');
        e.preventDefault();
        return;
    }

    if(!gendercheck[0].test(gender)){
        alert('남, 여  를 입력해주세요.')
        e.preventDefault();
        return;
    }

    alert('회원가입에 성공했습니다.😎');
});