import { useState } from "react";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";
import SearchBar from "./components/SearchBar";
import AddProductForm from "./components/AddProductForm";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    discount: 699.99,
    description: "High-performance laptop for work and gaming",
    category: "Electronics",
    image: "💻",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model with advanced features",
    category: "Electronics",
    image: "📱",
  },
  {
    id: 3,
    name: "Headphones",
    price: 149.99,
    description: "Noise-cancelling wireless headphones",
    category: "Audio",
    image: "🎧",
  },
  {
    id: 4,
    name: "Book",
    price: 19.99,
    description: "Best-selling novel",
    category: "Books",
    image: "📚",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCardTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newProducts, setNewProducts] = useState(INITIAL_PRODUCTS);

  const handleAddToCart = (id) => {
    const productToBeAdded = INITIAL_PRODUCTS.find(
      (product) => product.id === id
    );

    setCartItems((prev) => [...prev, productToBeAdded]);
    setCartCount((prev) => prev + 1);

    productToBeAdded.discount
      ? setCardTotal((prev) => prev + productToBeAdded.discount)
      : setCardTotal((prev) => prev + productToBeAdded.price);
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    alert(`nb of items : ${cartCount}, total price :${cartTotal}`);
    clearCart();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      clearCart();
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    setCardTotal(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setNewProducts((prev) => [...prev, newProduct]);
  };

  const filteredProducts = newProducts.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <main className="layout" tabIndex={0} onKeyDown={handleKeyDown}>
      <header className="banner card">
        <h1 className="heading-large">🛍️ Product Catalog</h1>
        <p className="meta">React Lab 02 - Props, Events & State</p>

        <button className="toggle-button" onClick={handleToggleCart}>
          {showCart ? "Hide Cart" : "Show Cart"}
        </button>

        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for an item"
          onSelectChange={handleSelectChange}
        />
      </header>

      {showCart && (
        <CartSummary
          cart={cartCount}
          total={cartTotal}
          onCheckOut={handleCheckout}
        />
      )}

      <section className="products-section card">
        <h2 className="heading-medium">Products</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              discount={product.discount}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="add-product-section card">
        <h2 className="heading-medium">Add New Product</h2>
        <AddProductForm onsubmit={handleSubmit} />
      </section>
    </main>
  );
}

export default App;
