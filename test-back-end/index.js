import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'test',
  password: 'postgrespw',
  dialect: 'postgres',
  port: 55002,
});

//Database connection and also please create postgres database first
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }

  client.query('SELECT NOW()', (err, result) => {
    release();

    if (err) {
      return console.error('Error executing query', err.stack);
    }

    console.log('Connected to Database!');
  });
});

app.post('/createDish', async (req, res) => {
  const { title, category, compound, id } = req.body;

  pool.query(
    'INSERT INTO dishes (title, category, compound, id) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, category, compound, id],
  );
});

app.put('/updateDish', async (req, res) => {
  const { title, category, compound, id } = req.body;

  pool.query('UPDATE dishes SET title = $1, category = $2, compound = $3, id = $4 WHERE id = $4', [
    title,
    category,
    compound,
    id,
  ]);
});

app.get('/getDishes', async (req, res) => {
  const dishes = await pool.query('SELECT * FROM dishes');

  res.json(dishes);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});
