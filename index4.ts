// function
function double(x: number): number {
  return x * 2;
}

double(30);
double(90);

// function void : return 하기 싫을 때 사용
function double2(x: number): void {
  x * 2;
}

// function option : 들어올수도 있다 ~ >>> ?는 numer | undefined 와 같은 뜻이다.
function options(x?: number): void {}

// ex1)
function sayHi(x?: string) {
  if (x) {
    console.log("안녕하새요" + x);
  } else {
    console.log("입력안함");
  }
}

// ex2)
function example(x: number | string): number {
  return x.toString().length;
}

// ex3)
function merryMe(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;
  if (house == true) {
    score += 500;
  }
  if (charm === "high") {
    score += 100;
  }
  if (score >= 600) {
    return "merry";
  }
}
console.log(merryMe(400, true, "high"));
