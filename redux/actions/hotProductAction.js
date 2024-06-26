import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_url = "http://192.168.54.9:3000/hotProducts";

export const addHotProduct = createAction('product/addHot');
export const updateHotProduct = createAction('product/updateHot');
export const deleteHotProduct = createAction('product/deleteHot');
export const cleanHotProduct = createAction('product/cleanHot');


export const fetchHotProduct = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            dispatch(cleanHotProduct());
            data.forEach(item => {
                dispatch(addHotProduct(item))
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateHotProductApi = createAsyncThunk(
    'product/updateHot',
    async (objUpdate, thunkApi) => {
        try {
            const res = fetch(`${api_url}/${objUpdate.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objUpdate)
            })
            const data = (await res).json();
            if ((await res).ok) {
                return data;
            } else {
                const errorData = (await res).json();
                return thunkApi.rejectWithValue(errorData);
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const deleteHotProductApi = createAsyncThunk(
    'product/deleteHot',
    async (id, thunkApi) => {
        try {
            const res = await fetch(`${api_url}/${id}`, {
                method: "DELETE"
            })
            if (res.ok) {
                return id;
            } else {
                const errorData = await res.json();
                return thunkApi.abort(errorData)
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const addHotProductApi = createAsyncThunk(
    'product/addHot',
    async (objAdd, thunkApi) => {
        try {
            const res =await fetch(`${api_url}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objAdd)
            })
            const data=res.json();
            if (res.ok) {
                return data;
            }else{
                const errorData=res.json();
                return thunkApi.rejectWithValue(errorData);
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)


