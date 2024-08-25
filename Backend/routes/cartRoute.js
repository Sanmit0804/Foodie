import express from 'express'
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js'

const cartRouter = express.Router();
