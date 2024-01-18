import {createSlice , PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    value:[]
}

export const product = createSlice({
    name:"product",
    initialState,
    reducers:{
        
        populateProducts:(state , action)=>{
            return{
                value: action.payload
            }
        }
    }
});


export const {populateProducts} = product.actions;
export default product.reducer;