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
      { label: 'Analytics', href: '/features/analytics' },
      { label: 'Integration', href: '/features/integration' },
      { label: 'Customization', href: '/features/customization' },
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }, 
];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${inter.className}`}>Logo Here</div>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuConfig.map((item, index) => (
              <MenuItemComponent 
                key={index} 
                item={item} 
                isActive={item.href === pathname} 
              />
            ))}
          </ul>
        </nav>
        <div className={styles.iconButtons}>
          <CustomIconButton component={Link} href="/cart">
            <Image 
              src="/icons/cart.svg" 
              alt="Cart" 
              width={24} 
              height={24} 
            />
          </CustomIconButton>
          <CustomIconButton component={Link} href="/cabinet">
            <Image 
              src="/icons/user.svg" 
              alt="User" 
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
