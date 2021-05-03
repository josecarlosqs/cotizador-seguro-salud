import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './personal-info/personalInfoReducer';

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer
  }
})

export default store;