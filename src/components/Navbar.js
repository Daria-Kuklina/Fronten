import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

function Header() {

  const token = localStorage.getItem("token")
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">О нас</Link>
        {
          !token &&
          (
            <>
              <Link to="/login">Войти</Link>
              <Link to="/signup">Регистрация</Link>
            </>
          )
        }
        {
          token && <Link to="/cart">Корзина</Link>
        }
      </div>
    </>
  );
}

export default Header;
