import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Signup from "./components/Signup";
import { store, persistor } from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
