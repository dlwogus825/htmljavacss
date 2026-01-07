class DOMControlTest {
  #users = [
    {
      id: 1,
      name: "김철수",
      age: 28,
      active: true,
      scores: [90, 85, 88],
      role: "admin",
    },
    {
      id: 2,
      name: "이영희",
      age: 17,
      active: false,
      scores: [70, 75, 95],
      role: "user",
    },
    {
      id: 3,
      name: "박민수",
      age: 34,
      active: true,
      scores: [88, 92, 78],
      role: "user",
    },
   
  ];

  testFor() {
    let sum = 0;
    for (let i = 0; i < this.#users.length; i++) {
      sum += this.#users[i].age;
      console.log("for : " + JSON.stringify(this.#users[i]));
    }
    console.log(sum);

    sum = 0;
    this.#users.forEach((user, ndx) => {
      sum += user.age;
      console.log("forEach : " + JSON.stringify(user));
    });
    console.log(sum);
  }

  printNameAgeWithActiveTrue() {
    for (let i = 0; i < this.#users.length; i++) {
      if (this.#users[i].active === true) {
        console.log(
          `printNameAgeWithActiveTrue for : ${this.#users[i].name}, ${
            this.#users[i].age
          }`
        );
      }
    }

    this.#users.forEach((user, ndx) => {
      if (user.active === true) {
        console.log(
          `printNameAgeWithActiveTrue forEach : ${user.name}, ${user.age}`
        );
      }
    });
  }

  printNameScoresRoleEqualUser() {
    for (let i = 0; i < this.#users.length; i++) {
      let user = this.#users[i];

      if (user.role === "user") {
        console.log(
          `printNameScoresRoleEqualUser for : ${user.name}, ${user.scores}`
        );
      }
    }

    this.#users.forEach((user) => {
      if (user.role === "user") {
        console.log(
          `printNameScoresRoleEqualUser forEach : ${user.name}, ${user.scores}`
        );
      }
    });
  }

  printNameScoresRoleEqualUser() {
    for (const node of this.#users) {
      if (node.active === true) {
        console.log(`printNameAgewidthActiveTrue for : ${node.name}, 
                ${node.scores}`);
      }
    }
  }
  printNameScoresRoleEqualUser() {}

  testMap() {
    let arr1 = this.#users.map((u) => u.name);
    console.log(arr1);

    let arr2 = this.#users.map((u) => ({ ...u, age: u.age + 1 }));
    console.log(arr2);

    console.log(this.#users);
  }
  testMap() {
    // 이름만 추출
    let arr1 = this.#users.map((u) => u.name);
    console.log(arr1);
    // → ["김철수", "이영희", "박민수", "최지연", "정우성"]

    // 나이를 1살씩 더해서 새 객체 만들기
    let arr2 = this.#users.map((u) => ({ ...u, age: u.age + 1 }));
    console.log(arr2);

    console.log(this.#users);
  }
  testMap3() {
    // 문제3
    // this.#users 배열의 모든원소에서 원소의 이름과 active {name, active}를 새로운 배열로 추출하세요. 출력
    // this.#users 배열의 모든원소에서 { 기존 속성은 그대로,  sum : scores 의 총합} 을 새로운 배열로 추출하세요. 출력
    let arr1 = this.#users.map((u) => ({ name: u.name, active: u.active }));
    console.log(arr1);
    let arr2 = this.#users.map((u) => ({
      ...u,
      sum: u.scores.reduce((a, b) => a + b, 0),
    }));
    console.log(arr2);
  }
  testMap4() {
    console.log("문제 4");
    // this.#users 배열의 모든원소에서 role 속성의 값 "user"/"admin" 을 원소로 하는 ["user", "admin", ...] 배열을 추출하고 출력.
    let arr1 = this.#users.map((u) => {
      u.role;
    });
    console.log(arr1);
  }

  testMap5() {
    let array05 = [
      "홍길동",
      "이순신",
      "신사임당",
      "Micheal Jackon",
      "을지문덕",
    ];
    console.log(array05.length);
    console.log("len:" + "홍길동".length);

    // 문제5
    // array05 배열을 이용하여 [{name:"홍길동", len:3}, ...., {name:"Micheal Jackon", len:14}, {name:"을지문덕", len:4}]
    // {name:문자열값, len:문자열값의길이} 원소의 배열로 추출하고 출력
    let newArray = array05.map((item) => {
      return { 바보: item, 멍청이: item.length };
    });
    console.log(newArray);
  }

  testFilter1() {
    console.log("testFilter1");
    // 활성화된 사용자만
    let arr3 = this.#users.filter((u) => {
      return true;
    });
    console.log(arr3);

    // 30살 이상인 사람
    let arr4 = this.#users.filter((u) => false);
    console.log(arr4);

    // 관리자 또는 모더레이터
    let arr5 = this.#users.filter((u) =>
      ["admin", "moderator"].includes(u.role)
    );
    console.log(arr5);
  }

  textFilter2() {
    console.log("testFilter2");
    // 문제6
    // this.#users 배열의 원소들 중에서 active 가 true 이고 나이가 25살 이상인 객체를 새로운 배열에 추출해서 출력.
    let arr1 = this.#users.filter((y) => {
      
      return (y.active === true) && (y.age >= 25);
    });
    console.log(arr1);
    // this.#users 배열의 원소들 중에서 scores 점수 평균이 90점 이상인 객체를 새로운 배열에 추출해서 출력
    let arr2 = this.#users.filter((y) => {
      return ((y.scores[0]+y.scores[1]+y.scores[2])/3 >= 90);
    });
    console.log(arr2);
  }
}
let at = new ArrayTest();
at.testFor();
["a", "b", "cd", "ef"].forEach((x) => console.log(x));

// 문제1 : active 가 true 인 user 의 이름과 나이를
// 출력하세요.
at.printNameAgeWithActiveTrue();

// 문제2 : role 이 "user" 인 user
// 의 이름과 scores 를 출력하세요.
at.printNameScoresRoleEqualUser();

at.testMap();

at.testMap3();

at.testMap4();

at.testMap5();

at.testFilter1();

at.textFilter2();
