import { cartRepository } from "../../../repositories/cart.repositrie.js";
import { ticketsRepository } from "../../../repositories/ticket.repository.js";
import { ticketService } from "../../../services/purchease.service.js";


export async function handlePost(req, res, next) {
  req.logger.https("inside post ticket");
  try {
    // Verificar que req.body tenga la estructura esperada y contenga una propiedad 'cart' válida
    console.log(`Valor de req.body: ${JSON.stringify(req.body)}`);
    if (!req.body || !req.body.cart) {
      // Si req.body o req.body.cart no existen, o req.body.cart no es válido
      return res.status(400).json({ error: "Bad Request: Invalid or missing cart ID" });
    }

    // Intentar crear el ticket usando el servicio ticketService.createTicket
    const ticket = await ticketService.createTicket(req.body);

    // Enviar la respuesta con el ticket creado
    res.status(200).json(ticket);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la creación del ticket
    req.logger.error(`post ticket fail ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
/*
export async function handlePost(req, res, next) {
  req.logger.https("inside post ticket");
  try {
    const usuario = req.session['user'];
    console.log(`Usuario: ${JSON.stringify(usuario)}`);

    const cart = await cartRepository.readOne({ idCart: usuario.cartId });
    console.log(`Carrito: ${JSON.stringify(cart)}`);

    let i = 0;
    const compra = [];
    while (cart.products[i]) {
      const prod = await productRepository.readOne({ idProduct: cart.products[i].id });
      let num1 = parseInt(prod.stock);
      let num2 = parseInt(cart.products[i].quantity);
      let resta = num1 - num2;
      if (resta > 0) {
        compra.push(cart.products[i]);
      } else {
        console.log(`Error: Producto ${cart.products[i].title} excede el límite de stock.`);
        return res.status(400).json({ error: `Product ${cart.products[i].title} exceeds stock limit` });
      }
      i++;
    }

    const total = compra.reduce((acc, product) => acc + product.total, 0);
    console.log(`Total de la compra: ${total}`);

    const ticketData = {
      cart: usuario.cartId,
      products: compra,
      total: total,
      purchaser: usuario.email,
    };

    const ticket = await ticketService.createTicket(ticketData);
    console.log(`Ticket creado: ${JSON.stringify(ticket)}`);

    // Limpiar el carrito después de crear el ticket
    await cartRepository.updateOne({ idCart: usuario.cartId }, { products: [] });
    console.log('Carrito limpiado después de la compra.');

    // Enviar la respuesta con el ticket creado
    res.status(201).json(ticket);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la creación del ticket
    console.error(`Error durante la creación del ticket: ${error.message}`);
    req.logger.error(`post ticket fail ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
*/


export async function handleGet(req, res, next) {
  req.logger.https("inside get tickets");
  try {
    const ticket = await ticketsRepository.findOneById(req.params.id);
    // Si el ticket no se encuentra, devolver un código de estado 404 (Not Found)
    if (!ticket) {
      res.status(404).json({ error: "Ticket not found" });
      return;
    }
    // Enviar el ticket como respuesta JSON al cliente
    res.status(200).json(ticket);
  } catch (error) {
    req.logger.error(`get ticket fail ${error.message}`);
    // Enviar un código de estado 500 (Internal Server Error) en caso de error
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export async function handlePut(req, res) {
  //en construccion esta pensado para hacer borrado logico o cambiar el estado de los ticket cuando se incoopore plataformas de pago.
}
