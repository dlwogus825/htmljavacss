/*
C 의 구조체
struct 구조체이름 {
  int num;  // 속성(멤버변수/프로퍼티/필드)
  char ch;  // 속성(멤버변수/프로퍼티/필드)
  float a[4]; // 속성(멤버변수/프로퍼티/필드)
}

발전 ===> C++ 클래스
class 클래스이름 {
  int num;  // 속성(멤버변수/프로퍼티/필드)
  char ch;  // 속성(멤버변수/프로퍼티/필드)
  float a[4]; // 속성(멤버변수/ 프로퍼티/필드)
  sum();  // 기능(멤버메소드,멤버함수)
  함수();  // 기능(멤버메소드,멤버함수)
}
*/

// 클래스 선언
class Animal {
  name = ""; // 멤버변수
  age = 0;

  // 생성자
  constructor(name, age = 1) {
    this.name = name; // 내객체.name = 매개변수 name;
    this.age = age;
  }

  // this.name 의 getter 멤버메소드 (캡슐화)
  getName() {
    return this.name;
  }

  eat(food) {
    console.log(`${this.name}은(는) ${food} 을(를) 먹습니다.`);
  }

  year() {
    console.log(`${this.name}은(는) ${this.age} 살 입니다.`);
  }

  // 정적 클래스 변수 (ES7 이후)  // 사용할때는 클래스이름.정적클래스변수명
  static title = "Animal";

  // 정적 메소드 (ES7 이후 가능)  // 사용할때는 클래스이름.정적클래스메소드명
  static print() {
    console.log("Animal 클래스의 정적 메소드 입니다.");
  }
}

// 자식 클래스 (상속),   자식클래스명 extends 부모클래스명
class Dog extends Animal {
  #breed = ""; // 비공개 필드 (클래스 외부에서 접근 불가, ES2022 이후)

  constructor(name, breed) {
    super(name); // 부모 생성자 호출 (필수!) super
    this.#breed = breed;
  }

  bark() {
    console.log(`${this.#breed} 종 ${this.name} 가 멍멍! 짓습니다.`);
  }

  // 메서드 오버라이딩도 가능
  eat(food) {
    console.log(`${this.name}은(는) ${food} 을(를) 자주 먹습니다.`);
  }
}

// 사용 예
let a1 = new Animal("개구리");
a1.eat("파리"); // 개구리 은(는) 파리 을(를) 먹습니다.
a1.year();
console.log("이름 : " + a1.getName()); // 이름 : 개구리
Animal.print(); // Animal 클래스의 정적 메소드 입니다.

const myDog = new Dog("맥스", "골든리트리버");
myDog.eat("사료"); // 맥스은(는) 사료 을(를) 자주 먹습니다. (부모 메서드 오버라이딩 사용)
myDog.bark(); // 골든리트리버 종 맥스 가 멍멍! 짓습니다.
myDog.year();
console.log("이름 메소드 :" + myDog.getName()); // 이름 : 맥스
myDog.name = "발발이";
console.log("이름 속성 : " + myDog.name); // 이름 : 맥스
console.log("종 : " + myDog.breed); // 종 : undefined
Dog.print(); // Animal 클래스의 정적 메소드 입니다.
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Dog); // true
console.log(a1 instanceof Animal); // true
console.log(a1 instanceof Dog); // true

/*
과제 1.
  - 이름과 생년월일과 출생국가, 출생도시, 이메일
    , 폰연락처가 있는 사람 클래스를 만드세요.

    
  - 이름과 생년월일, 출생국가, 출생도시는
    외부에서 수정 기능 못하며, 읽는 기능만 가능해요.
  - 이메일과 폰연락처는 읽는기능과 쓰는기능으로 처리해요.
  - 이름 읽는 기능 함수 : getName();
  - 생년월일 읽는 기능 함수: getbirth();
  - 출생국가 읽는 기능 함수: getbirthcountry();
  - 출생도시 읽는 기능 함수: getbirthcity();
  - 이메일 읽는 함수; getEmail();
  - 폰연락처 읽는 기능 함수: getPhone();
  - 이메일 쓰는 기능 함수: setEmail("abc@gmail.com")
  - 폰연락처 쓰는 기능함수: setPhone("011-231-5671")


*/

class Person {
  #name = "프란시스";
  #birthDate = "2001.05.01";
  #birthCountry = "South Korea";
  #birthCity = "SEOUL";
  #email = "dlwogus825@gmail.com";
  #Phone = "010-6494-7516";
  #image = "image/car_class.png"

  constructor(name, birthDate, birthCountry, birthCity, email, Phone, image) {
    this.#name = name;
    this.#birthDate = birthDate;
    this.#birthCountry = birthCountry;
    this.#birthCity = birthCity;
    this.#email = email;
    this.#Phone = Phone;
    this.#image = image;
  }

  getName() {
    return this.#name;
  }
  print() {
    console.log(
      `안녕하세요, 저는 ${this.#name} 에 생년월일은${
        this.#birthDate
      }사는 지역은이며 ${this.#birthCountry} 도시는   ${
        this.#birthCity
      }입니다.사진은 ${this.#image}입니다. 잘 부탁드려요.`
    );
  }

  getimage() {

    return this.#image;
  }

  setimage(image) {
    this.#image = image;
  }


  getBirth() {
    return this.#birthDate;
  }

  getBirthCountry() {
    return this.#birthCountry;
  }

  getBirthCity() {
    return this.#birthCity;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    this.#email = email;
  }

  getPhone() {
    return this.#Phone;
  }

  setPhone(Phone) {
    this.#Phone = Phone;
  }

