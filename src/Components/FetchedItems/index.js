import axios from "axios";
export async function getProducts() {
  // api url
  let url = `https://fakestoreapi.com/products`;
  const products = await axios.get(url).catch((err) => console.log(err));
  return products;
}
export async function getProductsWithId(id) {
  let url = `https://fakestoreapi.com/products/${id}`;
  const products = await axios.get(url).catch((err) => console.log(err));
  return products;
}
