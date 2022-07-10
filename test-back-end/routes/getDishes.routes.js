"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getDishes_controller_1 = __importDefault(require("../controller/getDishes.controller"));
const router = express_1.default.Router();
router.get('/getDishes', getDishes_controller_1.default.getDishes);
exports.default = router;
