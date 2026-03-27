import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store;

// store create
// wrap app component
// slice create
// Rgister slice reducer in store
