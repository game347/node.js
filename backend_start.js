const express = require('express');
const app = express();
const port = 3000;

const json = {
    "name": "guide",
    "industry": "music",
    "favorite colors": ["red", "blue"],
    "favorite numbers": [5, 3, 7]
};

app.get('/', (req, res) => {
    res.json(json['favorite numbers']);
});

app.post('/', (req, res) => {
    res.send('POST request received!');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
