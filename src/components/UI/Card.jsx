import React from 'react';

const Cart = (props) => {
  return (
    <div className={`${props.className} rounded-md p-4`}>{props.children}</div>
  );
};

export default Cart;
