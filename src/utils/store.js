import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    videos: videoReducer,
  },
});

export default store;
