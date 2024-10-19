import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderConteiner from "./HeaderContainer";
import PathConstants from "../../routes/pathConstants";
import Logo from "../Logo";
import { Toggle } from "react-hook-theme";
import "react-hook-theme/dist/styles/style.css";
import "./Header.scss";

export default function Header() {
  const [navigation, setNavigation] = useState(false);
  
  return (
    <HeaderConteiner className={"header"}>
      <div className="header__items">
        <Logo imgAlt={"Cook Book logo"} />

        <div className="navigation">
          <div className={navigation ? "mobile-menu active" : "styles.mobile-menu"} 
            onClick={() => {setNavigation(!navigation)}}>
            <span /><span /><span />
          </div>
              
          <nav className={navigation ? "header__menu open" : "header__menu"} id="menuList">
            <ul className={navigation ? "menu__list show" : "menu__list"}>
                      
              <li className="menu__item-mobile">
                <NavLink to={PathConstants.STARTPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Start
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.SELECTEDPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Select recipe
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.COOKBOOKBLOGPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>CookBook Blog
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.ABOUTPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Toggle />
      </div>
    </HeaderConteiner>
  );
}
