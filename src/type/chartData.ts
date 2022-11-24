export interface IDataState {
    id: number;
    title: string;
    period_start: number;
    period_end: number;
    sub: number | IDataState[];
}

export enum dataActionTypes {
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
}

interface fetchDataSuccessAction {
    type: dataActionTypes.FETCH_DATA_SUCCESS;
    payload: {
        data: IDataState;
    };
}

export type dataAction = fetchDataSuccessAction