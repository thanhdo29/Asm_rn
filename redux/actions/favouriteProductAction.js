import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_url = "http://192.168.54.9:3000/favouriteProducts";

export const addFavouriteProduct = createAction('product/addFavourite');
export const updateFavouriteProduct = createAction('product/updateFavourite');
export const deleteFavouriteProduct = createAction('product/deleteFavourite');
export const cleanFavouriteProduct = createAction('product/cleanFavourite');


export const fetchFavouriteProduct = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            dispatch(cleanFavouriteProduct());
            data.forEach(item => {
                dispatch(addFavouriteProduct(item));
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateFavouriteProductApi = createAsyncThunk(
    'product/updateFavourite',
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

export const deleteFavouriteProductApi = createAsyncThunk(
    'product/deleteFavourite',
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

export const addFavouriteProductApi = createAsyncThunk(
    'product/addFavourite',
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


