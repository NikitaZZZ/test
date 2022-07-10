import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import createDishRouter from './routes/createDish.routes';
import updateDishRouter from './routes/updateDish.routes';
import getDishesRouter from './routes/getDishes.routes';

dotenv.config();

export const prisma: PrismaClient = new PrismaClient();
const app: Application = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/createDish', createDishRouter);
app.use('/updateDish', updateDishRouter);
app.use('/getDishes', getDishesRouter);

app.listen(PORT, () => console.log(`Server running on post ${PORT}`));
