import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_url = "http://192.168.54.9:3000/viewedProducts";

export const addViewedProduct = createAction('product/addViewed');
export const updateViewedProduct = createAction('product/updateViewed');
export const deleteViewedProduct = createAction('product/deleteViewed');
export const cleanViewedProduct = createAction('product/cleanViewed');


export const fetchNewProduct = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            dispatch(cleanViewedProduct());
            data.forEach(item => {
                dispatch(addViewedProduct(item))
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateViewedProductApi = createAsyncThunk(
    'product/updateViewed',
    async (objUpdate, thunkApi) => {
        try {
            const res = await fetch(`${api_url}/${objUpdate.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objUpdate)
            });
            const data = await res.json();
            if (res.ok) {
                return data;
            } else {
                return thunkApi.rejectWithValue(data);
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const deleteViewedProductApi = createAsyncThunk(
    'product/deleteViewed',
    async (id, thunkApi) => {
        try {
            const res = await fetch(`${api_url}/${id}`, {
                method: "DELETE"
            });
            if (res.ok) {
                return id;
            } else {
                const errorData = await res.json();
                return thunkApi.abortWithValue(errorData);
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const addViewedProductApi = createAsyncThunk(
    'product/addViewed',
    async (objAdd, thunkApi) => {
        try {
            const res = await fetch(`${api_url}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objAdd)
            });
            const data = await res.json();
            if (res.ok) {
                return data;
            } else {
                return thunkApi.rejectWithValue(data);
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
