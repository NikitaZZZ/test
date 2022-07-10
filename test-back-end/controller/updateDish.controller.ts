import { Request, Response } from 'express';
import { prisma } from '../server';

class UpdateDishController {
  async updateDish(req: Request, res: Response) {
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
  }
}

export default new UpdateDishController();
