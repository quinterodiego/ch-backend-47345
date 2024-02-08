import { Router } from 'express'

import productsRouter from './products.routes.js'
import productsFakerRouter from './productsFaker.routes.js'
import { productRouterView } from './productsView.routes.js'
import cartsRouter from './carts.routes.js'
import { cartRouterView } from './cartView.routes.js'
import { authRouter } from './auth.routes.js'
import emailRouter from './emails.routes.js'

export default class MainRouter {
  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes() {
   this.router.use('/api/products', productsRouter)
   this.router.use('/mockingproducts', productsFakerRouter)
   this.router.use('/api/carts', cartsRouter)
    //this.router.use('/api/chat', messagesRouter)
   this.router.use('/', authRouter)
   this.router.use('/api/send', emailRouter)
   this.router.use('/products', productRouterView)
   this.router.use('/cart', cartRouterView);
  }

  getRouter() {
    return this.router;
  }
}