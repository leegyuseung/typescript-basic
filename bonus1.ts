// rest parameter 타입지정
function func(...a: number[]) {
  console.log(a);
}
func(1, 5, 3, 5, 6, 6);

// spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// destructuring
let [var1, var2] = ["안녕", 100];
console.log(var1);

let { students: students, age2: age2 } = { students: true, age2: 20 };
let object2 = { students: true, age2: 20 };

function func2({ students, age2 }: { students: boolean; age2: number }) {
  console.log(students, age2);
}
// func2(object2.students, object2.age2);
func2({ students: true, age2: 20 });
