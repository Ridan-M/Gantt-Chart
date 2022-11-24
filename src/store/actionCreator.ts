import {Dispatch} from "redux";
import {dataAction, dataActionTypes} from "../type/chartData";
import {getData} from "../api/api";
import {createArray} from "../utils/createArray";


export const fetchData = () => {
    return async (dispatch: Dispatch<dataAction>) => {
        try {
                const res = await getData()
                const createDataArray = createArray(res.data.chart)
                dispatch({
                    type: dataActionTypes.FETCH_DATA_SUCCESS,
                    payload: {data: createDataArray}
                })
        } catch (e) {
            console.log(e)
        }
    }
}
