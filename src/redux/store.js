import { configureStore } from "@reduxjs/toolkit"
import artikelReducer from "./reducers/artikel.reducer"
import psikologReducer from "./reducers/psikolog.action"
import konselingReducer from "./reducers/konseling.reducer"
import userReducer from "./reducers/user.reducer"

const store = configureStore({
    reducer: {
        artikel : artikelReducer,
        psikolog : psikologReducer,
        konseling : konselingReducer,
        user : userReducer
    }
})

export default store