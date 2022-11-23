import {Dispatch} from "redux";
import {dataAction, dataActionTypes} from "../type/chartData";
import {getData} from "../api/api";
import {createArray} from "../utils/createArray";

export const fetchData = () => {
    return async (dispatch: Dispatch<dataAction>) => {
        try {
            const res = await getData()
            const arrayData = createArray(res.data.chart)
            if (arrayData) {
                dispatch({
                    type: dataActionTypes.FETCH_DATA_SUCCESS,
                    payload: {data: arrayData}
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
