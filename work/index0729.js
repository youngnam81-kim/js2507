// 변수 선언
// 상수 상수는 초기화를 같이 해주어야 한다.
const a = 0;
//변수
let result;
// 아래처럼 하면 오류남.
// result=++a; 
let xx;
let yy;
let zz;
let num1, num2, num3;

//변수 선언과 초기화
let str = "나미";

num1 = 10;
num2 = 20;
result = 0;

result = num1 + num2;

console.log(result);
console.log(`두 수의 합은: ${result}`);
document.getElementById("result").innerHTML = '두 수의 합은: ' + result;
document.getElementById("result1").innerHTML = `두 수의 합은: ${result}`;

let userNumber = prompt('숫자를 입력하세요.');

console.log(userNumber);

if (userNumber === "") {
    alert('값을 입력하지 않았습니다.');
} else if (userNumber === "0") {
    alert('0 입니다.');
} else if (userNumber==null) {
    alert('취소?');
} else {
    let userNumberInt = parseInt(userNumber, 10);
    userNumberInt > 5 ? console.log('true') : console.log('false') ;
    if (Number.isNaN(userNumberInt)) {
        alert('숫자가 아닙니다.');
    } else if (parseInt(userNumberInt, 10) % 3 === 0) {
        alert('3의 배수입니다.');
    } else {
        alert('3의 배수 아닙니다.');
    }
}


//userNumber === 0 ? alert('참') : alert('거짓');;