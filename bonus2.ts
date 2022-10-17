// && 를 이용한 narrowing
function abc(a: string | undefined) {
  if (a && typeof a === "string") {
    // a가 undefined이면 실행x
    // a가 string이면 실행
  }
}

// in keyword로 narrowing : 배타적인 속성이 있어야한다.
type Fish = { swim: string };
type Bird = { fly: string };

function abcd(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

// instanceof 연산자로 narrowing
let date = new Date();
if (date instanceof Date) {
}

//
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

// wheel이 배타적
function carbike(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입이에요");
  }
}
