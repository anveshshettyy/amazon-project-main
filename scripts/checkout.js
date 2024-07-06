import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
// import '../data/cart-class.js';
// import '../data/backend-practise.js'
