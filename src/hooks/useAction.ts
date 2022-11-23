import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionCreators from "../store/actionCreator";


export const useDataActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}