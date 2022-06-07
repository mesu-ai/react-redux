import axios from "axios"
import { DECREMENT, GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT, RESET } from "../constants/Constant"

// counter app
export const incrementCounter=()=>{
    return {
        type:INCREMENT,
    }
}
export const decrementCounter=()=>{
    return {
        type:DECREMENT,
    }
}

export const resetCounter=()=>{
    return {
        type:RESET,
    }
}


// fetch data from api

export const getAllTodos=()=>async(dispatch) =>{
    dispatch({
        type: GET_TODOS_REQUEST,
    });
     
    try {
        const res= await axios.get('https://jsonplaceholder.typicode.com/todos');
     
     dispatch({
         type:GET_TODOS_SUCCESS,
         payload:res.data

     })
        
    } catch (error) {
        dispatch({
            type:GET_TODOS_FAILED,
            payload:error.message
        })
        
    }
}