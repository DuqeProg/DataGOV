// JSON 데이터를 웹페이지로 출력하기
// Parsing ---> 다른 형식으로 저장된 데이터를 목적에 맞는 형태의 형식으로 변환하는 것
// JSON.Parsing ---> JSON 형식의 텍스트 문자열을 목적에 맞게 객체로 변환

window.onload = () => {
    document.getElementById("btn").addEventListener("click", function() {
        console.log("test..");
        //========================================================
        let json = {
            "book": [
                {
                    "isbn": "123-456-789",
                    "author": {
                        "name": "홍길동",
                        "email": "hong@hongkildong.com"
                    },
                    "editor": {
                        "name": "이순신",
                        "email": "lee@leesoonsin.com"
                    },
                    "title": "대한민국의 정의는 죽었는가",
                    "category": [
                        "non-fiction", "IT", "Politics"
                    ],
                    "picture": "image/test.jpg",
                    "description": "백두산 저자의 야심찬 신작! 절찬리에 판매중~",
                    "comments": [
                        {"id": "정인봉", "text": "정의에 대해서 알 것 같습니다."},
                        {"id": "김진경", "text": "무거운 주제를 무겁지 않게 써 주셔서 감사합니다."},
                        {"id": "홍수범", "text": "책 산날 제일 많이 읽었어요..ㅋㅋ"},
                        {"id": "이정길", "text": "2권은 없나요? 또 쓰시면 또 구매할께요~"},
                        {"id": "한상국", "text": "이벤트 때문에 구매했지만 없었어도 구매할 것 같습니다."},
                        {"id": "유명준", "text": "너무 잘 읽었습니다. 감사합니다."},
                        {"id": "신재원", "text": "대학생이라면 필독서~"}
                    ],
                    "comwinner": [
                        "김진경",
                        "이정길",
                        "신재원"
                    ],
                    "add1": false,
                    "add2": true
                },
                {
                    "isbn": "123-456-7892",
                    "author": {
                        "name": "홍길동2",
                        "email": "hong@hongkildong.com2"
                    },
                    "editor": {
                        "name": "이순신2",
                        "email": "lee@leesoonsin.com2"
                    },
                    "title": "대한민국의 정의는 죽었는가2",
                    "category": [
                        "non-fiction", "IT", "Politics"
                    ],
                    "picture": "image/test.jpg",
                    "description": "백두산 저자의 야심찬 신작! 절찬리에 판매중~2",
                    "comments": [
                        {"id": "정인봉2", "text": "정의에 대해서 알 것 같습니다."},
                        {"id": "김진경2", "text": "무거운 주제를 무겁지 않게 써 주셔서 감사합니다."},
                        {"id": "홍수범2", "text": "책 산날 제일 많이 읽었어요..ㅋㅋ"},
                        {"id": "이정길2", "text": "2권은 없나요? 또 쓰시면 또 구매할께요~"},
                        {"id": "한상국2", "text": "이벤트 때문에 구매했지만 없었어도 구매할 것 같습니다."},
                        {"id": "유명준2", "text": "너무 잘 읽었습니다. 감사합니다."},
                        {"id": "신재원2", "text": "대학생이라면 필독서~"}
                    ],
                    "comwinner": [
                        "김진경2",
                        "이정길2",
                        "신재원2"
                    ],
                    "add12": false,
                    "add22": true
                }
            ]
        }
        json = json["book"];
        // console.log(json[1].isbn2);
        // console.log(json[1].author2);
        // console.log(json[1].category2[1]);
        // console.log(json[1].comments2[json[1].comments2.length - 1]);

        /* for (let i = 0; i < json.length; i++) {
            console.log(json[i].comments);
            console.log(json[i].comwinner);
        }*/

        for (let i = 0; i < json.length; i++) {
            for (let j = 0; j < json[i].comments.length; j++) {
                let bookComments = json[i].comments[j];
                // 댓글 참가자
                console.log(`${bookComments.id} : ${bookComments.text}`);
            }
            // 댓글 당첨자
            console.log(json[i].comwinner.join(", "));
            console.log(typeof json[i].comwinner.join(", "));
        }
        //========================================================
    });
}