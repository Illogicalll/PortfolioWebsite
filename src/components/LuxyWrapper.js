import React, { useEffect } from 'react';
import luxy from 'luxy.js';

const LuxyWrapper = ({ children }) => {
  useEffect(() => {
    luxy.init({ wrapper: '#luxy', wrapperSpeed: 0.6});
  }, []);

  return <div id="luxy">{children}</div>;
};

export default LuxyWrapper;