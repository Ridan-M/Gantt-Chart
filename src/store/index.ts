import {DataReducer} from "./dataReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    data: DataReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))