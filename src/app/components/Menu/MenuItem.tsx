'use client';
import React, { useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './MenuItem.module.css';
import { MenuItem } from './Header';

const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, ...other } = props;
  return <Link ref={ref} href={href!} {...other} />;
});
LinkBehavior.displayName = 'LinkBehavior';

const CustomButton = styled(Button)<ButtonProps>(() => ({
  textTransform: 'none',
  color: '#000',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const SubMenuButton = styled(Button)<ButtonProps>(() => ({
  textTransform: 'none',
  color: '#000',
  justifyContent: 'flex-start',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

interface MenuItemComponentProps {
  item: MenuItem;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = !!item.submenu && item.submenu.length > 0;

  const buttonProps: ButtonProps = item.href ? { component: LinkBehavior, href: item.href } : {};

  const handleClick = () => {
    if (hasSubmenu) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <li className={styles.menuItem}>
      <CustomButton onClick={handleClick} className={styles.menuButton} {...buttonProps}>
        {item.label}
        {hasSubmenu && (
          <KeyboardArrowDownIcon
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              fontSize: 16,
              marginLeft: 8
            }}
          />
        )}
      </CustomButton>
      {hasSubmenu && isOpen && (
        <ul className={styles.dropdown}>
          {item.submenu!.map((subItem, idx) => {
            const subButtonProps: ButtonProps = subItem.href ? { component: LinkBehavior, href: subItem.href } : {};
            return (
              <li key={idx} className={styles.dropdownItem}>
                <SubMenuButton className={styles.submenuButton} {...subButtonProps}>
                  {subItem.label}
                </SubMenuButton>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default MenuItemComponent;
