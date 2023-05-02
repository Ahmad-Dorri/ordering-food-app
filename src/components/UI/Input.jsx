import React from 'react';
import styles from '../../style';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const input = props.input;
  return (
    <div className="flex flex-row gap-4">
      <label className={`font-bold font-poppins `} htmlFor={input.id}>
        Amount
      </label>
      <input
        ref={ref}
        className={`${styles.flexCenter} font-bold font-poppins ${props.className}`}
        {...input}
        onChange={props.onChange}>
        {props.children}
      </input>
    </div>
  );
});

export default Input;
