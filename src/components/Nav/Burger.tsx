"use client";
import React, { useState } from 'react';
import Styles from './Burger.module.css';
import RightNav from './RightNav';

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className={`${Styles.burger} ${open ? Styles.open : ''}`} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
}

export default Burger;

