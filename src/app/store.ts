import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../features/example/exampleSlice";
import collectionReducer, { CollectionState } from "../features/collection/collectionSlice";

function loadCollectionFromLocalStorage(): CollectionState["items"] {
  try {
    const raw = localStorage.getItem("collection:items");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

const preloadedState = {
  collection: {
    items: loadCollectionFromLocalStorage(),
  },
};

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    collection: collectionReducer,
  },
  preloadedState,
});

// persist collection slice
let lastSerialized = JSON.stringify((preloadedState as any).collection?.items ?? []);
store.subscribe(() => {
  const items = (store.getState() as any).collection?.items ?? [];
  const serialized = JSON.stringify(items);
  if (serialized !== lastSerialized) {
    lastSerialized = serialized;
    try {
      localStorage.setItem("collection:items", serialized);
    } catch {
      // ignore quota errors
    }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
