import { createReducer } from "@reduxjs/toolkit";
import { addComment, addCommentApi, addCommenttApi, cleanComment } from "../actions/commentAction";
const initialState={comments:[]};

const commentReducer=createReducer(initialState,(builde)=>{
    builde
        .addCase(addComment, (state, action)=>{
            state.comments.push(action.payload);
        })
        .addCase(cleanComment, (state,action)=>{
        state.comments=[];
        })

    //thêm sản phẩm yêu thích
    builde
        .addCase(addCommentApi.fulfilled, (state,action)=>{
            state.comments.push(action.payload);
        })
        .addCase(addCommentApi.rejected, (state,action)=>{
            console.log("Lỗi thêm: ", action.error.message);
        })
    
})

export default commentReducer;