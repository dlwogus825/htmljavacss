//삼항 연산자란?
//(조건) ? value1 : value1;


// 조건이 참인경우 물음표 바로 옆에 있는 value1이 실행되며 거짓일경우 value2가 실행된다


        let x ;
        let y = 10; 

        x = 20;

        let z = x > y ? "x가 y보다 더 크다" : "X가 y보다 더 작다";


        console.log(z);



        let wentris = 100;
        let leejaehean = 5;
        
        let whowinq = wentris > leejaehean ? "웬트리스는 위대하다 당연히" : "이재현은 분발했다 여전히 웬트리스가 위대하지만";
        console.log(whowinq);   

const array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];

function printOk(name, number, baseNum) {
  (number % baseNum === 0) ? console.log(`${baseNum}의 배수, test01 ${name} : ${number}`) : {};
}

class Study0106 {
  #array01 = [5, 2, 3, 8, 2, 1, 8, 9, 11, 17, 20, 552, 281, 3, 91];

  
  
  test01(baseNum) {

    console.log("baseNum:", baseNum);

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
      // console.log(`${baseNum}의 배수, test01 forEach : ${arrayItem}, ${ndx}, [${arr}]`);
      // }
      // 3항 연산자 : (조건) ? 참일때실행 : 거짓일때실행;
      ( arrayItem % baseNum === 0 ) ? console.log(`${baseNum}의 배수, test01 forEach : ${arrayItem}`) : {};
    });
  }

  print() {
    console.log(this.#array01);
  }
}

let exam = new Study0106();

// 클래스 는 new와 함께 초기화 되지 않으면 쓸수가 없다 초기화 시켜서 examdl이라고 불리게 할거다

exam.test01(2);

//exam이라는 아까 배열의 초기화되어서 지칭되는 exam에 대한 함수 

//new는 객체를 생성하고 메모리를 할당시켜서 데이터를 저장할 수 있도록 만들며 그리고 생성자를 호출시켜서
//객체를 초기화 시키고 그렇게 해서 생성된 객체의 메모리 주소를 변환해 변수에 할당시킨다