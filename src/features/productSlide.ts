import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



const api = "https://fakestoreapi.com/products"; 

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
    quantity?:number
}

const initialState = {
    products: [] as Product[]
}

export const fetchProducts = createAsyncThunk(
    'products/products',
    async () => {
        const response = await axios.get<Product[]>(api); 
        const data = response.data;
        return data; 
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>)=> {
            state.products = action.payload
        })
    }
})