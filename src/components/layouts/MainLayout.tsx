import React, { useEffect } from 'react';
import Head from './Head';

// eslint-disable-next-line
interface IMainLayout {
  // Define you props if you need it
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};

export default MainLayout;
