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

// [5]: 수정
console.log("---------------------------------------------------------");
person[0].name = "홍길자";
person[0].age = 55;
console.log(`홍길동의 이름이 ${person[0].name}로 수정되었고, 나이는 20에서 ${person[0].age}로 변경되었음.`)

for (let i in person) { // address
    console.log(i);
}

for (let k in person[0]) { // key 추출
    console.log(k);
}

for (let i in person) {
    console.log(person.values[i]);
}