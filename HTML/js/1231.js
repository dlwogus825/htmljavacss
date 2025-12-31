function showAtoG() {
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");
}

function showonetoTen() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}

//동기 프로그래밍 한줄의 명령어가 종료되어야지
// 다음줄의 명령어가 실행된다.
console.log("동기식 프로그래밍");
showonetoTen();
showAtoG();

console.log("비동기식 프로그래밍");
//비동기식 프로그래밍
showonetoTen();
setTimeout(showAtoG, 1);

function showonetoTenten() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

showonetoTenten();
showonetoTenten();

function doSomething(callback) {
  console.log("일 시작");
  callback();
  console.log("일 끝");
}

function finish() {
  console.log("콜백 실행됨");
}
doSomething(finish);

console.log("A 시작");

setTimeout(function () {
  console.log("C 나중에 실행");
}, 1000);

console.log("B 끝");

function sayHello(name) {
  function hi() {
    console.log("안녕 " + name);
  }
  hi();
}

sayHello("철수");

let i = 5;

for (let i = 0; i < 11; i++) {
  // some code
  console.log(i);
}

function orderChicken(isAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAvailable) {
        resolve("치킨 도착 🍗");
      } else {
        reject("품절 😭");
      }
    }, 2000);
  });
}

orderChicken(true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function sayHello(name) {
  function hi() {
    console.log("안녕 " + name);
  }
  hi();
}

sayHello("철수");

function gugu() {
  function gugu1() {
    console.log(
      "2단은 다음과 같습니다.2 * 1 == 2, 2 * 2 == 4, 2 * 3 == 6, 2 * 4 == 8, 2 * 5 == 10, 2 * 6 == 12 ,이하생략"
    );
  }
  gugu1();
}

gugu();
