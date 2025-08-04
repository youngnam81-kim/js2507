
// TEST 1 
/*
function addNumber() {
    let n1 = 2;
    let n2 = 4;
    let sum = n1 + n2;
    n5 = sum;
    console.log(`결과값 : n1=${n1} n2=${n2} sum=${sum}`);
    
}
var n5;

addNumber();
*/

// TEST 2
/*
let sum = 0;
function sum561(){
    sum = 10+20;
    result = sum;
}

sum561();

console.log(`전역변수 : ${sum}`);
console.log(`지역변수 : ${result}`);
*/

// 변수 재선언 564
/*
var seed=3;
for(let i=0;i<3;i++){
    var seed=5+i;
    console.log(seed)
}
*/

/*
// 지역변수  전역변수 범위 
var seed=3;
let result = 0;
function a564(){
    var seed=5;
    result = seed;
    console.log(seed);
    console.log(result);
}
a564();
result = seed;
console.log(seed);
console.log(result);
//결과
//5
//5
//3
//3
*/

/*
function test(a){
    console.log('a호출');
}
function test(a,b){
    console.log('ab호출');
}
function test(a,b,c){
    console.log(arguments.length);
    console.log('abc호출');
}
test(2,4);
//js는 함수 오버로딩이 되지 않으므로 마지막 선언한 함수가 실행된다. test(a,b,c){ 가 실행됨.
*/

//익명함수 사용
/*
let sum = function (a,b,dd){
    console.log(sum.length);
    console.log(arguments[2]);
    return a+b;
}
document.write(`실행결과:${sum(3,5,6)}`);
*/

/*
//즉시 실행 함수 
(
    function () {
        alert('2');
    }()
);
*/

/*
//콜백함수
function sayHello(callback) {
  const name = "Alice";
  callback(name); // 전달받은 콜백 함수 실행
}

// 익명함수를 콜백으로 전달
sayHello(function(name) {
  console.log("Hello, " + name);
});
*/

/*
function myF(p1,p2){
    return p1*p2;
}
let result = myF(3,5);
console.log(result);
*/

/*
var sum ;
(
    function(a,b){
        alert(a+"+"+b);
        sum=a+b;
    }(10,20)
);

var result = sum;
console.log(result);
*/
/*
const h1 = function(){
    return("hi1");
}
const h2 = ()=> {return("hi2")};
const h3 = () => "hi3";


console.log(h1());
console.log(h2());
console.log(h3());
*/
let myFunction = (a,b) => a+b;
result = myFunction(3,5);
console.log(typeof(result));
console.log(result);

let aa = () => { return "b"};
console.log(aa("2222"));