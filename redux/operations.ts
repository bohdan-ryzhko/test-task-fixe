import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IProduct } from "../interfaces";

axios.defaults.baseURL = "https://64c92b1db2980cec85c20028.mockapi.io";

export const getProductList = createAsyncThunk<IProduct[]>(
  "product/list",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IProduct[]> = await axios.get("products");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
