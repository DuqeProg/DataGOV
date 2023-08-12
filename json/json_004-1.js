window.onload = () => {
    const secretary = {
        "수석실" : {
            "정무": "이철희",
            "국민소통": "박수현",
            "민정": "김영식",
            "시민사회": "방정균",
            "인사": "김외숙"
        },
        "보조기관": [
            "총무", "의전", "제1부속", "재2부속"
        ],
        "정책실장": "이호승"
    }

    let sub_secretary = "";
    sub_secretary = secretary.보조기관[2];
    document.getElementById("aaa").innerText = sub_secretary;
}