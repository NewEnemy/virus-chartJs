import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import virusApiRecuder from '../features/virusApi/virusApiSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    virusApi:virusApiRecuder,
  },
});
