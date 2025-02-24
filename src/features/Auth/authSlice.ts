// src/features/Auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const storedAccessToken = localStorage.getItem("accessToken");
const storedRefreshToken = localStorage.getItem("refreshToken");

const initialState: AuthState = {
  accessToken: storedAccessToken,
  refreshToken: storedRefreshToken,
  isAuthenticated: !!storedAccessToken, // Если accessToken есть – считаем, что авторизованы
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // При успешном логине сохраняем оба токена
    loginSuccess(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    // Обновление только access токена после refresh
    refreshSuccess(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
      state.isAuthenticated = true;
    },
    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { loginSuccess, refreshSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
