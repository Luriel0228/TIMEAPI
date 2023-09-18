const express = require('express');
const pathModule = require('path');
const app = express();
const port = process.env.PORT || 3000;

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

function timeindex(num, digit) {
    return String(num).padStart(digit, '0');
}

app.use(express.static('public'));

app.get('/', (req, res) => {
    const filePath = pathModule.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

app.get('/api/time', (req, res) => {
    const now = new Date();
    const time = {
        hours: timeindex(now.getHours(), 2),
        minutes: timeindex(now.getMinutes(), 2),
        seconds: timeindex(now.getSeconds(), 2)
    };

    const date = {
        year: now.getFullYear(),
        month: timeindex(now.getMonth() + 1, 2),
        day: timeindex(now.getDate(), 2),
        dayOfWeek: WEEK[now.getDay()]
    };

    res.json({ time, date });
});

app.listen(port, () => {
    console.log(`SERVER ON IN http://localhost:${port}`);
});
