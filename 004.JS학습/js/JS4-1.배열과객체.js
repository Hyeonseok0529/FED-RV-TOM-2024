// JS4-1.배열과객체 JS

/**********************************************
     [ 배열(Array) 변수란? ]

    - 여러개의 데이터를 묶음으로 변수하나에 저장함
    - 장점: 데이터를 취급하고 다루는데 편의성 제공
    - 각 데이터를 하나의 이름으로 구분하여 호출할
    수 있는 메모리공간이다!
    (예: 계란한판, 아파트 등)

    [ 배열의 선언의 2가지 방식 ]

    1. new 키워드 선언방식
    - new Array()
    객체를 실제로 메모리안에 생성하는 방법을 제공
    이를 인스턴스(instance)라고 함!

    2. 리터럴 선언방식 (배열리터럴)
    - 변수 = []


    - 객체란 속성과 메서드를 가지고 있는 프로그램 단위체
    - 객체는 독립된 특성을 가지고 있어야함!

    예컨데 자동차, 볼펜, 물통, 가방 등
    독립된 별도의 기능이 있어야하고 명사적특징과
    동사적 특징이 모두 있어야 객체다!

**********************************************/

// 1. 배열 셋팅하고 출력하기 ////////////////
// 1-1. new 키워드로 배열선언 및 할당하기
// 그런데 배열은 굳이 new키워드로 선언할 필요는 없다!
// 배열 리터럴로 생성할 수 있다!
const arr1 = new Array(
    "1990년 4월 24일",
    "166cm",
    "46kg",
    [2014,"더바디샵"],
    ["미스터션샤인","리틀 포레스트","정년이"],
    "김태리"
);

// new 키워드로 선언과 할당을 동시에 할 수 있다!
// 소괄호안에 컴마로 값을 구분하여 사용함!

// 배열변수에 할당한 데이터 불러오기
// 호출방법 : 배열변수명[순번] -> 순번은 0부터!
console.log("arr1:", 
    arr1, 
    typeof arr1, 
    "배열이니?",
    Array.isArray(arr1)?
    "응, 배열맞아!":"아니, 배열아냐!"
    // 비?집:놀이동산 -> 삼항연산자(조건연산자)
);
// typeof(변수) / typeof 변수 -> 데이터형 출력!
// 배열의 데이터형을 찍으면 object라고 나옴
// 이것은 배열도 객체이기 때문!
// 배열인지 검사하는 방법은 Array.isArray(변수)
// -> 배열여부를 알아내는 메서드는 중요함!

// 출력 대상 : .cont (여러개임!)
const target = document.querySelectorAll(".cont");

console.log("출력대상:", target);

// 여기서 출력대상은 .cont중 첫번째것!
target[0].innerHTML = `
    이름: ${arr1[5]}/
    키: ${arr1[1]}/
    몸무게: ${arr1[2]}/
    대표작: ${arr1[4]}/
    데뷔년도: ${arr1[3][0]}
`;
// 배열안에 배열이 또 있으면 대괄호를 추가하여
// 해당 순번을 써준다! 변수[순번][순번]