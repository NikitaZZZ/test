import express from 'express';
import GetDishesController from '../controller/getDishes.controller';

const router = express.Router();

router.get('/getDishes', GetDishesController.getDishes);

export default router;
