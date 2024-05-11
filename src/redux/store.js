import { configureStore } from "@reduxjs/toolkit"
import artikelReducer from "./reducers/artikel.reducer"
import psikologReducer from "./reducers/psikolog.action"
import konselingReducer from "./reducers/konseling.reducer"
import userReducer from "./reducers/user.reducer"
import laporReducer from "./reducers/lapor.reducer"

const store = configureStore({
    reducer: {
        artikel : artikelReducer,
        psikolog : psikologReducer,
        konseling : konselingReducer,
        user : userReducer,
        lapor : laporReducer
    }
})

export default store