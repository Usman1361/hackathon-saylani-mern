import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateComponents from "./components/PrivateComponents";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Cart from "./components/Cart/Cart";
import Header from "./Header";
import Orders from "./pages/Orders";
function App() {
  const Navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     Navigate("/");
  //   }
  // }, []);
  return (
    <>
      {/* <BrowserRouter> */}

      <Routes>
        <Route element={<PrivateComponents />}>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
              </>
            }
          />
        </Route>

        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
