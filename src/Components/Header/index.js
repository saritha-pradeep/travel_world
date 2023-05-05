import styles from "./styles.module.css";

import { Link } from "react-router-dom";
function Header(parms) {
  return (
    <div className={styles.header}>
        <div className={styles.imgWrapper}>
          <img
            src={require("../../assets/logo.png")}
            alt="logo"
            className={styles.logo_img}
          />
          <p className={styles.logo}>TRAVEL WORLD</p>
        </div>
        <ul className={styles.mainMenu}>
          <Link className={styles.link_txt} to="/">
            HOME
          </Link>
          
          <Link className={styles.link_txt} to="/views">
            VIEWS
          </Link>
          <Link className={styles.link_txt} to="/about">
            ABOUT
          </Link>
          <Link className={styles.link_txt} to="/contact">
            CONTACT US
          </Link>
        </ul>
    </div>
  );
}
export default Header;
