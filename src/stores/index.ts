import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./authStore/authReducer";

export const store = configureStore({
  reducer: {
    authStore: AuthSlice.reducer,
  },
  // Added this mdware to fix error "A none-serializable value was detected..."
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
