import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">О нас</Link> 
      </div>
    </>
  );
}

export default Header;
