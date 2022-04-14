import { Route, Routes } from "react-router-dom";
import About from "./about/about.component";
import "./App.css";
import Home from "./home/home.component";
import NavBar from "./navigation/navigation.component";
import Product from "./product/product.component";
import SignIn from "./sign/sign-in.component";
import SignUp from "./signup/sign-up.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
