import { useRef } from 'react';
import { useState } from 'react';
import Input from '../../UI/Input';
const MealsFrom = (props) => {
  const [isNumValid, setIsNumValid] = useState(true);
  const amountRef = useRef(null);
  const [amount, setAmount] = useState(1);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    amountRef.current = amount;
    const amountNumber = +amountRef.current;
    if (amountNumber === 0 || amountNumber < 1 || amountNumber > 5) {
      setIsNumValid(false);
      return;
    }
    setIsNumValid(true);
    props.onAmount(amountNumber);
  };
  const changeInputHandler = (e) => {
    setAmount(e.target.value);
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col gap-2">
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          type: 'number',
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 1,
          id: `amount_${props.id}`,
        }}
        onChange={changeInputHandler}
      />
      <button
        className="bg-secondary px-6 py-2 font-poppins font-bold rounded-full flex-1"
        type="submit">
        +Add
      </button>
      {!isNumValid && <p>please enter the valid number</p>}
    </form>
  );
};

export default MealsFrom;
