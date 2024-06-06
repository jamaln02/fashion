import { Route, Routes } from "react-router-dom";
import AdmainLayout from "./AllLayout/AdmainLayout";
import Layout from "./AllLayout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// // Initialize Firebase

// // TODO: Replace the following with your app's Firebase project configuration

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userLogged, setUserLogged] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  // const app = initializeApp(firebaseConfig);

  // const analytics = getAnalytics(app);

  // const firebaseConfig = {
  //   apiKey: "AIzaSyALiqDk1QhzVZrooM4vUQpyR9XahkSrVIs",
  //   authDomain: "fashione-1.firebaseapp.com",
  //   projectId: "fashione-1",
  //   storageBucket: "fashione-1.appspot.com",
  //   messagingSenderId: "216666759210",
  //   appId: "1:216666759210:web:e0aad4ed8f4fc301c8e353",
  //   measurementId: "G-R6N4P8HFZM",
  // };

  useEffect(() => {
    if (localStorage.l == true) {
      axios({
        method: "get",

        url: `https://jamaln02.github.io/fashion-backend/db.json/users/${localStorage.k}`,
      }).then((userData) => {
        setUserLogged(userData.data);
      });
    }
  }, []);

  const getUserLogged = () => {
    if (userId !== null) {
      axios({
        method: "get",
        url: `https://jamaln02.github.io/fashion-backend/db.json/users/${userId}`,
      }).then((userData) => {
        setUserLogged(userData.data);
      });
    }
  };

  const getProducts = () => {
    axios({
      method: "get",
      url: "https://jamaln02.github.io/fashion-backend/db.json/products",
    }).then((data) => setProducts(data.data));
  };

  const getUsers = () => {
    axios({
      method: "get",
      url: "https://jamaln02.github.io/fashion-backend/db.json/users/",
    }).then((usersData) => setUsers(usersData.data));
  };
  useEffect(() => {
    getUserLogged();
  }, [isLogged]);

  useEffect(() => {
    getUsers();
    getProducts();
  }, [isUpdated]);
  console.log(getProducts(), getUsers());
  const addToCart = (pro) => {
    let check = carts.some((products) => products.id == pro.id);

    if (check) {
      increment(pro);
    } else {
      products.filter((ele) => ele.id == products.id);

      pro = { ...pro, item: 1 };

      setCarts([...carts, pro]);
    }
    console.log(carts);
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
          url: `https://jamaln02.github.io/fashion-backend/db.json/users/${curUser.id}`,
          data: {
            role: "a",
          },
        }).then(() => setIsUpdated(!isUpdated));
      } else {
        axios({
          method: "patch",
          url: `https://jamaln02.github.io/fashion-backend/db.json/users/${curUser.id}`,
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
      url: `https://jamaln02.github.io/fashion-backend/db.json/users/${curUser.id}`,
    }).then(() => setIsUpdated(!isUpdated));
  };
  const deletProduct = (curProduct) => {
    axios({
      method: "delete",
      url: `https://jamaln02.github.io/fashion-backend/db.json/users/${curProduct.id}`,
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
