import "./App.css";
import Header from "../src/component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "./component/Categories";
import ForgotPass from "./component/ForgotPass";
import ItemDetails from "./component/ItemDetails";
import ListItems from "./component/ListItems";
import Login from "./component/Login";
import Register from "./component/Register";
import React from "react";

const App=()=> {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/category" element={<Categories/>}>          
        </Route>
        <Route path="/forgotpass" element={<ForgotPass/>}>          
        </Route>
        <Route path="/register" element={<Register/>}>          
        </Route>
        <Route path="/login" element={<Login/>}>          
        </Route>
        <Route path="/listitem/:title/" element={<ListItems/>}>          
        </Route>
        <Route path="/" exact element={<Home/>}>
        </Route>
        <Route path="/itemDetails/:id/" element={<ItemDetails/>}>
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
