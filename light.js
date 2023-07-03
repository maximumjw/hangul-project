const letter1 = document.getElementById('letter1');
const letter2 = document.getElementById('letter2');
const letter3 = document.getElementById('letter3');
const letter4 = document.getElementById('letter4');
const letter5 = document.getElementById('letter5');
const letter6 = document.getElementById('letter6');
const letter7 = document.getElementById('letter7');
const letter8 = document.getElementById('letter8');
const letter9 = document.getElementById('letter9');
const letter10 = document.getElementById('letter10');
const letter11 = document.getElementById('letter11');
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var flag7 = 0;
var flag8 = 0;
var flag9 = 0;
var flag10 = 0;
var flag11 = 0;
var check = 0;

letter1.addEventListener('click', () => {
    if(flag1)
    {
        back();
        letter1.style.transform = "rotateX(70deg)"
        letter1.style.top = "820px"
        letter1.style.filter = "none"
    }   
    else
    {
        go('△');
        letter1.style.transform = "rotateX(10deg)"
        letter1.style.top = "800px"
        letter1.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag1 = 1 - flag1
});

letter2.addEventListener('click', () => {
    console.log(flag2)
    if(flag2)
    {
        back();
        letter2.style.transform = "rotateX(70deg)"
        letter2.style.top = "820px"
        letter2.style.filter = "none"
    }   
    else
    {
        go('ㅋ');
        letter2.style.transform = "rotateX(10deg)"
        letter2.style.top = "800px"
        letter2.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag2 = 1 - flag2
});

letter3.addEventListener('click', () => {
    if(flag3)
    {
        back();
        letter3.style.transform = "rotateX(70deg)"
        letter3.style.top = "820px"
        letter3.style.filter = "none"
    }   
    else
    {
        go('ㄱ');
        letter3.style.transform = "rotateX(10deg)"
        letter3.style.top = "800px"
        letter3.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag3 = 1 - flag3
});

letter4.addEventListener('click', () => {
    if(flag4)
    {
        back();
        letter4.style.transform = "rotateX(70deg)"
        letter4.style.top = "820px"
        letter4.style.filter = "none"
    }   
    else
    {
        go('ㄴ');
        letter4.style.transform = "rotateX(10deg)"
        letter4.style.top = "800px"
        letter4.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag4 = 1 - flag4
});

letter5.addEventListener('click', () => {
    if(flag5)
    {
        back();
        letter5.style.transform = "rotateX(70deg)"
        letter5.style.top = "820px"
        letter5.style.filter = "none"
    }   
    else
    {
        go('ㄷ');
        letter5.style.transform = "rotateX(10deg)"
        letter5.style.top = "800px"
        letter5.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag5 = 1 - flag5
});

letter6.addEventListener('click', () => {
    if(flag6)
    {
        back();
        letter6.style.transform = "rotateX(70deg)"
        letter6.style.top = "950px"
        letter6.style.filter = "none"
    }   
    else
    {
        go('ㄹ');
        letter6.style.transform = "rotateX(10deg)"
        letter6.style.top = "930px"
        letter6.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag6 = 1 - flag6
});

letter7.addEventListener('click', () => {
    if(flag7)
    {
        back();
        letter7.style.transform = "rotateX(70deg)"
        letter7.style.top = "950px"
        letter7.style.filter = "none"
    }   
    else
    {
        go('ㅌ');
        letter7.style.transform = "rotateX(10deg)"
        letter7.style.top = "930px"
        letter7.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag7 = 1 - flag7
});

letter8.addEventListener('click', () => {
    if(flag8)
    {
        back();
        letter8.style.transform = "rotateX(70deg)"
        letter8.style.top = "950px"
        letter8.style.filter = "none"
    }   
    else
    {
        go('ㅁ');
        letter8.style.transform = "rotateX(10deg)"
        letter8.style.top = "930px"
        letter8.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag8 = 1 - flag8
});

letter9.addEventListener('click', () => {
    if(flag9)
    {
        back();
        letter9.style.transform = "rotateX(70deg)"
        letter9.style.top = "950px"
        letter9.style.filter = "none"
    }   
    else
    {
        go('ㅂ');
        letter9.style.transform = "rotateX(10deg)"
        letter9.style.top = "930px"
        letter9.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag9 = 1 - flag9
});

letter10.addEventListener('click', () => {
    if(flag10)
    {
        back();
        letter10.style.transform = "rotateX(70deg)"
        letter10.style.top = "950px"
        letter10.style.filter = "none"
    }   
    else
    {
        go('ㅍ');
        letter10.style.transform = "rotateX(10deg)"
        letter10.style.top = "930px"
        letter10.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag10 = 1 - flag10
});

letter11.addEventListener('click', () => {
    if(flag11)
    {
        back();
        letter11.style.transform = "rotateX(70deg)"
        letter11.style.top = "950px"
        letter11.style.filter = "none"
    }   
    else
    {
        go('ㅅ');
        letter11.style.transform = "rotateX(10deg)"
        letter11.style.top = "930px"
        letter11.style.filter = "drop-shadow(10px 6px 6px #9d9d9d)"
    }
    flag11 = 1 - flag11
});