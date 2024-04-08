import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_url = "http://192.168.54.9:3000/comments";

export const addComment= createAction('product/addComment');
export const cleanComment = createAction('product/cleanFavourite');


export const fetchComment = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            dispatch(cleanComment());
            data.forEach(item => {
                dispatch(addComment(item));
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export const addCommentApi = createAsyncThunk(
    'comment/addComment',
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


