import React from 'react';
import Styles from './Nav.module.css';
import Burger from './Burger';

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
      <Burger />
    </nav>
  );
}

export default Navbar;

