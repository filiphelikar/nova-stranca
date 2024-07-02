"use client"
import React, { useEffect, useRef } from 'react';
import Styles from './RightNav.module.css';
import {usePathname} from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../app/_GlobalRedux/store';
import { RootState } from '../../app/_GlobalRedux/store';
import Link from 'next/link';

interface RightNavProps {
  open: boolean;
  setOpen: any
}

const RightNav: React.FC<RightNavProps> = ({ open, setOpen }) => {
  const navRef = useRef<HTMLUListElement | null>(null);
  
  useEffect(() => {
    const resize = () => {
      
      if (window.innerWidth > 768) {
        if (navRef.current) {
          navRef.current.style.display = 'flex';
          navRef.current.style.transition = "none"
          navRef.current.classList.remove(Styles.open);
        }
      } else {
        if (navRef.current) {
          if (open) {
            navRef.current.style.display = 'block';
            setTimeout(() => {
              if (navRef.current) {
                navRef.current.classList.add(Styles.open);
                navRef.current.style.transition = "0.3s"
                
              }
            }, 10);
          } else {
            if (navRef.current) {
              navRef.current.classList.remove(Styles.open);
              
            }
            setTimeout(() => {
              if (navRef.current) {
                if (window.innerWidth < 768) {
                  navRef.current.style.display = 'none';
                } 
              }
            }, 300); 

          }
        }
      }
    };

    resize(); 
    window.addEventListener('resize', resize); 

    return () => window.removeEventListener('resize', resize); 
  }, [open]);

  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);

  const Toggle = () => {
    dispatch(toggleLanguage())
  };

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path ? 'active' : '';

  return (
    <>
    {open && <div onClick={() => setOpen(!open)} className={Styles["cloasing"]}></div>}
    <ul className={Styles.ul} ref={navRef}>
      <li><Link onClick={() => setOpen(!open)} scroll={false} style={{color: isActive("/") ? 'grey' : ''}} href="/">Home</Link></li>
      <li><Link  onClick={() => setOpen(!open)} scroll={false} style={{color: isActive("/project") ? 'grey' : ''}} href="/project">Projects</Link></li>
      <li><Link  onClick={() => setOpen(!open)} scroll={false} style={{color: isActive("/about-me") ? 'grey' : ''}} href="/about-me">About me</Link></li>
      <li><Link  onClick={() => setOpen(!open)} scroll={false} style={{color: isActive("/contact") ? 'grey' : ''}} href="/contact">Contact</Link></li>
      <li>
      <button onClick={() => {Toggle(); setOpen(!open)}}>
      { lang }
    </button>
      </li>
      
    </ul>
    </>
  );
}

export default RightNav;



