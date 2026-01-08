class DOMControlTest {
  #users = [
    {
      id: 1,
      name: "김철수",
      kor: 90,
      eng: 85,
      mat: 88,
      clss: "3-1",
    },
    {
      id: 2,
      name: "이영희",
      kor: 78,
      eng: 69,
      mat: 91,
      clss: "3-3",
    },
    {
      id: 3,
      name: "박민수",
      kor: 75,
      eng: 69,
      mat: 82,
      clss: "3-2",
    },
  ];

  printHtml() {
    $("#ulList").empty();
    this.#users.forEach((student) => {
      $("#ulList").append(this.getOneHtmlStudent(student));
    });
  }

  getOneHtmlStudent(student) {
    let oneHtml = `
<div class="dataLi oneRow">
  <div>
    <div>${student.id}</div>
  </div>
  <div>
    <div>${student.name}</div>
  </div>
  <div>
    <div>${student.kor}</div>
  </div>
  <div>
    <div>${student.eng}</div>
  </div>
  <div>
    <div>${student.mat}</div>
  </div>
  <div>
    <div>${student.clss}</div>
  </div>
</div>`;
    return oneHtml;
  }

  addStudent() {
    /*
    1번.
    <input type="number" id="id" />
    <input type="text" id="name" />
    ....
    <input type="text" id="clss" /> 입력박스들
    의 value 값을 가져와서 아래의 형태로 javascript 객체로 만들어야 한다.
    {
      id: 3,
      name: "박민수",
      kor: 75,
      eng: 69,
      mat: 82,
      clss: "3-2",
    }
    2번
      1번에서 만든 객체를 this.#users 배열 뒤의 요소에 추가해야 한다.
    */
    let tmp = {
      id: $("#id").val(),
      name: "박민수",
      kor: 75,
      eng: 69,
      mat: 82,
      clss: "3-2",
    };
    this.#users.push(tmp);
  }
}

$(function () {
  let domCtrl = new DOMControlTest();
  domCtrl.printHtml();

  $("#btnAddStudent").click(function (e) {
    e.preventDefault();
    domCtrl.addStudent();
    domCtrl.printHtml();
  });
});
