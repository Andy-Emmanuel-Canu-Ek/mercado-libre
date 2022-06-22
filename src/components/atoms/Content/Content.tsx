import React from 'react';

const Content: React.FC = ({ children }) => (
  <div className="flex">
    <div className="flex-1 max-w-screen-xl m-auto bg-white-color">{children}</div>
  </div>
);
export default Content;
