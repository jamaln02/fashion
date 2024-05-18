import { Route, Routes } from "react-router-dom";
import AdmainLayout from "./AllLayout/AdmainLayout";
import Layout from "./AllLayout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userLogged, setUserLogged] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (localStorage.l == true) {
      axios({
        method: "get",
        url: `https://fashone-project.onrender.com/users/${localStorage.k}`,
      }).then((userData) => {
        setUserLogged(userData.data);
      });
    }
  }, []);

  const getUserLogged = () => {
    if (userId !== null) {
      axios({
        method: "get",
        url: `https://fashone-project.onrender.com/users/${userId}`,
      }).then((userData) => {
        setUserLogged(userData.data);
      });
    }
  };

  const getProducts = () => {
    axios({
      method: "get",
      url: "https://fashone-project.onrender.com/products",
    }).then((data) => setProducts(data.data));
  };

  const getUsers = () => {
    axios({
      method: "get",
      url: "https://fashone-project.onrender.com/users",
    }).then((usersData) => setUsers(usersData.data));
  };
  useEffect(() => {
    getUserLogged();
  }, [isLogged]);

  useEffect(() => {
    getUsers();
    getProducts();
  }, [isUpdated]);

  const addToCart = (pro) => {
    let check = carts.some((products) => products.id == pro.id);

    if (check) {
      increment(pro);
    } else {
      products.filter((ele) => ele.id == products.id);

      pro = { ...pro, item: 1 };

      setCarts([...carts, pro]);
    }
  };

  const increment = (cart) => {
    let newCarts = carts.map((ele) => {
      if (cart.id == ele.id) {
        ele.item = ele.item + 1;
      }
      return ele;
    });
    setCarts(newCarts);
  };

  const decrement = (cart) => {
    let newCarts = carts.map((ele) => {
      if (cart.id == ele.id && ele.item > 1) {
        ele.item = ele.item - 1;
      }
      return ele;
    });

    setCarts(newCarts);
  };

  const deletProducts = (cart) => {
    let newCart = carts.filter((ele) => ele.id !== cart.id);

    setCarts(newCart);
  };

  const handleAdmin = (curUser) => {
    users.map((ele) => {
      if (curUser.role == "m") {
        axios({
          method: "patch",
          url: `https://fashone-project.onrender.com/users/${curUser.id}`,
          data: {
            role: "a",
          },
        }).then(() => setIsUpdated(!isUpdated));
      } else {
        axios({
          method: "patch",
          url: `https://fashone-project.onrender.com/users/${curUser.id}`,
          data: {
            role: "m",
          },
        }).then(() => setIsUpdated(!isUpdated));
      }

      return ele;
    });
  };
  const deletUser = (curUser) => {
    axios({
      method: "delete",
      url: `https://fashone-project.onrender.com/users/${curUser.id}`,
    }).then(() => setIsUpdated(!isUpdated));
  };
  const deletProduct = (curProduct) => {
    axios({
      method: "delete",
      url: `https://fashone-project.onrender.com/products/${curProduct.id}`,
    }).then(() => setIsUpdated(!isUpdated));
  };
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout
              products={products}
              addToCart={addToCart}
              carts={carts}
              increment={increment}
              decrement={decrement}
              deletProducts={deletProducts}
              users={users}
              setIsLogged={setIsLogged}
              isLogged={isLogged}
              setUserId={setUserId}
              userLogged={userLogged}
              setUserLogged={setUserLogged}
              getUserLogged={getUserLogged}
              setIsUpdated={setIsUpdated}
              getUsers={getUsers}
              isUpdated={isUpdated}
            />
          }
        />
        <Route
          path="/admin/*"
          element={
            localStorage.r == "a" && (
              <AdmainLayout
                products={products}
                users={users}
                setUsers={setUsers}
                handleAdmin={handleAdmin}
                deletUser={deletUser}
                setIsUpdated={setIsUpdated}
                isUpdated={isUpdated}
                deletProduct={deletProduct}
                getUsers={getUsers}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
