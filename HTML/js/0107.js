const fruits = ['사과', '바나나', '오렌지' ,'포도'];

for (const index of fruits.keys()) {
  console.log(index);
}
// 0// 1// 2

const keys = [...fruits.keys()];
console.log(keys); // [0, 1, 2]

const numbers = [5, 2, 8, 1, 9];

// 오름차순
numbers.sort((a, b) => b - a); //number배열의 순서를 변경한다 
console.log(numbers); // [1, 2, 5, 8, 9] (원본 변경)
// 그 배열을 출력한다.


fruits.sort();
console.log(fruits); // ['바나나', '사과', '오렌지', '포도']

const nested1 = [1, 2, [3, 4]];
console.log(nested1.flat()); // [1, 2, 3, 4]

const nested2 = [1, [2, [3, [4]]]];
console.log(nested2.flat(2)); // [1, 2, 3, [4]]

console.log(nested2.flat(Infinity)); // [1, 2, 3, 4]


// 빈 요소 제거
const withEmpty = [1, 2, , 4, 5];
console.log(withEmpty.flat()); // [1, 2, 4, 5]

let list = document.getElementById("list");
console.log(list)

let el = document.getElementById("list");

let obj = document.querySelector("#list > li:nth-child(2)");


console.log(obj);

