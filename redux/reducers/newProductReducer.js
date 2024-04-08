import { createReducer } from "@reduxjs/toolkit";
import { addNewProduct, cleanNewProduct, deleteNewProduct, deleteNewProductApi, updateNewProductApi } from "../actions/newProductAction";

const initialState={productNew:[]};

const newReducer=createReducer(initialState,(builder) => {
    builder
        .addCase(addNewProduct, (state, action)=>{
            state.productNew.push(action.payload);
        })
        .addCase(cleanNewProduct, (state, action) => {
            state.productNew = [];
        })

    //sửa sản phẩm yêu thích
    builder
        .addCase(updateNewProductApi.fulfilled, (state, action) => {
            const { id, nameProduct, priceProduct, imgProduct, describeProduct, quantity, companyProduct } = action.payload;
            const newPro = state.productNew.find(item => item.id === id);

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
        .addCase(deleteNewProductApi.fulfilled, (state, action) => {
            state.productNew = state.productNew.filter(item => item.id !== action.payload);
        });
});

export default newReducer;
