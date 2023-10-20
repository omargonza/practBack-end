async function delProductInCartShop(cid, code) {
  const cidarr = cid.split("carts/");
  const cidt = cidarr[1];
  const FETCH_URL = ` https://pf43340.onrender.com/api/carts/${cidt}/product/${code}`;
  const { status } = await fetch(FETCH_URL, { method: "DELETE" });

  if (status === 200) {
    location.reload();
  }
}
