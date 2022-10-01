/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState, useEffect} from "react";
import "./Header.scss";
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
       
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
  return (
    <nav>
    {(toggleMenu || screenWidth > 574) && (
    <ul className="list" >
    <li className="items" href="#">Registrar</li>
    <li className="items">LogIn</li>
    <li className="items">Clearence</li>
    <li className="items">Contact</li>
    <li className="items">Help Us</li>
  </ul>
    )}

    <button onClick={toggleNav} className="btn" data-toggle="button" aria-pressed="false">+</button>
  </nav>
);
};
export default Header;
