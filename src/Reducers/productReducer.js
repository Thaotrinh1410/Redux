import { ADD_PRODUCT, DELETE_PRODUCT } from "../Actions/type";

const initialState = {
    productList: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state, productList: state.productList.concat({
                    key: Math.random(),
                    name: action.data

                })
            };
        case DELETE_PRODUCT:
            return{
                ...state, productList: state.productList.filter((item)=>
                item.key !== action.key)
            };
        default:
            return state;
    }
}
export default productReducer;