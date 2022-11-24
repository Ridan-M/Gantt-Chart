import {Dispatch} from "redux";
import {dataAction, dataActionTypes} from "../type/chartData";
import {getData} from "../api/api";


export const fetchData = () => {
    return async (dispatch: Dispatch<dataAction>) => {
        try {
            const res = await getData()
                dispatch({
                    type: dataActionTypes.FETCH_DATA_SUCCESS,
                    payload: {data: res.data.chart}
                })
        } catch (e) {
            console.log(e)
        }
    }
}
