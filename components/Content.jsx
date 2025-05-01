import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Content = () => {
  const { theme } = useTheme();
  return (
    <main className={`content ${theme}`}>
      <p>This is some content styled by the current theme.</p>
    </main>
  );
};

export default Content;
