"use client"
import React, { useEffect, useRef } from 'react';
import Styles from './RightNav.module.css';
import {usePathname} from "next/navigation";

interface RightNavProps {
  open: boolean;
}

const RightNav: React.FC<RightNavProps> = ({ open }) => {
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

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path ? 'active' : '';

  return (
    <ul className={Styles.ul} ref={navRef}>
      <li><a style={{color: isActive("/") ? 'grey' : ''}} href="/">Home</a></li>
      <li><a style={{color: isActive("/project") ? 'grey' : ''}} href="/project">Projects</a></li>
      <li><a style={{color: isActive("/about-me") ? 'grey' : ''}} href="/about-me">About me</a></li>
      <li><a style={{color: isActive("/contact") ? 'grey' : ''}} href="/contact">Contact</a></li>
    </ul>
  );
}

export default RightNav;



