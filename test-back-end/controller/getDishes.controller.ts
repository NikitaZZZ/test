import { Request, Response } from 'express';
import { prisma } from '../server';

class GetDishesController {
  async getDishes(req: Request, res: Response) {
    try {
      const dishes = await prisma.dishes.findMany();

      res.json(dishes);
    } catch {
      console.log('there is no dishes');
    }
  }
}

export default new GetDishesController();
