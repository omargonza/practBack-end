
async function payOrder(cid, code) {
  try {
   
    const cidarr = cid.split("carts/");
    const cidt = cidarr[1];
    console.log("cidt:", cidt);
    console.log("code:", code);
    const FETCH_URL = `http://localhost:8080/api/tickets${cidt}/product/${code}`;

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



/*
async function payOrder(cid, code) {
  try {
    // Asegúrate de que 'code' tenga un valor por defecto si es 'undefined'
    code = code ?? "defaultCode"; // "defaultCode" es el valor por defecto que se asignará si 'code' es 'undefined'

    const cidarr = cid.split("carts/");
    const cidt = cidarr[1];
    const FETCH_URL = `http://localhost:8080/api/tickets${cidt}/product/${code}`;

    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt, code }), // Envía 'code' al servidor
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      // Si la respuesta del servidor no es exitosa (por ejemplo, 404 Not Found),
      // puedes mostrar un mensaje de error adecuado según el código de estado
      if (response.status === 404) {
        // Mostrar un mensaje específico para el error 404
        console.error("Producto no encontrado. Se utilizará el código por defecto.");
      } else {
        // Otros errores del servidor
        throw new Error(`Error del servidor: ${response.statusText}`);
      }
    }

    const ticket = await response.json();

    if (!ticket) {
      throw new Error("No se pudo procesar la orden correctamente. Por favor, inténtalo de nuevo más tarde.");
    }

    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // @ts-ignore
    await Swal.fire({
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
    // @ts-ignore
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
async function payOrder(cid, code) {
  try {
    // Asegúrate de que 'code' tenga un valor por defecto si es 'undefined'
    code = code ?? "defaultCode"; // "defaultCode" es el valor por defecto que se asignará si 'code' es 'undefined'

    const cidarr = cid.split("carts/");
    const cidt = cidarr[1];
    const FETCH_URL = `http://localhost:8080/api/tickets${cidt}/product/${code}`;

    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt, code }), // Envía 'code' al servidor
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      // Si la respuesta del servidor no es exitosa (por ejemplo, 404 Not Found),
      // puedes mostrar un mensaje de error adecuado según el código de estado
      if (response.status === 404) {
        throw new Error("Producto no encontrado. Por favor, verifica el código del producto.");
      } else {
        throw new Error(`Error del servidor: ${response.statusText}`);
      }
    }

    const ticket = await response.json();

    if (!ticket) {
      throw new Error("No se pudo procesar la orden correctamente. Por favor, inténtalo de nuevo más tarde.");
    }

    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // @ts-ignore
    await Swal.fire({
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
    // @ts-ignore
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