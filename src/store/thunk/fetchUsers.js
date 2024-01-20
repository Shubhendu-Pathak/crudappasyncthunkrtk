import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const postusers = createAsyncThunk('users/postdata',async(para)=>{
let response  =await axios.post(`http://localhost:4000/users`,para)

return response.data
})


export const getusers = createAsyncThunk('users/getdata',async()=>{
    let response  =await axios.get(`http://localhost:4000/users`)
    
    return response.data
    })

export const putusers = createAsyncThunk('users/putdata',async(para)=>{
        let response  =await axios.patch(`http://localhost:4000/users/${para.id}`,para)
        
        return response.data
        })

export const deleteusers = createAsyncThunk('users/deletedata',async(para)=>{
 let response  =await axios.delete(`http://localhost:4000/users/${para.id}`)
            
            return response.data
            })

