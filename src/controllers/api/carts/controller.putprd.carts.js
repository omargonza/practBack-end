import { cartService } from "../../../services/cart.services.js";

export async function putPrdCart(req, res, next) {
  req.logger.https("inside put products in cart");
  try {
    const productupd = await cartService.updateProducts(
      req.params.cid,
      req.params.pid,
      req.body.quantity,
      req.body
    );
    res.json(productupd);
  } catch (error) {
    req.logger.error(`put product in cart fail ${error.message}`);
    next(error);
  }
}
