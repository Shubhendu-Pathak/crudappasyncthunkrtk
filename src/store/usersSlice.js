import { createSlice } from "@reduxjs/toolkit";
import { deleteusers, getusers, postusers,putusers } from "./thunk/fetchUsers";



const usersSlice =  createSlice({
    name:'users',
    initialState:{
        isLoading:true,
        data:null,
        error:null
    },
    extraReducers(builder){
        builder.addCase(postusers.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(postusers.fulfilled,(state,action)=>{
            state.isLoading=false
        }),
        builder.addCase(postusers.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error
        }),
        // getusers
        builder.addCase(getusers.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(getusers.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload
        }),
        builder.addCase(getusers.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error
        }),
        // put 
        builder.addCase(putusers.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(putusers.fulfilled,(state,action)=>{
            state.isLoading=false
        }),
        builder.addCase(putusers.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error
        }),
        // delete
        builder.addCase(deleteusers.pending,(state,action)=>{
            state.isLoading=true
           
        }),
        builder.addCase(deleteusers.fulfilled,(state,action)=>{
            state.isLoading=false
            let {id} = action.payload
            if(id){
                state.data= state.data.filter(ele=>ele.id !== id)
            }
        }),
        builder.addCase(deleteusers.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error
        })
    }
})

export const usersReducer = usersSlice.reducer