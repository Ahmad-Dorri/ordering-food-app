import { createSlice } from '@reduxjs/toolkit';
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    modalContent: null,
  },
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
    setModalContent(state, action) {
      state.modalContent = action.payload;
    },
  },
});
export const { setModalContent, setShowModal } = modalSlice.actions;
export default modalSlice;
