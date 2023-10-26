
/*import Tickets from "../models/entities/Tickets.model.js";
import { cartRepository } from "../repositories/cart.repositrie.js";
import { productsRepository } from "../repositories/product.repositorie.js";
import { ticketsRepository } from "../repositories/ticket.repository.js";
import { userRepository } from "../repositories/users.repository.js";
import { emailService } from "./email.service.js";

class PurcheaseService {
  constructor() {}

  async createTicket(data) {
    const productsInCart = await cartRepository.getProductsInCartById(
      data.cart
    );
    productsInCart.forEach((e) => {
      if (e.product.stock < e.quantity) {
        e.quantity = e.product.stock;
      }
    });
    const user = await userRepository.findOne({ cart: data.cart });
    const userEmail = user.email;
    const amountArray = productsInCart.map((p) => p.product.price * p.quantity);
    const initp = 0;
    const amount = amountArray.reduce((acum, pprice) => {
      return acum + pprice;
    }, initp);
    const info_tikcet = {
      amount: amount,
      purcheaser: userEmail,
    };
    const dataticket = new Tickets(info_tikcet);
    const ticket = await ticketsRepository.add(dataticket.dto());
    const mailData = {
      subject: "Confirmacion de Compra --Tiempo es Oro",
      mensaje: `Hola,\n\n
      Gracias por su compra en nuestra tienda,\n
      N°Compra: ${ticket.code} \n
      Total: $${ticket.amount}\n\n
      el tiempo es hoy\n
      EL TIEMPO ES ORO`,
    };
    await emailService.send(userEmail, mailData);
    await this.adjustStock(data);
    if (process.env.PERSISTENCIA !== "mongoose") {
      await cartRepository.delAllProductsInCart(data.cart);
    }
    return ticket;
  }

  async adjustStock(data) {
    const productsStocker = await cartRepository.getProductsInCartById(
      data.cart
    );
    for (const prod of productsStocker) {
      if (process.env.PERSISTENCIA !== "mongoose") {
        await productsRepository.updateOne(prod.product.id, {
          stock: prod.product.stock - prod.quantity,
        });
      } else {
        await productsRepository.updateOne(prod.product.id, {
          $inc: { stock: -prod.quantity },
        });
      }
    }
  }
}

export const ticketService = new PurcheaseService();
*/
import Tickets from "../models/entities/Tickets.model.js";
import { cartRepository } from "../repositories/cart.repositrie.js";
import { productsRepository } from "../repositories/product.repositorie.js";
import { ticketsRepository } from "../repositories/ticket.repository.js";
import { userRepository } from "../repositories/users.repository.js";
import { emailService } from "./email.service.js";

class PurcheaseService {
  constructor() {}

  async createTicket(data) {
     // Imprime el valor de data.cart antes de llamar a getProductsInCartById
     console.log(`Valor de data.cart: ${data.cart}`);
    // Verificación de tipo
    if (typeof data !== 'object') {
      throw new Error('Los datos deberían ser un objeto');
    }

    // Verificación de propiedad
    if (!data.hasOwnProperty('cart')) {
      throw new Error('Propiedad faltante: cart');
    }

    // Verificación de valor
    if (data.cart < 0) {
      throw new Error('El valor del carrito debería ser positivo');
    }
    
    console.log('Antes de llamar a cartRepository.getProductsInCartById');
    const productsInCart = await cartRepository.getProductsInCartById(
      data.cart
    );
    console.log('Después de llamar a cartRepository.getProductsInCartById');

    productsInCart.forEach((e) => {
      if (e.product.stock < e.quantity) {
        e.quantity = e.product.stock;
      }
    });

    console.log('Antes de llamar a userRepository.findOne');
    const user = await userRepository.findOne({ cart: data.cart });
    console.log('Después de llamar a userRepository.findOne');

    const userEmail = user.email;
    const amountArray = productsInCart.map((p) => p.product.price * p.quantity);
    const initp = 0;
    const amount = amountArray.reduce((acum, pprice) => {
      return acum + pprice;
    }, initp);
    
    const info_tikcet = {
      amount: amount,
      purcheaser: userEmail,
    };
    
    const dataticket = new Tickets(info_tikcet);

    console.log('Antes de llamar a ticketsRepository.add');
    const ticket = await ticketsRepository.add(dataticket.dto());
    console.log('Después de llamar a ticketsRepository.add');

    const mailData = {
      subject: "Confirmacion de Compra --Tiempo es Oro",
      mensaje: `Hola,\n\n
      Gracias por su compra en nuestra tienda,\n
      N°Compra: ${ticket.code} \n
      Total: $${ticket.amount}\n\n
      el tiempo es hoy\n
      EL TIEMPO ES ORO`,
    };

    console.log('Antes de llamar a emailService.send');
    await emailService.send(userEmail, mailData);
    console.log('Después de llamar a emailService.send');

    console.log('Antes de llamar a this.adjustStock');
    await this.adjustStock(data);
    console.log('Después de llamar a this.adjustStock');

    if (process.env.PERSISTENCIA !== "mongoose") {
      console.log('Antes de llamar a cartRepository.delAllProductsInCart');
      await cartRepository.delAllProductsInCart(data.cart);
      console.log('Después de llamar a cartRepository.delAllProductsInCart');
    }
    
    return ticket;
  }

  async adjustStock(data) {
    
    console.log('Antes de llamar a cartRepository.getProductsInCartById en adjustStock');
    
    const productsStocker = await cartRepository.getProductsInCartById(
      data.cart
    );
    
     console.log('Después de llamar a cartRepository.getProductsInCartById en adjustStock');

     for (const prod of productsStocker) {
       if (process.env.PERSISTENCIA !== "mongoose") {

         console.log(`Antes de llamar a productsRepository.updateOne para el producto ${prod.product.id}`);
         await productsRepository.updateOne(prod.product.id, {
           stock: prod.product.stock - prod.quantity,
         });
         console.log(`Después de llamar a productsRepository.updateOne para el producto ${prod.product.id}`);

       } else {

         console.log(`Antes de llamar a productsRepository.updateOne para el producto ${prod.product.id}`);
         await productsRepository.updateOne(prod.product.id, {
           $inc: { stock: -prod.quantity },
         });
         console.log(`Después de llamar a productsRepository.updateOne para el producto ${prod.product.id}`);

       }
     }
   }
}

export const ticketService = new PurcheaseService();
