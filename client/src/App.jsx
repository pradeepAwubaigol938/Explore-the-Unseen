import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import {UserContext} from "./UserContext.jsx";
import axios from "axios";
axios.defaults.baseURL ='http://localhost:4000';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/IndexPage" element={<IndexPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
