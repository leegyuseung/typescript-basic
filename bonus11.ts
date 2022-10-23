// interface StringOnly {
//   name: string;
//   age: string;
//   location: string;
// }

// interface StringOnly {
//   [key: string]: string | number;
//   // 모든 string type 속성 : string 타입
//   // 한 번에 지정
//   age: number;
// }

interface StringOnly {
  [key: string]: string;
  // 모든 string type 속성 : string 타입
  // 한 번에 지정
}

let user: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

// key 값을 숫자로도 사용가능하다.
interface StringOnly2 {
  [key: number]: string;
}

let user2: StringOnly2 = {
  0: "kim",
  1: "20",
  2: "seoul",
};
user2[0];

// 이런 object 자료 타입지정은? 그냥 냅두거나 아래처럼 정의한다.
// interface myType {
//   "font-size": {
//     "font-size": {
//       "font-size": number;
//     };
//   };
// }

// recursive 하게 타입 만드는 법
interface myType {
  "font-size": Mytype | number;
}

let css = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
