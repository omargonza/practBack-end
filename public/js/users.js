async function deleteUser(uid) {
  const FETCH_URL = `http://localhost:8080/api/users/${uid}`;
  const { status } = await fetch(FETCH_URL, { method: "DELETE" });

  if (status === 200) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `User Deleted`,
      icon: "success",
      background: "#bd9cfa",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
    window.location.href = `/users`;
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `Delete Fail`,
      icon: "info",
      background: "#600252",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}

async function upgradeUser(uid) {
  const FETCH_URL = `http://localhost:8080/api/users/admin/${uid}`;
  const { status } = await fetch(FETCH_URL, { method: "GET" });

  if (status === 200) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `User role changed`,
      icon: "success",
      background: "#bd9cfa",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
    window.location.href = `/users`;
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `Change Fail`,
      icon: "info",
      background: "#600252",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}

async function deleteAllUsers() {
  const FETCH_URL = `http://localhost:8080/api/users`;
  const { status } = await fetch(FETCH_URL, { method: "DELETE" });

  if (status === 200) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `Inactive users cleaned`,
      icon: "success",
      background: "#bd9cfa",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
    window.location.href = `/users`;
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      title: `Clean Fail`,
      icon: "info",
      background: "#600252",
      color: "#fff",
      confirmButtonColor: "#01657ed1",
    });
  }
}

// @ts-ignore
tippy("#delete-time", { content: "Delete inactive users" });
// @ts-ignore
tippy(".upgrader", { content: "Change role", placement: "top" });
