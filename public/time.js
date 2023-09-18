const WEEK = ["일", "월" ,"화", "수", "목", "금", "토"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText =
            timeindex(now.getHours(), 2) + ":" +
            timeindex(now.getMinutes(), 2) + ":" +
            timeindex(now.getSeconds(), 2);

    document.getElementById("date").innerText =
            now.getFullYear() + "-" +
            timeindex(now.getMonth() + 1, 2) + "-" +
            timeindex(now.getDate(), 2) + " " +
            WEEK[now.getDay()] + "요일";
}

updateTime();
setInterval(updateTime, 1000);

function timeindex(num, digit) {
    return String(num).padStart(digit, '0');
}
