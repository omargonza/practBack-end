/*async function payOrder(cid, ) {
  try {
    const cidt = extractCartIdFromUrl(cid);
    const cartCode = document.getElementById('pay-button').getAttribute('data-datac');
    console.log("cidt:", cidt);
    console.log("cartCode:", cartCode);
    // Construir la URL de la solicitud
    const FETCH_URL = ` https://pf43340.onrender.com/api/tickets`;

    // Realizar la solicitud al servidor
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt }),
      headers: { "Content-Type": "application/json" },
    });

    // Verificar el estado de la respuesta
    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.statusText}`);
    }

    // Obtener el ticket desde la respuesta
    const ticket = await response.json();

    // Verificar si se recibió un ticket válido
    if (!ticket || !ticket.code) {
      throw new Error("No se pudo procesar la orden correctamente. Por favor, inténtalo de nuevo más tarde.");
    }

    // Redirigir al usuario al ticket
    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // Mostrar un mensaje de éxito al usuario
    Swal.fire({
      title: "Compra Confirmada",
      text: "Tu compra se ha confirmado correctamente.",
      icon: "success",
      showConfirmButton: false,
      background: " #742b07",
      color: "#632e03d1",
      customClass: {
        popup: "custom-swal-popup",
      },
      timer: 3000,
    });
  } catch (error) {
    // Capturar y manejar errores específicos
 

    // Mostrar un mensaje de error al usuario
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
      background: " #742b07",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}

// Función para extraer el ID del carrito de la URL
function extractCartIdFromUrl(url) {
  const cidarr = url.split("carts/");
  return cidarr[1];
}*/



/*
async function payOrder(cid) {
  try {
   
    const cidarr = cid.split("carts/");
    const cidt = cidarr[1];
    console.log("cidt:", cidt);
    
    const FETCH_URL = ` https://pf43340.onrender.com/api/tickets`;

    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      // Manejar errores de red u otros errores del servidor
      throw new Error(`Error del servidor: ${response.statusText}`);
    }

    const ticket = await response.json();

    if (!ticket) {
      // Manejar el caso donde no se recibió un ticket válido
      throw new Error("No se pudo procesar la orden correctamente. Por favor, inténtalo de nuevo más tarde.");
    }

    // La orden se procesó correctamente, redirige al usuario al ticket
    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // Muestra un mensaje de éxito al usuario
    Swal.fire({
      title: "Compra Confirmada",
      text: "Tu compra se ha confirmado correctamente.",
      icon: "success",
      showConfirmButton: false,
      background: " #742b07",
      color: "#632e03d1",
      customClass: {
        popup: "custom-swal-popup",
      },
      timer: 3000,
    });
  } catch (error) {
    // Captura y maneja errores específicos
    console.error("Error:", error.message);

    // Muestra un mensaje de error al usuario
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
      background: " #742b07",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}
*/

/*

async function payOrder(cid) {
  let info = {}; // Inicializar la variable info como un objeto vacío

  try {
    // Extraer el ID del carrito de la URL (si es necesario)
    const cidt = extractCartIdFromUrl(cid);
    console.log("cidt:", cidt);
  
    // Construir la URL de la solicitud
    const FETCH_URL = ` https://pf43340.onrender.com/api/tickets`;
    console.log(info.propiedad);
    // Realizar la solicitud al servidor
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt }),
      headers: { "Content-Type": "application/json" },
    });

    // Verificar el estado de la respuesta
    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.statusText}`);
    }

    // Obtener el ticket desde la respuesta
    const ticket = await response.json();

    // Verificar si se recibió un ticket válido
    if (!ticket || !ticket.code) {
      throw new Error("No se pudo procesar la orden correctamente. Por favor, inténtalo de nuevo más tarde.");
      
    }

    // Redirigir al usuario al ticket
    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // Mostrar un mensaje de éxito al usuario
    Swal.fire({
      title: "Compra Confirmada",
      text: "Tu compra se ha confirmado correctamente.",
      icon: "success",
      showConfirmButton: false,
      background: " #742b07",
      color: "#632e03d1",
      customClass: {
        popup: "custom-swal-popup",
      },
      timer: 3000,
    });
  } catch (error) {
    // Capturar y manejar errores específicos
    console.error("Error:", error.message);

    // Mostrar un mensaje de error al usuario
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
      background: " #742b07",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}

// Función para extraer el ID del carrito de la URL
function extractCartIdFromUrl(url) {
  const cidarr = url.split("carts/");
  return cidarr[1];
}
*/

async function payOrder(cartCode) {
  try {
      const response = await fetch(` https://pf43340.onrender.com/api/tickets`, {
          method: "POST",
          body: JSON.stringify({ cart: cartCode }),
          headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
          throw new Error(`Error del servidor: ${response.statusText}`);
      }

      const ticket = await response.json();

      if (!ticket || !ticket.code) {
          throw new Error("No se pudo procesar la orden correctamente. Por favor, inténtalo de nuevo más tarde.");
      }

      // La orden se procesó correctamente, redirige al usuario al ticket
      window.location.href = `/ticket/${ticket.code}?cart=${cartCode}`;

      // Muestra un mensaje de éxito al usuario (esto es opcional)
      Swal.fire({
          title: "Compra Confirmada",
          text: "Tu compra se ha confirmado correctamente.",
          icon: "success",
          showConfirmButton: false,
          background: " #742b07",
          color: "#632e03d1",
          customClass: {
              popup: "custom-swal-popup",
          },
          timer: 3000,
      });
  } catch (error) {
      // Captura y maneja errores específicos
      console.error("Error:", error.message);

      // Muestra un mensaje de error al usuario
      Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          background: " #742b07",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
      });
  }
}
