function validateForm() {
    let x = document.forms.myForm1.fname.value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        alert(x);
        return true;
    }
}

function validateForm2() {
    //let x = document.getElementById("myNum").value;
    let x = document.getElementById("myNum");

    if (x.value != "" && isNaN(x.value) && 0 < parseInt(x.value) && parseInt(x.value) < 100) {
        alert('맞습니다.');
    } else {
        alert('잘못입력하셨습니다.');
        //document.getElementById("myNum").value="";
        x.value = "";
    }
}

function chBtn() {
    document.getElementById("r1").style.color = "red";
    document.getElementById("r1").style.fontSize = "25px"
    document.getElementById("b1").style.color = "blue";
    document.getElementById("b1").style.fontSize = "50px"
    document.getElementById("black").style.color = "green";
    document.getElementById("black").style.fontSize = "25px"
}

function ooops(ooops) {

    // if ( document.getElementById("ooops").innerText == "클릭해보세요."){
    //     document.getElementById("ooops").innerHTML="Click on this text!";  
    // }else{
    //     document.getElementById("ooops").innerHTML="<h1>클릭해보세요.</h1>";  
    // }

    if (ooops.innerText == "클릭해보세요.") {
        ooops.innerHTML = "Click on this text!";
    } else {
        ooops.innerHTML = "<h1>클릭해보세요.</h1>";
    }
}

function changeTime(changeT) {
    let d = new Date()
    changeT.innerHTML = "지금 시간 : " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

}

var myBtn = document.getElementById("myBtn");
// myBtn.addEventListener("click", myFunction);
// myBtn.addEventListener("click", someOtherFunction);

myBtn.addEventListener("click", someOtherFunction);


function myFunction() {
    alert("Hello World!");
}

function someOtherFunction() {
    alert("This function was also executed!");
}

document.getElementById("myP1").addEventListener("click", function () {
    alert('You clicked the white element!');
}, false);
document.getElementById("myDiv1").addEventListener("click", function () {
    alert('You clicked the orange element!');
}, false);
document.getElementById("myP2").addEventListener("click", function () {
    alert('You clicked the white element!');
}, true);
document.getElementById("myDiv2").addEventListener("click", function () {
    alert('You clicked the orange element!');
}, true);


const para = document.createElement("p");
const node = document.createTextNode("This is new. 부모 노드의 마지막 자식으로 노드를 추가(appendChild)");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);


const para1 = document.createElement("p");
const node1 = document.createTextNode("This is new. 부모 노드의 특정 자식 노드 앞에 노드를 삽입(insertBefore)");
para1.appendChild(node1);
const element1 = document.getElementById("div1");
const child1 = document.getElementById("p1");

//element1.insertBefore(para1,child1);

const b = document.body;
b.appendChild(para1);
element1.insertBefore(para1, child1);