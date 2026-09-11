/**
 * Modul pentru gestionarea unui coș de cumpărături (Cart Module)
 * Fiecare produs conține: { id, name, price, quantity }
 */

// Starea internă a coșului de cumpărături
let cart = [];

/**
 * Returnează produsele din coș (copie shallow folosind spread).
 * @returns {Array<{ id: number, name: string, price: number, quantity: number }>}
 */
export const getCart = () => [...cart];

/**
 * Resetează / golește coșul de cumpărături.
 */
export const clearCart = () => {
  cart = [];
};

/**
 * Adaugă un produs în coșul de cumpărături.
 * Folosește destructuring pentru extragerea proprietăților,
 * find() pentru verificarea existenței și spread (...) pentru imutabilitate.
 * 
 * @param {{ id: number, name: string, price: number, quantity?: number }} product
 * @returns {Array<{ id: number, name: string, price: number, quantity: number }>}
 */
export const addProduct = (product) => {
  const { id, name, price, quantity = 1 } = product;

  if (!id || !name || price === undefined || price < 0) {
    throw new Error("Datele produsului sunt invalide (id, name, price sunt obligatorii).");
  }

  if (quantity <= 0) {
    throw new Error("Cantitatea adăugată trebuie să fie mai mare decât 0.");
  }

  // Verificăm dacă produsul există deja în coș folosind find()
  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    // Dacă produsul există, actualizăm cantitatea folosind map() și spread (...)
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + quantity } : item
    );
  } else {
    // Dacă produsul este nou, îl adăugăm în coș folosind spread (...)
    cart = [...cart, { id, name, price, quantity }];
  }

  return getCart();
};
