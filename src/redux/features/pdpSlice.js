import {createSlice , PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    value:[]
}

export const pdp = createSlice({
    name:"pdp",
    initialState,
    reducers:{
        
        populatePdp:(state , action)=>{
            return{
                value: action.payload
            }
        }
    }
});


export const {populatePdp} = pdp.actions;
export default pdp.reducer;