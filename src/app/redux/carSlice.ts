// features/carSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CarPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CarState {
  posts: CarPost[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchCarPosts = createAsyncThunk("car/fetchCarPosts", async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  return res.data as CarPost[];
});

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchCarPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default carSlice.reducer;
