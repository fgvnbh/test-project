import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import reducer from '../reducers'
export default configureStore({
  reducer: reducer,
    middleware: [thunk]
});
