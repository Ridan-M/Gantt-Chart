export interface IDataState {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub: number;
}

export enum dataActionTypes {
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
}

interface fetchDataSuccessAction {
    type: dataActionTypes.FETCH_DATA_SUCCESS;
    payload: {
        data: IDataState[];
    };
}

export type dataAction = fetchDataSuccessAction