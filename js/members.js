const addMembers = () => {
    const members = JSON.parse(localStorage.getItem('members')) || [];
    const tbody = document.querySelector('#contents table tbody');
    tbody.innerHTML = '';
    members.forEach((member, index) => {
        const {id, gender, email, joinAt} = member;
        const tr = `
        <tr>
            <td>${id}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td>${convertToDate(joinAt)}</td>
        </tr>`;
        tbody.innerHTML += tr;
    });
};

//한자리 수 일때 0n 표시
const f = (n) => n < 10 ? '0' + n : n;
//시간초 포매팅 하기
const convertToDate = (millis) => {
    const d = new Date(millis);
    const yy = f(d.getFullYear());
    const mm = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${yy}-${mm}-${dd} ${hh}:${mi}`;
};

addMembers();