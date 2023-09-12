/*
export default class Dtoclose {
  #user;
  constructor(user) {
    this.#user = user;
  }

  get user() {
    return this.#user;
  }

  dtoclose() {
    return {
      id: this.#user.id,
      email: this.#user.email,
      first_name: this.#user.first_name,
      last_name: this.#user.last_name,
      age: this.#user.age,
      role: this.#user.role,
      photo: this.#user.photo,
      last_connection: this.#user.last_connection,
    };
  }
}*/
export default class Dtoclose {
  #user;

  constructor(user) {
    if (typeof user === 'string') {
      // Si se pasa una cadena JSON, conviértela en un objeto
      this.#user = JSON.parse(user);
    } else {
      this.#user = user;
    }
  }

  get user() {
    return this.#user;
  }

  dtoclose() {
    return {
      id: this.#user.id,
      email: this.#user.email,
      first_name: this.#user.first_name,
      last_name: this.#user.last_name,
      age: this.#user.age,
      role: this.#user.role,
      photo: this.#user.photo,
      last_connection: this.#user.last_connection,
    };
  }
}

