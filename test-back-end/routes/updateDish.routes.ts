import express from 'express';
import updateDishController from '../controller/updateDish.controller';

const router = express.Router();

router.put('/updateDish', updateDishController.updateDish);

export default router;
