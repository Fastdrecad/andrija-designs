import { configureStore } from '@reduxjs/toolkit';

import routeReducer from './routeSlice';

export default configureStore({
  reducer: {
    route: routeReducer
  }
});
