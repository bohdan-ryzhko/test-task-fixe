import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://64c92b1db2980cec85c20028.mockapi.io";

export const getProductList = createAsyncThunk(
  "product-list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/products`);
      return response.json();
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
