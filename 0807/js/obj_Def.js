const person = {
    myName : "kim",
    age : 45,
    eheColor : "brown"
}

const person2 = new Object({
    myName : "kim",
    age : 25,
    eheColor : "brown"
})
document.getElementById("person_2").innerHTML = "person2 이름은 "+person2.myName+"이고 나이는 "+person2.age+" 입니다."

const person3 = {
    myName : "kim",
    age : 45,
    eheColor : "brown"
}
const man = Object.create(person3);
man.myName = "park";
man.myage = 30;

document.getElementById("person_3").innerHTML = "person3 이름은 "+person3.myName+"이고 나이는 "+person3.age+" 입니다."
document.getElementById("man").innerHTML = "person3->man이름은 "+man.myName+"이고 나이는 "+man.age+" 입니다."

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
//document.getElementById("fruits_1").innerHTML = fruits[0][1];
document.getElementById("fruits_1").innerHTML = "apples : "+myObj.apples;
//같은건데 이게 애매하네. 아 2차원 배열이었는데 이걸 오브젝트로 바꾸면서 키값:벨류로 바꿀수 있게됨.


const person4 = {
    myName : "kim",
    age : 45,
    eyeColor : "brown"
}

// Create Source Object
const person5 = {myName: "영남",eheColor : "white"}

// Assign Source to Target
Object.assign(person4, person5);

let text22 = Object.entries(person4);
document.getElementById("person_5").innerHTML = text22;

function Person9(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
}

const myFather = new Person9("kim","sungsu", 65, "blue");

// Display age
document.getElementById("person_9").innerHTML =
"My father is " + myFather.age + "."; 

const myMother = new Person9("sin","jisun", 65, "red");

// Display age
document.getElementById("person_10").innerHTML =
"My mother is " + myFather.age + ". and name is "+myMother.firstName+" "+myMother.lastName+"."; 

