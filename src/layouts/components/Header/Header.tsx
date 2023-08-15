import { Link } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
interface userLogin {
  email: string;
  password: string;
}
function Header() {
  const [isLogin, setisLogin] = useState({} as userLogin);

  // get User login
  useEffect(() => {
    const islocal = localStorage.getItem("user");
    if (islocal) {
      const local = JSON.parse(islocal);
      if (local) {
        setisLogin(local);
      }
    }
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container_fluid">
          <div className="header__wrapper">
            <div className="header__text">
              Afterpay, Laybuy & Genoapay | Free Delivery New Zealand +
              Australia*
            </div>
            <div className="header__auth">
              <div className="header__log">
                {isLogin?.email ? (
                  <p>
                    <Link to="/login">{isLogin.email}</Link> /
                    <p onClick={() => {
                       localStorage.removeItem("user");
                        setisLogin({} as userLogin);
                    }}>Logout</p>
                  </p>
                ) : (
                  <>
                    <span>Sign In</span>/ <span>Register</span>
                  </>
                )}
              </div>
              <div className="header__language">
                <img srcSet="src/assets/images/usa.jpg 2x" alt="" />
                <span>USD</span>
                <img srcSet="src/assets/icons/down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container_fluid">
          <div className="header__bottom_wrapper">
            <div className="header__logo">
              <a href="/index.html" className="link_header">
                <img src="src/assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className="header__bottom-nav">
              <ul className="nav__header">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#fashion">fashion style</a>
                </li>
                <li>
                  <a href="#apple">apple watch</a>
                </li>
                <li>
                  <a href="#iphone">iphone</a>
                </li>
              </ul>
            </div>
            <div className="header__bottom-cart">
              <div className="header__bottom-input">
                <a href="/myCard.html">
                  <img src="src/assets/icons/search.svg" alt="" />
                </a>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search anything here"
                />
              </div>
              <div className="header__bottom-shop">
                <button className="header__shop btn_card">
                  <Link to="/cart">
                    <img src="src/assets/icons/header_shop.svg" alt="" />
                  </Link>
                </button>
                <button className="/orders">
                  <Link to="order.html">
                    <img src="src/assets/icons/book_.svg" alt="" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
