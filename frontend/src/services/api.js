const BASE_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createProduct = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

export const updateProduct = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};