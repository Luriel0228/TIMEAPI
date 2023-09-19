const WEEK = ["일", "월" ,"화", "수", "목", "금", "토"];

function timeindex(num, digit) {
    return String(num).padStart(digit, '0');
}

function updateServerTime() {
    fetch('/api/time')
        .then(response => response.json())
        .then(data => {
            const serverTime = data.time;
            const serverDate = data.date;

            document.getElementById("time").innerText =
                serverTime.hours + ":" +
                serverTime.minutes + ":" +
                serverTime.seconds;

            document.getElementById("date").innerText =
                serverDate.year + "-" +
                serverDate.month + "-" +
                serverDate.day + " " +
                serverDate.dayOfWeek;
        })
        .catch(error => console.error('Error:', error));
}

updateServerTime();
setInterval(updateServerTime, 1000);
