import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import MealsFrom from './MealsFrom';
const MealsItem = (props) => {
  const dispatch = useDispatch();
  const price = Number(props.price).toFixed(2);
  const addItemHandler = (amount) => {
    const item = {
      name: props.name,
      price: props.price,
      amount: amount,
      id: props.id,
    };
    dispatch(addItem(item));
  };
  return (
    <li className="flex flex-row items-center justify-between p-2 border-b-2">
      <div>
        <h3 className="font-bold">{props.name}</h3>
        <p className="italic text-blue-700">{props.description}</p>
        <p className="text-yellow-700 font-bold">${price}</p>
      </div>
      <div>
        <MealsFrom onAmount={addItemHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealsItem;
