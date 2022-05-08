import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar";
import Footer from "./components/Footer";
import pages from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<pages.Main />} />
          <Route path="/catalog" element={<pages.Catalog />} />
          <Route path="/about" element={<pages.About />} />
          <Route path="/cart" element={<pages.Cart />} />
          <Route path="/signup" element={<pages.Signup />} />
          <Route path="/login" element={<pages.Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
