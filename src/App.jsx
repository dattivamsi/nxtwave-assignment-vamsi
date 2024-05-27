import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import CardItems from "./components/CardItems";
import CreateCard from "./components/CreateCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" element={<LoginForm />} />
          <Route index path="/cards" element={<CardItems />}/>
          <Route path="/createcard" element={<CreateCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
