// app/layout.js
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en" data-bs-theme={theme}>
        <head>
          <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" 
          />
          <title>BFAR - NIFTC Kiosk</title>
        </head>
        <body className="bg-body text-body min-vh-100 d-flex flex-column">
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}