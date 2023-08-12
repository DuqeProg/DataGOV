// JSON 데이터를 다루기 위한 JS 기본 사용법

// [1]: 데이터
const person = [
    {"name": "홍길동", "age": 20, "nationality": "Korean"}, // 오브젝트
    {"name": "심청이", "age": 18, "nationality": "China"}, // 쉼표로 감싸면 스트링이 됨.
    {"name": "Enderson", "age": 50, "nationality": "America"},
    {"name": "smith", "age": 30, "nationality": "British"}
];

console.log(typeof person[0]);
console.log(typeof person[1]);

// [2]: 출력
console.log("---------------------------------------------------------");
console.log(person[0].name + " " + person[0].age + " " + person[0].nationality);

// [3]: 반복
console.log("---------------------------------------------------------");
// const str1 = "korea"
console.log(...person); // 전개연산자
// console.log(...str1); // str
// console.log([...str1]); // Array
// console.log({...str1}); // Object
console.log([...person].length);
console.log(typeof [...person][3].name, [...person][3].name);
console.log(typeof person[0].name, person[0].name);
console.log([...person][2].nationality);

// [4]: 반복가능한 객체 for... of... 전개연산자
console.log("---------------------------------------------------------");
for (let ele of person) { // for...of는 반복가능한 객체가 오면 된다.
    console.log(ele);
}




