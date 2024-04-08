import { createReducer } from "@reduxjs/toolkit";
import { addFavouriteProductApi, updateFavouriteProductApi, deleteFavouriteProductApi , cleanFavouriteProduct, addFavouriteProduct} from "../actions/favouriteProductAction";

const initialState={productFavourite:[]};

const favouriteReducer=createReducer(initialState,(builde)=>{
    builde
        .addCase(addFavouriteProduct, (state, action)=>{
            state.productFavourite.push(action.payload);
        })
        .addCase(cleanFavouriteProduct, (state,action)=>{
        state.productFavourite=[];
        })

    //thêm sản phẩm yêu thích
    builde
        .addCase(addFavouriteProductApi.fulfilled, (state,action)=>{
            state.productFavourite.push(action.payload);
        })
        .addCase(addFavouriteProductApi.rejected, (state,action)=>{
            console.log("Lỗi thêm: ", action.error.message);
        })

    //sửa sản phẩm yêu thích
    builde
        .addCase(updateFavouriteProductApi.fulfilled, (state,action)=>{
            const{id, nameProduct, priceProduct,imgProduct,describeProduct,quantity,companyProduct}=action.payload
            const favourite=state.productFavourite.find(item=>item.id===id);

            if (favourite) {
                favourite.nameProduct=nameProduct;
                favourite.priceProduct=priceProduct;
                favourite.imgProduct=imgProduct;
                favourite.describeProduct=describeProduct;
                favourite.quantity=quantity;
                favourite.companyProduct=companyProduct;
            }
        })
        .addCase(updateFavouriteProductApi.rejected, (state,action)=>{
            console.log("Lỗi sửa: ", action.error.message);
        })

    //xóa sản phẩm yêu thích
    builde
        .addCase(deleteFavouriteProductApi.fulfilled, (state,action)=>{
            state.productFavourite=state.productFavourite.filter(item=> item.id !== action.payload)
        })
        .addCase(deleteFavouriteProductApi.rejected, (state,action)=>{
            console.log("Lỗi xóa: ", action.error.message);
        })
    
})

export default favouriteReducer;