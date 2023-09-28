


const addProductQuantityToCart = document.querySelectorAll(".addProductQuantityToCart");
const cidarr = cid.split("carts/");
const cidt = cidarr[1];

addProductQuantityToCart.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    event.preventDefault();
    const pid = btn.getAttribute("pid");
    const quantity = 1; // Aquí debes definir la cantidad deseada, puede ser dinámica si lo prefieres.

    try {
      await fetch(`http://localhost:8080/api/carts/${cidt}/product/${pid}?quantity=${quantity}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      // Mostrar una notificación o mensaje de éxito aquí (por ejemplo, usando SweetAlert).
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

    } catch (error) {
      console.log(error);
    }
  });
});



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
