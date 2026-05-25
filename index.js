 const db = require('./db');
 const express = require('express');
 const app = express();
 app.use(express.json());   
 app.use(express.static('public'));
 app.get('/', (req, res) => {
     res.send('The URL shortener is running!');
 });

 app.post('/shorten', async(req, res) => {
     const longurl =  req.body.url;
     const code = Math.random().toString(36).substring(2, 8);

     await db.query('INSERT INTO urls (code,long_url) VALUES ($1, $2)', [code, longurl]);
     res.json({ short_url: `http://localhost:3000/${code}` })
 });

app.get('/:code' , async(req, res) => {
    const code =  req.params.code;

    const result =await db.query('SELECT long_url FROM urls WHERE code = $1', [code]);

    if(result.rows.length === 0) {
        return res.status(404).send('URL not fgound');
    }

    await db.query('UPDATE urls SET clicks = clicks + 1 WHERE code = $1', [code]);

    res.redirect(result.rows[0].long_url);
});

 app.listen(3000, () => {
     console.log('Server is running on port 3000');
 });