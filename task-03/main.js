import {
    addProduct,
    removeProduct,
    updateQuantity,
    calculateTotal,
    getCart,
    clearCart,
    formatCartItem
} from "./cart.js";

console.log("==================================================");
console.log("TASK 3: MODUL COS DE CUMPARATURI");
console.log("==================================================\n");

console.log("--- 1. Adaugare produse in cos ---");
addProduct({id: 1, name: "Laptop ASUS ZenBook", price: 18500, quantity: 1});
addProduct({id: 2, name: "Mouse Wireless Logitech", price: 650, quantity: 2});
addProduct({id: 3, name: "Tastatură Mecanică Keychron", price: 1900, quantity: 1});
addProduct({id: 4, name: "Căști Sony WH-1000XM5", price: 7200, quantity: 1});

addProduct({id: 2, name: "Mouse Wireless Logitech", price: 650, quantity: 1});

getCart().forEach((item) => console.log(formatCartItem(item)));
console.log(`Total curent: ${calculateTotal().toFixed(2)} MDL\n`);

console.log("--- 2. Modificare cantitate (Laptop: setat la 2 bucati) ---");
updateQuantity(1, 2);
getCart().forEach((item) => console.log(formatCartItem(item)));
console.log(`Total după modificare cantitate: ${calculateTotal().toFixed(2)} MDL\n`);

console.log("--- 3. Stergere produs existent (ID: 3) ---");
removeProduct(3);
getCart().forEach((item) => console.log(formatCartItem(item)));
console.log(`Total după stergere: ${calculateTotal().toFixed(2)} MDL\n`);

console.log("--- 4. Calculare total final comandă ---");
const finalTotal = calculateTotal();
console.log(`TOTAL FINAL DE PLATĂ: ${finalTotal.toFixed(2)} MDL\n`);

console.log("--- 5. Incercare de stergere a unui produs inexistent (try / catch) ---");
const nonExistentId = 999;
try {
    console.log(`Se incearca stergerea produsului cu ID = ${nonExistentId}...`);
    removeProduct(nonExistentId);
    console.log("Produs sters cu succes!");
} catch (error) {
    console.error(`[Eroare prinss în catch]: ${error.message}`);
}
console.log("--- 6. Stergerea tuturor produselor ---");
clearCart();
const cart = getCart();
console.log(`Au ramas in cos: ${cart.length}`);


