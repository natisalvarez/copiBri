import React from "react";
import { Link } from "react-router-dom";
import Universidades from "../Universidades/Universidades";
import Home from "../Home/Home";
import styles from "./Nav.module.css";  
import Facultades from "../Facultades/Facultades";
import Grados from "../Grados/Grados";

const Nav = () => {
  return (
    <div className={styles.NavBar}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Universidades />
        </li>
        <li>
          <Facultades className={styles.center} />
        </li>
        <li>
          <Grados />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
