import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  email: string | null;
  firstName: string | null;
  id: number | null;
  lastName: string | null;
}

const initialState: ProfileState = {
  email: null,
  firstName: null,
  id: null,
  lastName: null,
};

const profileSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
    },
    clearProfile: (state) => {
      state.email = null;
      state.firstName = null;
      state.id = null;
      state.lastName = null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
