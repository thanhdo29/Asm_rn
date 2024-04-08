import { createReducer } from "@reduxjs/toolkit";
import { addViewedProduct, addViewedProductApi, updateViewedProductApi, deleteViewedProductApi, cleanViewedProduct } from "../actions/viewedProductAction";
const initialState={productViewed:[]};

const newReducer=createReducer(initialState,(builder) => {
    builder
        .addCase(addViewedProduct, (state, action)=>{
            state.productViewed.push(action.payload);
        })
        .addCase(cleanViewedProduct, (state, action) => {
            state.productNew = [];
        })

    //sửa sản phẩm yêu thích
    builder
        .addCase(updateViewedProductApi.fulfilled, (state, action) => {
            const { id, nameProduct, priceProduct, imgProduct, describeProduct, quantity, companyProduct } = action.payload;
            const newPro = state.productViewed.find(item => item.id === id);

            if (newPro) {
                newPro.nameProduct = nameProduct;
                newPro.priceProduct = priceProduct;
                newPro.imgProduct = imgProduct;
                newPro.describeProduct = describeProduct;
                newPro.quantity = quantity;
                newPro.companyProduct = companyProduct;
            }
        });
    
    //xóa sản phẩm yêu thích
    builder
        .addCase(deleteViewedProductApi.fulfilled, (state, action) => {
            state.productNew = state.productViewed.filter(item => item.id !== action.payload);
        });
});

export default newReducer;
