import express from 'express';
import {getProducts, getCustomers} from "../controllers/client.js"

const router = express.Router();

router.get("/products", getProducts);
router.get("/customer", getCustomers)

export default router;