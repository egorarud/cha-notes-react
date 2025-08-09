import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserTea {
  id: string;
  name: string;
  imageUrl?: string; // может быть как URL, так и data URL
  notes?: string;
  type?: string;
}

export interface CollectionState {
  items: UserTea[];
}

const initialState: CollectionState = {
  items: [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addTea(state, action: PayloadAction<UserTea>) {
      state.items.unshift(action.payload);
    },
    removeTea(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCollection(state) {
      state.items = [];
    },
  },
});

export const { addTea, removeTea, clearCollection } = collectionSlice.actions;
export default collectionSlice.reducer;


