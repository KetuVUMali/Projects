import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
        name: 'counter',                 // slice name
        initialState: { value: 0 },    // initial state of slice
        reducers: {                 // reducers of slice
                                    // reducer functions to update the state
                    increment: (state) => {   state.value += 1   },
                    decrement: (state) => {   state.value -= 1 },
                    reset: (state) => {   state.value =0  },
                    incrementByAmount: (state, action) => { state.value += action.payload  },
                    // incrementByAmount:  take old value and new value and add them together 
                },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer