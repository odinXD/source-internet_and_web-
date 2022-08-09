function getLogin() {
    const id = document.getElementById('id').value;
    const pwd = document.getElementById('password').value;
    const vrf = document.getElementById('verify').value;
    let acc = {'admin':'202255578'};
    
    if (vrf == rand)
    {
    if (id in acc)
    {
        var iden = id
        if (pwd==acc[iden])
        {alert('로그인 성공');
        location.href="main.html";}

        else{alert("비밀번호가 잘못되었습니다.")}
    }
    else
    {alert('아이디를 한번 더 확인 해주세요.')}
}
else
{alert('인증번호가 잘못되었습니다')};
}
