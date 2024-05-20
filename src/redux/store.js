import { configureStore } from "@reduxjs/toolkit";
import artikelReducer from "./reducers/artikel.reducer";
import dataUserReducer from "./reducers/datauser.reducer";
import konselingReducer from "./reducers/konseling.reducer";
import laporReducer from "./reducers/lapor.reducer";
import psikologReducer from "./reducers/psikolog.action";
import userReducer from "./reducers/user.reducer";

const store = configureStore({
  reducer: {
    artikel: artikelReducer,
    psikolog: psikologReducer,
    konseling: konselingReducer,
    user: userReducer,
    lapor: laporReducer,
    datauser: dataUserReducer,
  },
});

export default store;
