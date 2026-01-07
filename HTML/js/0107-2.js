class DOMControlTest {
  #users = [
    { id: 1, name: "김철수", kor: 90, eng: 85, mat: 88, clss: "3-1" },
    { id: 2, name: "이영희", kor: 78, eng: 69, mat: 91, clss: "3-3" },
    { id: 3, name: "박민수", kor: 75, eng: 69, mat: 82, clss: "3-2" },
  ];

  printHtml() {
    $("#ulList .dataLi").remove();

    this.#users.forEach((student) => {
      $("#ulList").append(this.getOneHtmlStudent(student));
    });
  }

  getOneHtmlStudent(student) {
    return `
      <li class="dataLi">
        <div>${student.id}</div>
        <div>${student.name}</div>
        <div>${student.kor}</div>
        <div>${student.eng}</div>
        <div>${student.mat}</div>
        <div>${student.clss}</div>
      </li>
    `;
  }

 addStudent() {
  const student = {
    id: Number($("#id").val()),
    name: $("#name").val(),
    kor: Number($("#kor").val()),
    eng: Number($("#eng").val()),
    mat: Number($("#mat").val()),
    clss: $("#clss").val(),
  };

  this.#users.push(student);

  $("#id, #name, #kor, #eng, #mat, #clss").val("");
}

}

$(function () {
  const domCtrl = new DOMControlTest();
  domCtrl.printHtml();

  $("#btnAddStudent").on("click", function () {
    domCtrl.addStudent();
    domCtrl.printHtml();
  });
});
