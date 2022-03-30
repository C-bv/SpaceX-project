import express  from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

// app.get('/test', (req, res) => {

// });

// app.get('/about', (req, res) => {
//     res.json({ hello: 'world' });
// });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});