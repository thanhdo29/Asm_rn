import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_url = "http://192.168.54.9:3000/newProducts";

export const addNewProduct = createAction('product/addNew');
export const updateNewProduct = createAction('product/updateNew');
export const deleteNewProduct = createAction('product/deleteNew');
export const cleanNewProduct = createAction('product/cleanNew');


export const fetchNewProduct = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            dispatch(cleanNewProduct());
            data.forEach(item => {
                dispatch(addNewProduct(item))
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateNewProductApi = createAsyncThunk(
    'product/updateNew',
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

export const deleteNewProductApi = createAsyncThunk(
    'product/deleteNew',
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

export const addNewProductApi = createAsyncThunk(
    'product/addNew',
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
