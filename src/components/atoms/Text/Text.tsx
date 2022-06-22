import React from 'react';

const Text = ({ size, text, ...props }) => {
  return (
    <p {...props} style={{ fontSize: size }}>
      {text}
    </p>
  );
};
export default Text;
