//* eslint-disable no-undef */
// @ts-ignore
/*const serverSocket = io();

// @ts-ignore
Swal.fire({
  title: "Inserte Usuario",
  input: "Usuario",
  inputValidator: (value) => {
    return !value && "¡You need send a valid email to start chat!";
  },
  allowOutsideClick: false,
}).then((result) => {
  const inputAutor = document.querySelector("#inputAutor");
  if (!(inputAutor instanceof HTMLInputElement)) return;
  inputAutor.value = result.value;
  serverSocket.emit("nuevoUsuario", inputAutor.value);
});
*/

const serverSocket = io();

// @ts-ignore
Swal.fire({
  title: "Inserte Usuario",
  input: "text",  // Corrección: Se espera un campo de texto.
  inputValidator: (value) => {
    // Corrección: Validar que se ingrese un correo electrónico válido.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !value.match(emailRegex) && "¡Debe ingresar un correo electrónico válido para comenzar el chat!";
  },
  allowOutsideClick: false,
}).then((result) => {
  if (result.isConfirmed) {
    const inputAutor = document.querySelector("#inputAutor");
    if (inputAutor instanceof HTMLInputElement) {
      inputAutor.value = result.value;
      serverSocket.emit("nuevoUsuario", inputAutor.value);
    }
  }
});

const btnEnviar = document.querySelector("#btnEnviar");

if (btnEnviar) {
  btnEnviar.addEventListener("click", (evento) => {
    const inputAutor = document.querySelector("#inputAutor");
    const inputMensaje = document.querySelector("#inputMensaje");

    if (
      !(inputAutor instanceof HTMLInputElement) ||
      !(inputMensaje instanceof HTMLInputElement)
    )
      return;

    const autor = inputAutor.value;
    const mensaje = inputMensaje.value;

    if (!autor || !mensaje) return;

    serverSocket.emit("nuevoMensaje", {
      timestamp: Date.now(),
      autor,
      mensaje,
    });
  });
}

const plantillaMensajes = `
{{#if hayMensajes }}
<ul>
    {{#each mensajes}}
    <li>({{this.fecha}}) {{this.autor}}: {{this.mensaje}}</li>
    {{/each}}
</ul>
{{else}}
<p>no hay mensajes...</p>
{{/if}}
`;
const armarHtmlMensajes = Handlebars.compile(plantillaMensajes);

serverSocket.on("actualizarMensajes", (mensajes) => {
  const divMensajes = document.querySelector("#mensajes");
  if (divMensajes) {
    divMensajes.innerHTML = JSON.stringify(mensajes);
    divMensajes.innerHTML = armarHtmlMensajes({
      mensajes,
      hayMensajes: mensajes.length > 0,
    });
  }
});

serverSocket.on("nuevoUsuario", (nombreUsuario) => {
  // @ts-ignore
  Swal.fire({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    title: `"${nombreUsuario}" se ha unido al chat`,
    icon: "success",
  });
});