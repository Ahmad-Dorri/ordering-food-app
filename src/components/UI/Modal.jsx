import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../store/modalSlice';

const ModalOverlay = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setShowModal(false));
      }}
      className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
  );
};

const ModalContent = (props) => {
  return (
    <div className="max-w-[700px] w-full  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-700 shadow-lg rounded-md p-6 z-50">
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const overlayElement = document.getElementById('overlays');
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        overlayElement
      )}
      {ReactDOM.createPortal(<ModalOverlay />, overlayElement)}
    </React.Fragment>
  );
};

export default Modal;
