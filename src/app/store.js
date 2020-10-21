import { configureStore } from '@reduxjs/toolkit';
import virusApiRecuder from '../features/virusApi/virusApiSlice'

export default configureStore({
  reducer: {
    virusApi:virusApiRecuder,
  },
});
