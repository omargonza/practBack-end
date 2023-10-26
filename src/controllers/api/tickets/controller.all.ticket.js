
import { ticketsRepository } from "../../../repositories/ticket.repository.js";
import { ticketService } from "../../../services/purchease.service.js";

export async function handlePost(req, res, next) {
  req.logger.https("inside post ticket");
  try {
    // Asegúrate de que req.body contiene una propiedad 'cart' con un ID de carrito válido
    console.log(`Valor de req.body.cart: ${req.body.cart}`);
    console.log(`Valor de req.body: ${JSON.stringify(req.body)}`);
    const ticket = await ticketService.createTicket(req.body);
    res.status(200).json(ticket);
  } catch (error) {
    req.logger.error(`post ticket fail ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

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
