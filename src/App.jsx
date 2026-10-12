import Shop from "./Components/Shop/Shop.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Home from "./Components/Home/Home.jsx";
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
export default function App() {
  const [cart, setCart] = useState([]);
  const { name } = useParams();
  const [active, setActive] = useState(name);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartSize, setCartSize] = useState(0);
  const [total, setTotal] = useState(0);
  let api = 'https://fakestoreapi.com/products';
  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const res = await fetch(api)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setProducts(data);
        };
      }
      catch (error) {
        console.log("Caught an error:", error);
        if (isMounted) {
          setError(error.message)
        };
      }
      finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchProducts();
    return () => isMounted = false;
  }, [api]);
  function removeFromCart(id,amount) {
    const newCart = cart.filter((item) => item.id != id);
    setCart(newCart);
    setCartSize(cartSize - amount);
  }
  function addToCart(obj) {
    setCart([...cart, { ...obj, quantity: 1 }]);
    setCartSize(cartSize + 1);
  }
  function setAmount(id, newQuantity) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(newCart);
  }
  return (
    <div className="app">
      <Header cart={cart} active={active} setActive={setActive} cartSize={cartSize} />
      <main>
        {name === 'home' && <Home setActive={setActive} />}
        {name === 'shop' && <Shop addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} products={products} loading={loading} error={error} total={total} setTotal={setTotal} />}
        {name === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} currentPage={name} cartSize={cartSize} setCartSize={setCartSize} total={total} setTotal={setTotal} setAmount={setAmount} />}
      </main>
      <Footer/>
    </div>
  )
}
