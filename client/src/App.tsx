import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Shipping from "./pages/Shipping";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<Products />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shipping" element={<Shipping />} />
      <Route path="payment" element={<Payment />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
