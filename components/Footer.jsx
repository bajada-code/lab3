import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`footer ${theme}`}>
      <p>© 2025 Theme Toggle App</p>
    </footer>
  );
};

export default Footer;
