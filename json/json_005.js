// json 데이터 객체와 문자열로 변환하기
// 객체로 변환시 JSON.parse(), 문자열로 변환시 JSON.stringify() classify 분류하다 

// [1]: JSON.parse(jsonText) ---> JSON형식의 텍스트 ---> 자바스크립트 객체로 변환

let jsonText = '{"name": "홍길동", "age": 20, "nationality": "Korea"}';
console.log(`Before ${typeof jsonText}`);
const jasonObj = JSON.parse(jsonText);
console.log(`After ${typeof jasonObj}`);
console.log("------------------------------------------------");
console.log(jasonObj.name);
console.log(jasonObj.age);
console.log(jasonObj.nationality);
console.log(`이름과 나이는 ${jasonObj.name}(${jasonObj.age})이며 국적은 ${jasonObj.nationality}이다.`);

// JSON.stringify(dataObj)
console.log("------------------------------------------------");
const jsonStr = JSON.stringify(jasonObj);
console.log(typeof jsonStr, jsonStr);