import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { contactType } from 'types/contact';

interface ContactState {
    contacts: contactType[];
}

const initialState: ContactState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<contactType[]>) => {
            state.contacts = JSON.parse(localStorage.getItem('Contacts')) || [];
        },
        addContact: (state, action: PayloadAction<contactType>) => {
            state.contacts.push(action.payload);
            localStorage.setItem('Contacts', JSON.stringify(state.contacts))
        },
        updateContact: (state, action: PayloadAction<contactType>) => {
            const index = state.contacts.findIndex((c) => c.id === action.payload.id);
            if (index !== -1) {
                state.contacts[index] = action.payload;
                localStorage.setItem('Contacts', JSON.stringify(state.contacts))
            }
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter((c) => c.id !== action.payload);
            localStorage.setItem('Contacts', JSON.stringify(state.contacts))
        },
    },
});

export const { setContacts, addContact, updateContact, deleteContact } = contactSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.contacts;

export default contactSlice.reducer;
