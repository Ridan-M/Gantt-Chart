import {IDataState, dataAction, dataActionTypes} from "../type/chartData";

const initialState: IDataState[] = [{
    id: 0,
    title: '',
    period_start: '',
    period_end: '',
    sub: 0
}]

export const DataReducer = (state = initialState, action: dataAction): IDataState[] => {
    switch (action.type) {
        case dataActionTypes.FETCH_DATA_SUCCESS:
            return action.payload.data
        default:
            return state
    }
}