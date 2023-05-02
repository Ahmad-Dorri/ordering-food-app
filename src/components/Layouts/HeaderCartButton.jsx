import CartIcon from '../../constants/CartIcon';
import { setShowModal } from '../../store/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderCartButton = () => {
  const items = useSelector((state) => state.cart.items);
  const numberOfItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setShowModal(true));
      }}
      type="button"
      className="text-white font-poppins grid py-4 px-6 grid-cols-3 items-center justify-center bg-blue-gradient rounded-full">
      <span className="w-[24px] h-[24px] object-contain justify-self-center">
        <CartIcon />
      </span>
      <span className="font-bold">Your Cart</span>
      <span className="ml-8 bg-black-gradient rounded-full w-[24px] h-[24px]">
        {numberOfItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
