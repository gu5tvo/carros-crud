const express = require('express');
const {Pool} = require('pg');
require('dotenv').config();
const cors = require('cors');

const PORT = 3000 ;
const pool = Pool({
  connectionString: process.env.DATABASE_URL,
})

const app = express();

app.use(express.json());
app.use(cors);

app.get('/', (req, res) => {
    console.log(req.body.cor);
    console.log('conectado na porta', PORT);
    return res.status(200).json({ message: 'deu ruim' });
});

app.listen(PORT, () => console.log('server funcionando na porta', PORT));
