const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();


app.get('/test', (req, res) => {
    res.json({ hello: 'world' });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});