let cart = [];

export const getCart = () => [...cart];

export const clearCart = () => {
  cart = [];
};

export const addProduct = (product) => {
  const { id, name, price, quantity = 1 } = product;

  if (!id || !name || price === undefined || price < 0) {
    throw new Error("Datele produsului sunt invalide (id, name, price sunt obligatorii).");
  }

  if (quantity <= 0) {
    throw new Error("Cantitatea adăugată trebuie să fie mai mare decât 0.");
  }

  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + quantity } : item
    );
  } else {
    cart = [...cart, { id, name, price, quantity }];
  }

  return getCart();
};

export const removeProduct = (id) => {
  const productToDelete = cart.find((item) => item.id === id);

  if (!productToDelete) {
    throw new Error(`Produsul cu ID-ul ${id} nu a fost găsit în coș și nu poate fi șters.`);
  }

  cart = cart.filter((item) => item.id !== id);

  return getCart();
};

export const updateQuantity = (id, newQuantity) => {
  if (typeof newQuantity !== "number" || newQuantity <= 0) {
    throw new Error("Noua cantitate trebuie să fie un număr mai mare decât 0.");
  }

  const existingProduct = cart.find((item) => item.id === id);
  if (!existingProduct) {
    throw new Error(`Produsul cu ID-ul ${id} nu a fost găsit în coș.`);
  }

  cart = cart.map((item) =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );

  return getCart();
};

export const calculateTotal = () => {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
};

export const formatCartItem = ({ id, name, price, quantity }) => {
  const itemTotal = (price * quantity).toFixed(2);
  return `[ID: ${id}] ${name} | Preț: ${price} MDL | Cantitate: ${quantity} | Total: ${itemTotal} MDL`;
};
