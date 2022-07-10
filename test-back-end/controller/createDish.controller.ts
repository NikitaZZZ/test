import { Request, Response } from 'express';
import { prisma } from '../server';

class CreateDishController {
  async createDish(req: Request, res: Response) {
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
  }
}

export default new CreateDishController();
