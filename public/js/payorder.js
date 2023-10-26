/*
async function payOrder(cartCode) {
  try {
      const response = await fetch(`   http://localhost:8080/api/tickets`, {
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
}*/

async function payOrder(cid) {
  // Verifico si cid es válido
  if (!cid || typeof cid !== 'string') {
    console.error('El valor de cid es inválido:', cid);
    return;
  }

  const cidarr = cid.split("carts/");
  
  // Verifico si cidarr es un array con al menos dos elementos
  if (!Array.isArray(cidarr) || cidarr.length < 2) {
    console.error('El valor de cidarr es inválido:', cidarr);
    return;
  }

  const cidt = cidarr[1];

  // Verifico si cidt es válido
  if (!cidt || typeof cidt !== 'string') {
    console.error('El ID del carrito es inválido:', cidt);
    return;
  }

  const FETCH_URL = `http://localhost:8080/api/tickets`;

  try {
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt }),
      headers: { "Content-Type": "application/json" },
    });

    // Verifico el estado de la respuesta HTTP
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const ticket = await response.json();

    // Verifico si ticket es nulo o indefinido y si tiene una propiedad 'code'
    if (!ticket || typeof ticket !== 'object' || !ticket.hasOwnProperty('code')) {
      // @ts-ignore
      Swal.fire({
        toast: true,
        showConfirmButton: true,
        title: `Purchase Failure`,
        icon: "error",
        background: "#600252",
        color: "#fff",
        confirmButtonColor: "#01657ed1",
      });
      return;
    }

    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // @ts-ignore
    await Swal.fire({
      title: "Purchase Confirmed",
      text: "Your purchase has been successfully confirmed.",
      icon: "success",
      showConfirmButton: false,
      background: "#bd9cfa",
      color: "#fff",
      customClass: {
        popup: "custom-swal-popup",
      },
      timer: 3000,
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

