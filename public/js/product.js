async function addProductQuantityToCart(cid, code, quantity) {

  console.log("cid:", cid);
  console.log("code:", code);

  const cidarr = cid.split("carts/");
  const cidt = cidarr[1];
  const FETCH_URL = `https://pf43340.onrender.com/api/carts/${cidt}/product/${code}?quantity=${quantity}`;
  
  const { status } = await fetch(FETCH_URL, { method: "POST" });

  if (status === 201) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `Added product`,
      icon: "success",
      background: "#bd9cfa",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `Not Enough Stock`,
      icon: "info",
      background: "#600252",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}
/*async function addProductQuantityToCart(cid, productIndex, quantity) {
  try {
    console.log("productIndex:", productIndex);
    console.log("cid:", cid);

    const cidarr = cid.split("carts/");
    const cidt = cidarr[1];

    // Verificar que productIndex sea un índice válido en el array products
    if (productIndex >= 0 && productIndex < products.length) {
      const productCode = products[productIndex].code;
      const FETCH_URL = `https://pf43340.onrender.com/api/carts/${cidt}/product/${productCode}?quantity=${quantity}`;

      const response = await fetch(FETCH_URL, { method: "POST" });

      if (response.status === 201) {
        // Producto agregado exitosamente
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: true,
          title: `Added product`,
          icon: "success",
          background: "#bd9cfa",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
      } else if (response.status === 400) {
        // No hay suficiente stock
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: true,
          title: `Not Enough Stock`,
          icon: "info",
          background: "#600252",
          color: "#fff",
          confirmButtonColor: "#01657ed1",
        });
      } else {
        // Otro tipo de error
        console.error(`Error: ${response.status}`);
      }
    } else {
      console.error("Índice de producto inválido.");
    }
  } catch (error) {
    // Manejo de errores para la solicitud fetch
    console.error(error);
  }
}
*/

//profile
const profileIcon = document.querySelector(".profile-btn");
const profileMenu = document.getElementById("profileMenu");

if (profileIcon instanceof HTMLElement && profileMenu instanceof HTMLElement) {
  profileIcon.addEventListener("click", () => {
    profileMenu.style.display =
      profileMenu.style.display === "block" ? "none" : "block";
  });
} else {
  console.error("No se encontraron los elementos necesarios.");
}

