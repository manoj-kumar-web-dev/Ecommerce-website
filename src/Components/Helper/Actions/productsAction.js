import { ActionTypes } from "../Constants/actionType";
const {
  UPDATE_PRODUCT_COUNTER,
  SET_CHECKOUT,
  INCREMENT,
  DECREMENT,
  SET_PRODUCTS,
} = ActionTypes;

export function increment(id) {
  const payload = {
    id: id,
    updateType: INCREMENT,
  };
  // console.log("p111 ", payload);
  return { type: UPDATE_PRODUCT_COUNTER, payload };
}
export function decrement(id) {
  const payload = {
    id: id,
    updateType: DECREMENT,
  };
  // console.log("ppppppppppp", payload);
  return { type: UPDATE_PRODUCT_COUNTER, payload };
}
export function setProducts(products) {
  return { type: SET_PRODUCTS, payload: products };
}
export function checkout() {
  console.log("This function have called");
  return { type: SET_CHECKOUT };
}
