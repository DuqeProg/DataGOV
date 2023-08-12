// 중첩된 json 데이터 다루기
// 한 권의 도서정보를 가지고 있는 json 데이터에서 해당 도서가 속해있는 카테고리를 출력하시오.

// 중첩데이터
window.onload = () => {
    const book = {
        "isbn": "123-456-789",
        "author": {
            "name": "유시민",
            "email": "ryu@abc.com",
        },
        "editor": {
            "name": "류시만",
            "email": "min@abc.com",
        },
        "title": "국가란 무엇인가?",
        "category": [
            "non-fiction", "IT", "novel"
        ]
    }
    /*
    console.log(typeof book.author.name, book.author.name);
    console.log(typeof book["editor"].name, book["editor"].name);
    console.log(book.category[2]);
    */
    
    //개별 엑세스
    let val = "";
    // val = book.category.title[1];
    // document.getElementById("aaa").innerText = val;

    // 반복문을 이용한 엑세스
    // traditional method
    // for (let i = 0; i < book.category.length; i++) {
        // val += book.category[i] + "<br>";
    //     val += `카테고리는 ${book.category[i]} 입니다.<br>`;
    // };
    // document.getElementById("aaa").innerHTML = val;

    // for...in
    // for (let i in book.category) {
    //     val += `카테고리에는 ${book.category[i]}가 있습니다. <br>`;
    // };
    // document.getElementById("aaa").innerHTML = val;

    // for...of
    for (let value of book.category) {
        val += `카테고리에는 ${value} <br>`;
    };
    document.getElementById("aaa").innerHTML = val;
};