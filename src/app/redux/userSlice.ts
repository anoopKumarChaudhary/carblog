import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UserState {
  data: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: UserState = {
  data: null,
  status: "idle",
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id: string) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data as User;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
        state.data = null;
      });
  },
});

export default userSlice.reducer;
