import {createSlice , PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    value:{
        isAuth:false,
        customer:{},
        accessToken:'',
    }
}

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:()=>{
            return initialState
        },

        populateLogIn:(state , action)=>{
            return{
                value:action.payload
            }
        }
    }
});


export const {populateLogIn,logOut} = auth.actions;
export default auth.reducer;