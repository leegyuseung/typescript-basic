// 함수타입은 () => {} 모양으로
type FunctionType = (a: string) => number;

// 함수표현식에만 type alias 사용가능.
let function1: FunctionType = function (a) {
  return 10;
};

// object안에 함수를 저장하기
type Members = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let memberInfo: Members = {
  name: "kim",
  age: 20,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("hi");
  },
};

// object안 함수 실행
memberInfo.plusOne(1);
memberInfo.changeName();

// 콜백함수 : 함수안에 함수 function3가 콜백함수이다.
function function2(a) {
  a();
}

function function3() {}

function2(function3);

// ex
type funcType1 = (a: string) => string;
type funcType2 = (a: string) => number;

function makeFunction(a: string, func1: funcType1, func2: funcType2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

// makeFunction("010-1111-2222", cutZero, removeDash);
