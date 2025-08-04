let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

// 두 개의 배열 합치기
let numberChars = nums.concat(chars);
let charsNums = chars.concat(nums);
document.write(`num에 char합치면 ${numberChars} , char에 num을 합치면 ${charsNums}`);
document.write(`<hr>`);


// 배열 안의 요소 합치기
let string1 = nums.join();
document.write(`구분자 없이 : ${string1}<br>`);
let string2 = chars.join(`/`);
document.write(`/ 구분자 지정 : ${string2}<br>`);
document.write(`<hr>`);

// 요소 추가 - 새로운 length 값 반환
let push1 = nums.push(4, 5);
document.write(`length :${push1} | 배열: ${nums} <br>`);
let push2 = nums.unshift(0);
document.write(`length :${push2} | 배열: ${nums} <br>`);
document.write(`<hr>`);

// 요소 추출 - 꺼낸 요소 반환



let testNum = [1, 4, 6];
let testStr = ['김', '영', '남'];
let hi = [" 고객님 안녕하십니까"];
let openHi1 = testStr.concat(hi);
document.write(`${openHi1}<br>`);

let openHi2 = openHi1.join(`_`);
openHi1.push(`!`)
document.write(`${openHi2}<br>`);

// let openHi3 = openHi1.join(openHi1);
document.write(`${openHi1}<br>`);

openHi1.unshift("수원역지점");
document.write(`${openHi1}<br>`);

openHi1.pop();
document.write(`${openHi1}<br>`);

openHi1.shift();
document.write(`${openHi1}<br>`);

openHi1.splice(3, 1, ' 고객님 오늘도 좋은하루 안녕하십니까');
document.write(`${openHi1}<br>`);

let openHi3 = openHi1.slice(0, 3);
document.write(`${openHi3}<br>`);

function dd(word) {
    alert(word);
}
function button1(btName) {
    alert(btName);
}
function changeBg(btName) {
    //document.getElementById("btn2").style.backgroundColor = "black";
    //let result = document.querySelector('#result');
    //result.style.backgroundColor = btName;
    result.style.backgroundColor = btName;
}
function qSelectAll() {
    //const x = document.querySelectorAll("p.intro"); //NodeList (유사 배열) 로 가져온다.
    const x = document.querySelectorAll("p"); //NodeList (유사 배열) 로 가져온다.
    const y = document.querySelector(".intro"); //0번째만 가져옴
    document.getElementById("result1").innerHTML = "--------------------";
    for (let i = 0; i < x.length; i++) {
        if (i % 2 == 0) {
            x[i].style.backgroundColor = "Purple";
        } else {
            x[i].style.backgroundColor = "Orange";
        }
    }
    /*  
                x[0].style.backgroundColor = "red";
                x[1].style.backgroundColor = "blue";
                */
    //y.style.backgroundColor = "blue";
}
function elementTest() {
    const frm = document.forms["frm1"];
    let txt = "";
    alert(frm.length);
    for (let i = 0; i < frm.length; i++) {
        txt = txt + frm[i].value;
    }
    document.getElementById("result2").innerHTML = "" + txt;
}
function imgCg1() {
    if (document.getElementById("img2").src == "https://naverpa-phinf.pstatic.net/MjAyNTAyMTNfMTEg/MDAxNzM5NDMwNjg5MzQ5.5emHiwX3CUmIF5DaGgBk_WbtCMyo2TiKtXwW32zAS5wg.VEVmXiq4bhYh5DBJZi6xPDqSoS2_EBD3CwEJbVgHPfog.JPEG/%EC%9D%B4%EB%8F%9F%7B_gfa_17394306893325526422215461267627.jpg") {
        document.getElementById("img2").src = "https://www.w3schools.com/Jsref/img_pulpit.jpg";
    } else {
        document.getElementById("img2").src = "https://naverpa-phinf.pstatic.net/MjAyNTAyMTNfMTEg/MDAxNzM5NDMwNjg5MzQ5.5emHiwX3CUmIF5DaGgBk_WbtCMyo2TiKtXwW32zAS5wg.VEVmXiq4bhYh5DBJZi6xPDqSoS2_EBD3CwEJbVgHPfog.JPEG/%EC%9D%B4%EB%8F%9F%7B_gfa_17394306893325526422215461267627.jpg"
    }

}