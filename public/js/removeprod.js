async function delProductInCartShop(cid, code) {
  const cidarr = cid.split("carts/");
  const cidt = cidarr[1];
  const FETCH_URL = `   http://localhost:8080/api/carts/${cidt}/product/${code}`;
  const { status } = await fetch(FETCH_URL, { method: "DELETE" });

  if (status === 200) {
    location.reload();
  }
}
