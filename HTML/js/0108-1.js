class NintendoGame {
  gameList = [{ id: 0, name: "", genre: "", grade: "", price: 0 }];
  printlist() {
    this.gameList.forEach((item) => {
      $(".frame-2").append(this.printRow(item));
    });
  }

  printRow() {
    <div class="div-3">
      <div class="rectangle-5"></div>
      <div class="rectangle-6"></div>
      <div class="rectangle-7"></div>
      <div class="text-wrapper-2">장르</div>
      <div class="rectangle-8"></div>
      <div class="text-wrapper-3">제목</div>
      <div class="text-wrapper-4">등급</div>
      <div class="rectangle-9"></div>
      <div class="rectangle-10"></div>
      <div class="text-wrapper-5">격투</div>
      <div class="rectangle-11"></div>
      <div class="text-wrapper-6">마리오 카드</div>
      <div class="text-wrapper-7">15세</div>
      <div class="div-4">
        <div class="rectangle-12"></div>
        <div class="rectangle-13"></div>
        <div class="text-wrapper-8">액션</div>
        <div class="rectangle-14"></div>
        <div class="text-wrapper-9">마리오 철권</div>
        <div class="text-wrapper-10">15세</div>
      </div>
    </div>;

    return;
  }
}

$(() => {
  let nint = new NintendoGame();
  nint.printlist();
});
