// Array stream 함수
// Array.메소드();
// let 변수명 = [원소1, 원소2, 요소3, 요소4, ...];
// 변수명.메소드();

const array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];

function printOk(name, number, baseNum) {
  (number % baseNum === 0) ? console.log(`${baseNum}의 배수, test01 ${name} : ${number}`) : {};
}

class Study0106 {
  #array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];

  test01(baseNum) {
    for ( let n = 0; n < this.#array01.length; n++ ) {
      // 모든 원소중에서 baseNum의 배수 값을 console.log 에 출력한다.
      printOk("for", this.#array01[n], baseNum);
      if ( this.#array01[n] % baseNum === 0 ) {
        console.log(`${baseNum}의 배수, test01 for : ${this.#array01[n]}`);
      }
      // 3항 연산자 : (조건) ? 참일때실행 : 거짓일때실행;
      ( this.#array01[n] % baseNum === 0 ) ? console.log(`${baseNum}의 배수, test01 for : ${this.#array01[n]}`) : {};
    }
    for ( const num of this.#array01 ) {
      // 모든 원소중에서 baseNum의 배수 값을 console.log 에 출력한다.
      printOk("for of", num, baseNum);
      if ( num % baseNum === 0 ) {
        console.log(`${baseNum}의 배수, test01 of : ${num}`);
      }
      // 3항 연산자 : (조건) ? 참일때실행 : 거짓일때실행;
      ( num % baseNum === 0 ) ? console.log(`${baseNum}의 배수, test01 of : ${num}`) : {};
    }
    this.#array01.forEach(function(arrayItem, ndx, arr) {
      // 모든 원소중에서 baseNum의 배수 값을 console.log 에 출력한다.
      printOk("forEach", arrayItem, baseNum);
      // if ( arrayItem % baseNum === 0 ) {
      //   console.log(`${baseNum}의 배수, test01 forEach : ${arrayItem}, ${ndx}, [${arr}]`);
      // }
      // // 3항 연산자 : (조건) ? 참일때실행 : 거짓일때실행;
      // ( arrayItem % baseNum === 0 ) ? console.log(`${baseNum}의 배수, test01 forEach : ${arrayItem}`) : {};
    });
  }

  print() {
    console.log(this.#array01);
  }

  testMap() {
    let newArray = this.#array01.map(function(x, index, array) {
      console.log(`testMap : ${x}, ${index}, [${array}]`)
      return x * 10;
    });
    console.log(newArray);
    // 문제3
    // array01 배열의 모든 원소를 문자열로 변환해서 문자열 배열로 추출하고 출력하세요
    let newArray2 = this.#array01.map(function(n, i, arr) {
      // return item + ""/*각 원소를 문자열로 리턴 => 리턴되는 배열은 모든 원소를 문자열로 가지고 있다.*/;
      // return item / 5/*각 원소를 5로 나눈 값을 새로운 배열로 리턴*/;
  // #array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];
      return {value:n, index:i};
    });
    console.log(newArray2);

    let localArray3 = [{"value":5,"index":0},{"value":2,"index":1},{"value":3,"index":2},{"value":8,"index":3},{"value":2,"index":4},{"value":1,"index":5},{"value":8,"index":6},{"value":9,"index":7},{"value":11,"index":8},{"value":17,"index":9},{"value":20,"index":10},{"value":552,"index":11},{"value":281,"index":12},{"value":3,"index":13},{"value":91,"index":14}];
    let newArray3 = localArray3.map((item, index, array) => {
      return {value:item.value, index:item.index, vip:`${item.value}${item.index}`}/*새로운배열은 [{value:5, index:0, vip:"50"}, {value:2, index:1, vip:"21"}, {value:3,index:2,vip:"32"}...{value:552,index:11,vip:"55211"}...]*/;
    });
    console.log(newArray3);
     newArray3 = [{"value":5,"index":0,"vip":"50"},{"value":2,"index":1,"vip":"21"},{"value":3,"index":2,"vip":"32"},{"value":8,"index":3,"vip":"83"},{"value":2,"index":4,"vip":"24"},{"value":1,"index":5,"vip":"15"},{"value":8,"index":6,"vip":"86"},{"value":9,"index":7,"vip":"97"},{"value":11,"index":8,"vip":"118"},{"value":17,"index":9,"vip":"179"},{"value":20,"index":10,"vip":"2010"},{"value":552,"index":11,"vip":"55211"},{"value":281,"index":12,"vip":"28112"},{"value":3,"index":13,"vip":"313"},{"value":91,"index":14,"vip":"9114"}];
    
    
    let newArray4 = newArray3.map((item, index, array) => {
      return item.vip;
    });

    newArray4.sort();


    console.log(newArray4);



  }

   testFilter() {
    console.log("testFilter");
   // array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];
    let newArray1 = this.#array01.filter((item, index, array) => {
      // 새로운배열은 길이가 3글자 이상인 원소만 가지고 있으세요. 100 이상 => [552, 281]
      return (item > 100);
    });
    console.log(newArray1);
  }



  testFilter() {
    console.log("testFilter");
   // array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];
    let newArray1 = this.#array01.filter((item, index, array) => {
      // 새로운배열은 길이가 3글자 이상인 원소만 가지고 있으세요. 100 이상 => [552, 281]
      return (item < 10);
    });
    console.log(newArray1);




    console.log(newArray1);

    let localArray3 = [{"value":5,"index":0},{"value":2,"index":1},{"value":3,"index":2},{"value":8,"index":3},{"value":2,"index":4},{"value":1,"index":5},{"value":8,"index":6},{"value":9,"index":7},{"value":11,"index":8},{"value":17,"index":9},{"value":20,"index":10},{"value":552,"index":11},{"value":281,"index":12},{"value":3,"index":13},{"value":91,"index":14}];
    let localArray4 = localArray3.filter((node, ndx, arr) => {
      // 새로운배열은 value 와 index 의 차값(value - index)이 20 이하인 값만 원소로 가지고 있으세요.
      let a = 0
      return (((node.value - ndx) <= 20));
    });
     console.log(localArray4);

  }


  

}





let exam = new Study0106();

exam.test01(2);

// 문제 2
// array01 배열의 모든 원소를 순환하는 for, for of, forEach 3개를 구현한다.
// 3의 배수인 원소 값을 console.log 에 출력한다.
exam.test01(3);

exam.testMap();

exam.print();



exam.testFilter();