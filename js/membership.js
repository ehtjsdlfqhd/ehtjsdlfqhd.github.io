
// 사용자 입력값 저장
const saveMember = () => {
    // 유효성검사목록
    const idlength = [/^.{4,12}$/]
    const regexps = [/^.{8,12}$/, /[a-z]/i, /[0-9]/, /[!@#$%^&*()]/];
    const gendercheck = [/[남|여]/]

    const idInput = document.querySelector('input#id');
    const genderInput = document.querySelector('input#gender');
    const emailInput = document.querySelector('input#email');
    const pss1 = document.querySelector('#password').value;
    const psscheck = document.querySelector('#password_checked').value;

    // 유효성검사
    if(!idlength[0].test(idInput.value)){
        alert('아이디는 4자 이상 12자 이하만 가능합니다.');
        return false;
    }

    if(!regexps[0].test(pss1)){
        alert('비밀번호는 8~12자리여야 합니다.');
        return false;
    };

    if(!regexps[1].test(pss1)){
        alert('비밀번호는 영문자를 하나 이상 포함해야합니다.');
        return false;
    };

    if(!regexps[2].test(pss1)){
        alert('비밀번호는 숫자를 하나 이상 포함해야 합니다.');
        return false;
    };

    if(!regexps[3].test(pss1)){
        alert('비밀번호는 특수문자(!@#$%^&*())를 하나 이상 포함해야 합니다.');
        return false;
    };

    if(pss1 != psscheck){
        alert('입력한 비밀번호와 체크 비밀번호가 다릅니다.');
        return false;
    };

    if(!gendercheck[0].test(genderInput.value)){
        alert('남, 여  를 입력해주세요.')
        return false;
    };


    const members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(new Member(idInput.value, genderInput.value, emailInput.value));
    console.log(members);
    localStorage.setItem('members', JSON.stringify(members));
    alert("회원가입이 완료되었습니다.");
    const link = 'members.html';
    location.href = link;
    

};

//Member객체 생성
class Member {
    constructor(id, gender, email, joinAt = Date.now()) {
        this.id = id;
        this.gender = gender;
        this.email = email;
        this.joinAt = joinAt
    };
};