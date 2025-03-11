'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import MenuItemComponent from './MenuItem';
import { Inter } from 'next/font/google';
import styles from './Header.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export interface MenuItem {
  label: string;
  icon?: string;
  href?: string;
  submenu?: MenuItem[];
}

const CustomIconButton = styled(Button)<{ component?: React.ElementType }>(({ theme }) => ({
  minWidth: 'unset',
  padding: 0,
  borderRadius: '50%',
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const menuConfig: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Features',
    submenu: [
      { label: 'Analytics', href: '/#' },
      { label: 'Integration', href: '/#' },
      { label: 'Customization', href: '/#' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [burgerActive, setBurgerActive] = React.useState(false);
  const toggleBurger = () => setBurgerActive((prev) => !prev);

  React.useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [burgerActive]);

  return (
    <header className={styles.header}>
      <div  className={`${styles.logo} ${inter.className} ${burgerActive ? styles.whiteLogo : ''}`}>Logo Here</div>
      <span
        className={`${styles.header__burger} ${burgerActive ? styles.active : ''}`}
        onClick={toggleBurger}
      >
        <span></span>
      </span>
      <div className={`${styles.rightSection} ${burgerActive ? styles.active : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuConfig.map((item, index) => (
              <MenuItemComponent
                key={index}
                item={item}
                isActive={item.href === pathname}
                isMenu={burgerActive}
              />
            ))}
          </ul>
        </nav>
        <div className={styles.iconButtons}>
          <CustomIconButton component={Link} href="/cart">
            <Image
              src={burgerActive ? "/icons/white_user.svg" : "/icons/user.svg"}
              alt="User"
              width={24}
              height={24}
            />
          </CustomIconButton>
          <CustomIconButton component={Link} href="/cabinet">
            <Image
              src={burgerActive ? "/icons/white_cart.svg" : "/icons/cart.svg"}
              alt="Cart"
              width={24}
              height={24}
            />
          </CustomIconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
