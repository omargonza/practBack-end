import { cartRepository } from "../repositories/cart.repositrie.js";
import Users from "../models/entities/Users.model.js";
import Carts from "../models/entities/Carts.model.js";
import { userRepository } from "../repositories/users.repository.js";
/*
class UserService {
  constructor(repositorie) {
    this.repositorie = repositorie;
  }
  async registrar(UserData) {
    try {
      const newcart = new Carts();
      const cart = await cartRepository.add(newcart.dto());
      UserData.cart = cart.id;
      const datasuser = {
        email: UserData.email,
        first_name: UserData.first_name,
        last_name: UserData.last_name,
        age: Number(UserData.age),
        password: UserData.password,
        role:
      
          UserData.email === "adminCoder@coder.com" &&
          UserData.password === "adminCod3r123"
            ? "admin"
           
            : UserData.email === "gonza.gonza.black.app" &&
              UserData.password === "blackgon"
            ? "super-admin"
            : "user",
        cart: UserData.cart,
        
      };
      const user = new Users(datasuser);
      const registrado = await this.repositorie.add(user.dto());
      return registrado;
    } catch (error) {
      await cartRepository.deleteCart(UserData.cart);
    }
  }
}

export const userService = new UserService(userRepository);*/
class UserService {
  constructor(repositorie) {
    this.repositorie = repositorie;
  }
  
  async registrar(UserData) {
    try {
      const newcart = new Carts();
      const cart = await cartRepository.add(newcart.dto());
      UserData.cart = cart.id;
      
      let role = "user"; // Por defecto, el rol es "user"

      if (UserData.email === "adminCoder@coder.com" && UserData.password === "adminCod3r123") {
        role = "admin";
        // Mostrar un mensaje de bienvenida al administrador
        console.log("¡Bienvenido, administrador!");
      } else if (UserData.email === "gonza.gonza@mail.com" && UserData.password === "blackgon10") {
        role = "super-admin";
      }

      const datasuser = {
        email: UserData.email,
        first_name: UserData.first_name,
        last_name: UserData.last_name,
        age: Number(UserData.age),
        password: UserData.password,
        role: role, // Asignamos el rol correspondiente
        cart: UserData.cart,
      };

      const user = new Users(datasuser);
      const registrado = await this.repositorie.add(user.dto());
      return registrado;
    } catch (error) {
      await cartRepository.deleteCart(UserData.cart);
    }
  }
}

export const userService = new UserService(userRepository);


