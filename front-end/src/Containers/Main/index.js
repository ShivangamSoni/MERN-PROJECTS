// Pages
import Home from "../../Pages/Home";
import ProductList from "../../Pages/ProductList";
import Product from "../../Pages/Product";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import Cart from "../../Pages/Cart";

const Main = () => {
  return (
    <main>
      <Home />
      <ProductList />
      <Product />
      <Register />
      <Login />
      <Cart />
    </main>
  );
};

export default Main;
