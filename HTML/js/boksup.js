let score = 21;

if (score >= 20) {
  console.log("성인");
} else {
  console.log("미성년");
}

// 자습문제 : img 폴더에 있는 car_class.png, dog_class.png,
//  human_class.png 파일을 보고 javascript 에서 클래스로
//  만드는 연습을 하세요


class Person {
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;

  }
  

  nextYearAge(){
    return Number(this.age) + 1;
  }



}



let kim1 = new Person('lee1', '26', 'seoul');
let kim2 = new Person('lee2', '25', 'seoul');
let kim3 = new Person('lee3', '26', 'seoul');

kim1.eat = function () {
    return 'apple'// 정의 밑에다가 작성해야됨
}

console.log("이재현씨의 내년 나이는?" + kim2.nextYearAge());
console.log("김씨가 먹은건?"+ kim1.eat());


class Person1 {
    constructor (name,age, city, image) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.image = image;
    }
nextYearAge() {
        return Number(this.age) + 1;
    }
  }
    class personintroduction extends Person1{
      constructor(name, age, city, futureHope) {
        super(name, age, city);
        this.futureHope = futureHope
    }
      introduce (){
        return `저는 ${this.city}에 사는 ${this.name} 입니다.  장래희망은 ${this.futureHope} 입니다.
`


      }
    }


let kim = new personintroduction('kim','24','seoul','kami');

console.log(kim.introduce())


class dog {
  constructor(name,color,breed,weight,age){
  
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.weight = weight;
    this.age = age;

  }

  introduce(){
    return `이 아이는 ${this.name} 에용 색깔은${this.color}이고 품종은${this.breed}이며 몸무게와 나이는 각각${this.weight}${this.age}입니다.`
  }
  bark(){
    return `이 아이는 ${this.name}지금 짖고 있습니다.`
  }
  sleep(){
    return `이 아이는 ${this.name} 꿈나라입니다`
  }
  eat(){
    return `이 아이는 ${this.name} 식사중입니다`
  }
}

let jindoge = new dog("jindo", "white", "jindoge", "10kg", "5years")

console.log(jindoge.introduce())
console.log(jindoge.bark())
console.log(jindoge.sleep())
console.log(jindoge.eat())



class human {
  constructor(name, email, address, age, phone){
  this.name = name;
  this.email = email;
  this.address = address;
  this.age = age;
  this.phone = phone;
  }
introduce(){
    return `저는 ${this.name} 입니다.이메일은 ${this.email}이며 주소는  ${this.address}이고 나이는  ${this.age}이며 전번은  ${this.phone}입니다.`
}
walk(){
    return `저는 ${this.name} 걷고 있습니다.`
}
eat(){
    return `저는 ${this.name} 식사중입니다.`
}
sleep(){
    return `저는 ${this.name} 잠자고 있습니다.`
}
  
}

let younghe = new human("younghe","1234@gmail.com","seoulyeok","21","010-1111-1111");

console.log(younghe.introduce())
console.log(younghe.walk())
console.log(younghe.eat())
console.log(younghe.sleep())

class car{
  constructor(name, price, color, speed) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.speed = speed;
  }
  introduce() {
    return `이 차는 ${this.name} 이고, 가격은 ${this.price}원이며, 색상은 ${this.color}이고, 최고 속도는 ${this.speed}km/h 입니다.`;
  }
  start() {
    return `${this.name} 시동을 걸었습니다.`;
  }
  stop() {
    return `${this.name} 시동을 껐습니다.`;
  }
  accelerate() {
    return `${this.name} 가속합니다.`;
  }
  brake() {
    return `${this.name} 감속합니다.`;
  }

}

let sonata = new car("sonata","1234","oil","12")

console.log(sonata.introduce())
console.log(sonata.start())
console.log(sonata.stop())
console.log(sonata.accelerate())
console.log(sonata.brake())



const users = [
  { id: 1, name: "김철수", age: 28, active: true,  scores: [90, 85, 88], role: "admin" },
  { id: 2, name: "이영희", age: 17, active: false, scores: [70, 75, 95], role: "user" },
  { id: 3, name: "박민수", age: 34, active: true,  scores: [88, 92, 78], role: "user" },
  { id: 4, name: "최지연", age: 22, active: true,  scores: [95, 88, 91], role: "moderator" },
  { id: 5, name: "정우성", age: 45, active: false, scores: [60, 65, 70], role: "user" }
];


[1, 2, 3].forEach((num, idx) => {
  console.log(`${num * 10}, ${idx}`);
});
// 결과: 10, 0,     20, 1,    30, 2

users.forEach((user, index) => {
  console.log(`${index + 1}번: ${user.name} (${user.age}살)`);
  user.age++; // 배열 요소의 원본 값 변경 가능
});


let arr3 = users.filter(u => u.active);
console.log(arr3);

// 30살 이상인 사람
let arr4 = users.filter(u => u.age >= 30);
console.log(arr4);

// 관리자 또는 모더레이터
let arr5 = users.filter(u => ['admin', 'moderator'].includes(u.role));
console.log(arr5);