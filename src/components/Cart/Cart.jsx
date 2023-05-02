import React from 'react';
import Modal from '../UI/Modal';
import styles from '../../style';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../store/modalSlice';
import { addItem, removeItem } from '../../store/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const orderHandler = () => {
    console.log(...items);
  };
  return (
    <Modal>
      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-scroll">
        <ul>
          {items.map((item) => (
            <li
              className="flex-1 flex border-b border-orange-500 py-2 justify-between"
              key={item.id}>
              <div className="flex flex-col  ">
                <p className={`text-white font-bold text-[32px] font-poppins`}>
                  {item.name}
                </p>
                <div className="flex flex-row gap-6 font-poppins text-[18px]">
                  <p className="text-orange-500">
                    ${+(item.amount * item.price).toFixed(2)}
                  </p>
                  <p className="text-white">&times;{item.amount}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  className="bg-white border border-orange-500 px-4 py-1 rounded-md flex justify-center items-center "
                  onClick={() => {
                    dispatch(
                      addItem({
                        name: item.name,
                        price: item.price,
                        amount: 1,
                        id: item.id,
                      })
                    );
                  }}>
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(
                      removeItem({
                        name: item.name,
                        price: item.price,
                        amount: 1,
                        id: item.id,
                      })
                    );
                  }}
                  className="bg-white border border-orange-500 px-4 py-1 rounded-md flex justify-center items-center">
                  -
                </button>
              </div>
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
        {items.length > 0 && (
          <button
            onClick={orderHandler}
            className=" bg-orange-600 rounded-full px-6 py-2 text-white">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
