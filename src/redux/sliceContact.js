import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './constants';

const handlePaending = state => {
  state.isLoading = true;
};
const handleReject = (state, { payload }) => {
  state.error = payload;
};

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        createdAt: '2023-11-29T12:37:23.615Z',
        name: 'Brandi Bauch',
        phone: '(245) 544-2670',
        id: '1',
      },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePaending)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.pending, handlePaending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(delContactsThunk.pending, handlePaending)
      .addCase(delContactsThunk.rejected, handleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { addContactsActions, delContactsActions } = sliceContact.actions;
export const contactsReducer = sliceContact.reducer;
