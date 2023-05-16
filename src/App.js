import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import { useStateValue } from "./component/StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Footer from "./component/Footer/Footer";
import Payment from "./component/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders/Orders";

const promise = loadStripe(
  "pk_test_51MzM9fHNxpGImOZFBaFruX1CzIPyYDoIMKrbpgelMWzXsvhTiI1UZxnHir3ivoYvReVtJ1w01BVPFYhPw5ga6Geu004MD0DBlz"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Header />, <Home />, <Footer />]} />
        <Route
          path="/checkout"
          element={[<Header />, <Checkout />, <Footer />]}
        />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={[<Header />, <Orders />, <Footer />]} />
      </Routes>
    </div>
  );
}

export default App;
