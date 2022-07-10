"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateDish_controller_1 = __importDefault(require("../controller/updateDish.controller"));
const router = express_1.default.Router();
router.put('/updateDish', updateDish_controller_1.default.updateDish);
exports.default = router;
