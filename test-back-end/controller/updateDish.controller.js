"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
class UpdateDishController {
    updateDish(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, category, compound, id } = req.body;
            try {
                const dish = yield server_1.prisma.dishes.update({
                    where: { id: Number(id) },
                    data: {
                        title: title,
                        category: category,
                        compound: compound,
                    },
                });
                res.json(dish);
            }
            catch (error) {
                res.json({ error: `Post with ID ${id} does not exist in the database` });
            }
        });
    }
}
exports.default = new UpdateDishController();
