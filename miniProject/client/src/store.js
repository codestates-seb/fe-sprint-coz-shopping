import { configureStore } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'state 이름',
    initialState :'값'
    
})
export default configureStore({
  reducer: { 
    user : user.reducer
  }
}) 