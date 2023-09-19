const express = require('express');
const pathModule = require('path');
const app = express();
const port = process.env.PORT || 84;

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

function timeindex(num, digit) {
    return String(num).padStart(digit, '0');
}

app.use(express.static('static'));

app.get('/', (req, res) => {
    const filePath = pathModule.join(__dirname, 'template', 'index.html');
    res.sendFile(filePath);
});

app.get('/discord', (req, res) => {
    res.redirect('https://discord.com')
});

app.get('/api/time', (req, res) => {
    var now = new Date();

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

app.use('/api', (req, res, next) => {
    res.status(404).json({ error: 'API Not Found' });
});

app.use((req, res, next) => {
    const filePath404 = pathModule.join(__dirname, 'template', '404.html');
    const filePath401 = pathModule.join(__dirname, 'template', '401.html')
    res.status(404).sendFile(filePath404);
    res.status(401).sendFile(filePath401);    
});

app.listen(port, () => {
    console.log(`SERVER ON IN http://localhost:${port}`);
});
