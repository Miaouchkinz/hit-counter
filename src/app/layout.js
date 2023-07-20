import './styles.css';

import React from 'react';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Page rendered on {new Date().toLocaleString()}
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
