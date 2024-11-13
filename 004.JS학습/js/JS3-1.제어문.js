// JS3-1.제어문 JS /////////

// 본 파일 로딩확인
console.log("나, 제어문 테스트!");

// 1. if문 처리를 위한 함수 만들기 //////
/************************************** 
    함수명 : showJumsu
    기능 : 점수에 따른 평가를 출력함
        1. 점수에 따른 메시지 출력
        2. 점수에 따른 메시지 글자색변경
        3. 점수에 따른 칭찬스티커 보이기
**************************************/
// 이름있는 함수를 선언적 함수라고함!
function showJumsu(){
    // 1. 함수호출확인!
    console.log("내 평가를 알려줘!");

    // 2. 대상선정 ////////
    // 2-1. 점수입력요소 : input#jumsu
    var jumsu = document.querySelector('#jumsu');

    // 2-2. 출력요소 : .jexp
    var jexp = document.querySelector('.jexp');

    // 2-3. 칭찬스티커요소 : .jshow
    var jshow = document.querySelector('.jshow');

    console.log("선택요소:",jumsu, jexp, jshow);
} /////////// showJumsu함수 /////////////