const WEEK = ["일", "월" ,"화", "수", "목", "금", "토"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText =
            zeroPadding(now.getHours(), 2) + ":" +
            zeroPadding(now.getMinutes(), 2) + ":" +
            zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
            now.getFullYear() + "-" +
            zeroPadding(now.getMonth() + 1, 2) + "-" +
            zeroPadding(now.getDate(), 2) + " " +
            WEEK[now.getDay()] + "요일";
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}