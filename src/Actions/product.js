import { ADD_PRODUCT, DELETE_PRODUCT } from "./type";

export const addProduct = (product) =>(
    {
        type: ADD_PRODUCT,
        data: product
    }
);
export const deleteProduct = (key) =>(
    {
        type: DELETE_PRODUCT,
        key: key
    }
);