/*
import { createTransport } from "nodemailer";
import { CONFIG_EMAIL } from "../config/config.js";

class EmailService {
  #clienteNodemailer;

  constructor(CONFIG_EMAIL) {
    this.#clienteNodemailer = createTransport(CONFIG_EMAIL);
  }

  async send(destinatario, mailOpt) {
    const mailOptions = {
      from: "Tiempo es Oro",
      to: destinatario,
      subject: mailOpt.subject,
      text: mailOpt.mensaje,
      html: mailOpt.html,
      attachments: mailOpt.attachments,
    };
    try {
    
      const info = await this.#clienteNodemailer.sendMail(mailOptions);
      console.log(info);
      return info;
     
    } catch (error) {
      throw error;
    } 
  }
}


export const emailService = new EmailService(CONFIG_EMAIL);
*/
import { createTransport } from "nodemailer";
import { CONFIG_EMAIL } from "../config/config.js";

class EmailService {
  #clienteNodemailer;

  constructor(CONFIG_EMAIL) {
    this.#clienteNodemailer = createTransport(CONFIG_EMAIL);
  }

  async send(destinatario, mailOpt) {
    const mailOptions = {
      from: "Tiempo es Oro",
      to: destinatario,
      subject: mailOpt.subject,
      text: mailOpt.mensaje,
      html: mailOpt.html,
      attachments: mailOpt.attachments,
    };

    try {
      const info = await this.#clienteNodemailer.sendMail(mailOptions);
      console.log("Correo electrónico enviado exitosamente:");
      console.log(info);
      return info;
    } catch (error) {
      console.error("Error al enviar el correo electrónico:");
      console.error(error);
      throw error;
    }
  }
}

export const emailService = new EmailService(CONFIG_EMAIL);
