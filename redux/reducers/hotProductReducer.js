import { createReducer } from "@reduxjs/toolkit";
import { addHotProduct, addHotProductApi, cleanHotProduct, deleteHotProductApi, updateHotProductApi } from "../actions/hotProductAction";

const initialState={productHot:[]};

const hotReducer=createReducer(initialState,(builde)=>{
    builde
        .addCase(addHotProduct, (state, action)=>{
            state.productHot.push(action.payload);
        })
        .addCase(cleanHotProduct, (state,action)=>{
        state.productHot=[];
        })

    //thêm sản phẩm yêu thích
    builde
        .addCase(addHotProductApi.fulfilled, (state,action)=>{
            state.productHot.push(action.payload);
        })
        .addCase(addHotProductApi.rejected, (state,action)=>{
            console.log("Lỗi thêm: ", action.error.message);
        })

    //sửa sản phẩm yêu thích
    builde
        .addCase(updateHotProductApi.fulfilled, (state,action)=>{
            const{id, nameProduct, priceProduct,imgProduct,describeProduct,quantity,companyProduct}=action.payload
            const hot=state.productHot.find(item=>item.id===id);

            if (hot) {
                hot.nameProduct=nameProduct;
                hot.priceProduct=priceProduct;
                hot.imgProduct=imgProduct;
                hot.describeProduct=describeProduct;
                hot.quantity=quantity;
                hot.companyProduct=companyProduct;
            }
        })
        .addCase(updateHotProductApi.rejected, (state,action)=>{
            console.log("Lỗi sửa: ", action.error.message);
        })

    //xóa sản phẩm yêu thích
    builde
        .addCase(deleteHotProductApi.fulfilled, (state,action)=>{
            state.productHot=state.productHot.filter(item=> item.id !== action.payload)
        })
        .addCase(deleteHotProductApi.rejected, (state,action)=>{
            console.log("Lỗi xóa: ", action.error.message);
        })
    
})

export default hotReducer;