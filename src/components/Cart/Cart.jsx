import React from 'react';
import Modal from '../UI/Modal';
import styles from '../../style';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../store/modalSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Modal>
      <div className="flex flex-col gap-4">
        <ul>
          {items.map((item) => (
            <li className="flex-1 flex flex-col" key={item.id}>
              <p className={`${styles.paragraph} text-black`}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex  flex-row items-center">
        <span className={`${styles.heading2} text-black`}>Total Amount</span>
        <span
          className={`${styles.heading2} text-black justify-self-end flex-1`}>
          ${totalAmount}
        </span>
      </div>
      <div
        className={`${styles.paragraph} text-black flex gap-2 items-center justify-end`}>
        <button
          onClick={() => {
            dispatch(setShowModal(false));
          }}
          className="border border-orange-600 rounded-full px-6 py-2 text-orange-600">
          Close
        </button>
        <button className=" bg-orange-600 rounded-full px-6 py-2 text-white">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
