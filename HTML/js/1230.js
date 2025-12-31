// switch 문
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("사과입니다.");
    break; // break를 사용해야 해당 case만 실행하고 switch 문을 빠져나감
  case "banana":
    console.log("바나나입니다.");
    break;
  default:
    console.log("다른 과일입니다.");
}

if (fruit === "apple") {
  console.log("사과입니다.");

} 
else if (fruit === "watermelon") {
  console.log("수박입니다.");
} else if (fruit === "banana") {
  console.log("바나나입니다.");
} else console.log("과일이긴 한가요?");
sayHello(); //호이스팅 

function sayHello(name = "수박", age = 1972) {
console.log("안녕하세용"  + name + "님, 나이는 " + age + "입니다");
}

console.log(this);

const fruits = ["apple", "banana", "watermelon", "grape"];

console.log(...fruits);

let x = 10;
let y = 20;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x**y);
console.log(x/y)
console.log(y++)
console.log(++x)
console.log(x--)
console.log(--x)
console.log((x<20)&&(y<10));    

let z = 40;

z += 5;
console.log(z)
z *= 2;
console.log(z)
z /= 2;
console.log(z)
z -= 10;
console.log(z)

let age = 10;
let status = (age >= 18) ? ("성인") : ("미성년자"); // "성인"
console.log(status)

let pedal = false;
if (pedal === true) {
	  console.log("페달 밟음");
}
else {
    console.log("헛발질");
}

let score = 41;
if (score >=40){
    console.log("심장마비");
}
else {
    console.log("왜 안되지?");
}

let day = 1;
switch (day) {
    case 1: console.log("월요일"); break;
    case 2: console.log("화요일"); break;
    case 3: console.log("수요일"); break;
    case 4: console.log("목요일"); break;
    case 5: console.log("금요일"); break;
    case 6: console.log("토요일"); break;
    case 7: console.log("일요일"); break;
    default: console.log("이상한 요일");
}

for (let i = 1; i <= 5; ++i) {
    console.log("for 반복: " + i); // 1, 2, 3, 4, 5 출력
}