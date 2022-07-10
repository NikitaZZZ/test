import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const port = 5000;

app.post('/createDish', async (req, res) => {
  const { title, category, compound, image, id } = req.body;

  const result = await prisma.dishes.create({
    data: {
      title,
      category,
      compound,
      image,
      id,
    },
  });

  res.json(result);
});

app.put('/updateDish', async (req, res) => {
  const { title, category, compound, id } = req.body;

  try {
    const dish = await prisma.dishes.update({
      where: { id: Number(id) },
      data: {
        title: title,
        category: category,
        compound: compound,
      },
    });

    res.json(dish);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
});

app.get('/getDishes', async (req, res) => {
  try {
    const dishes = await prisma.dishes.findMany();

    res.json(dishes);
  } catch {
    console.log('there is no dishes');
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});
