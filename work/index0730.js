let myText = "";
const cars = ["1차", "2차", "3차", "4차", "5차"];


/*
text += cars[0];
text += cars[1];
text += cars[2];
text += cars[3];
text += cars[4];
*/

//alert(text);

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    myText += cars[i] + "<br>";
}

console.log(myText);
document.getElementById("ex1").innerHTML = myText;

let dd = new Date();
let hh = dd.getHours();
let mm = dd.getMinutes();
let ss = dd.getSeconds();

document.getElementById("ex2-1").innerHTML = dd;
document.getElementById("ex2-2").innerHTML = hh + ":" + mm + ":" + ss;

if (hh >= 16) {
    document.getElementById("ex2-3").innerHTML = `${hh}` + "시 갈준비~!!";
}else if ( 9 < hh < 16) {
    document.getElementById("ex2-3").innerHTML = `${hh}` + "시 열공~!!";
} else {
    document.getElementById("ex2-3").innerHTML = `${hh}` + "시 빠잉~!!";
}

let rdNum1 = Math.random();

let trRdNum1 = Math.trunc(rdNum1*10);

console.log(rdNum1);
document.getElementById("ex2-4").innerHTML = rdNum1;

let rdResult = rdNum1>0.5 ? "홀수" : "짝수" ;
document.getElementById("ex2-5").innerHTML = rdResult;

console.log(trRdNum1);
