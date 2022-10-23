import React from 'react';
//style
import styles from "./Navbar.module.css"
const Navbar = ({ logoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Dnigram</div>
      <div className={styles.logout} onClick={logoutHandler}>Log out</div>
    </div>
  );
};

export default Navbar;