  static type = "사람";
  static output() {
    console.log("나는" + Person.type + "입니다.");

    Person.output();

    Person.outputInfo(Person);8
  
  }
}







// User 클래스라는 설계도를 사용합니다.
class User {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    console.log(`안녕하세요, 레벨 ${this.level} ${this.name}님!`);
  }
}

// 'new' 키워드로 새로운 User 인스턴스를 생성합니다.
const user1 = new User("김개발", 10);
const user2 = new User("이코딩", 12);

user2.greet(); // 결과: "안녕하세요, 레벨 10 김개발님!"

// 객체 생성
let p1 = new Person(
  "홍길동",
  "1731-12-22",
  "조선",
  "강릉",
  "그게뭔데",
  "그게뭔데"
  
);
let p2 = new Person(
  "최원철",
  "1970-01-01",
  "대한민국",
  "대도시",
  "ccc@gmail.com",
  "010-1111-2  22"
);
let p3 = new Person(
  "Michael Jackson",
  "1965-01-01",
  "USA",
  "New York",
  "mjack@gmailc.om",
  "01-111-1111-1111"
);
let p4 = new Person(
  "Michael Jackson",
  "1965-01-01",
  "USA",
  "New York",
  "mjack@gmailc.om",
  "01-111-1111-1111"
);

// 객체 읽는 기능
console.log(`p1.getName = ${p1.getName()}`);
console.log(`p1.getBirth = ${p1.getBirth()}`);
console.log(`p1.getBirthCountry = ${p1.getBirthCountry()}`);
console.log(`p1.getBirthCity = ${p1.getBirthCity()}`);
console.log(`p1.getEmail = ${p1.getEmail()}`);
console.log(`p1.getPhone = ${p1.getPhone()}`);
console.log(`p1.getimage = ${p1.getimage()}`);

console.log(`p2.getName = ${p1.getName()}`);
console.log(`p2.getBirth = ${p1.getBirth()}`);
console.log(`p2.getBirthCountry = ${p1.getBirthCountry()}`);
console.log(`p2.getBirthCity = ${p1.getBirthCity()}`);
console.log(`p2.getEmail = ${p1.getEmail()}`);
console.log(`p2.getPhone = ${p1.getPhone()}`);

console.log(`p3.getName = ${p1.getName()}`);
console.log(`p3.getBirth = ${p1.getBirth()}`);
console.log(`p3.getBirthCountry = ${p1.getBirthCountry()}`);
console.log(`p3.getBirthCity = ${p1.getBirthCity()}`);
console.log(`p3.getEmail = ${p1.getEmail()}`);
console.log(`p3.getPhone = ${p1.getPhone()}`);

// 객체 쓰는 기능
p1.setEmail("u1@gmail.com");
p1.setPhone("010-7777-8888");
console.log(`쓰고 나서 p1.getEmail = ${p1.getEmail()}`);
console.log(`쓰고 나서 p1.getPhone = ${p1.getPhone()}`);

p2.setEmail("u1@gmail.com");
p2.setPhone("010-7777-8888");
console.log(`쓰고 나서 p2.getEmail = ${p2.getEmail()}`);
console.log(`쓰고 나서 p2.getPhone = ${p2.getPhone()}`);

p3.setEmail("u1@gmail.com");
p3.setPhone("010-7777-8888");
console.log(`쓰고 나서 p3.getEmail = ${p3.getEmail()}`);
console.log(`쓰고 나서 p3.getPhone = ${p3.getPhone()}`);

// 멤버변수에 값이 써지면 안됨
p1.name = "값이 써지면 안됨";
p1.birth = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getName = ${p1.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getBirth = ${p1.getBirth()}`);

p2.name = "값이 써지면 안됨";
p2.birth = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getName = ${p2.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getBirth = ${p2.getBirth()}`);

p3.name = "값이 써지면 안됨";
p3.birth = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getName = ${p3.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getBirth = ${p3.getBirth()}`);

p1.print();
p2.print();
p3.print();




/*
오후 과제 2.
  - Person 클래스가 객체로 됐을때 객체의 속성들
    (이름,생년월일,등..)을 출력하는 기능이 필요합니다.
	  멤버메소드 print(); 를 만들어서 console.log 에 출력하는 기능을
	  만드세요.
  - 클래스정적멤버변수 type 에는 "사람"이라는 값을 가지도록
    만드세요
  - 클래스정적메소드 output() 에는 "나는 사람 입니다."를
	  출력하도록 만드세요
  - 클래스정적메소드 outputInfo(person) 에는
    "사람 정보 : " + print() 내용을 연결해서 출력하세요.
*/
class Student extends Person {
  #schoolname = "충암고등학교";
  #schoolnumber = "2020051078";

  constructor(
    name,
    birthday,
    country,
    city,
    email,
    phone,
    schoolname,
    schoolnumber
  ) {
    super(name, birthday, country, city, email, phone);
    this.#schoolname = schoolname;
    this.#schoolnumber = schoolnumber;
  }

  getSchoolname() {
    return this.#schoolname;
  }

  getSchoolnumber() {
    return this.#schoolnumber;
  }

  print() {
    super.print();
    let msg = `schoolname: ${this.#schoolname}, schoolnumber: ${this.#schoolnumber}`;
    console.log(msg);
    return msg;
  }
}

let st1 = new Student(
  "이재현",
  "2001.05.01",
  "South Korea",
  "SEOUL",
  "dlwogus825@gmail.com",
  "010-6494-7516",
  "충암고등학교",
  "2020051078"
);

st1.print();