import express from 'express';
import createDishController from '../controller/createDish.controller';

const router = express.Router();

router.post('/createDish', createDishController.createDish);

export default router;
