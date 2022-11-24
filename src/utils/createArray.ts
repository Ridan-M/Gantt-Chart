import {IDataState} from "../type/chartData";

interface IArg {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub?: IArg[];
}

export const createArray = (chart: IArg) => {
    let arr: IDataState[] = [] ;

    function createArr(ob: IArg) {
        if (ob.sub && (typeof ob.sub !== 'number')) {
            arr.push({...ob, sub: ob.sub?.length})
            ob.sub.forEach((s: IArg) => {
                createArr(s)
            })
        }
        if (!ob.sub) {
            arr.push({...ob, sub: 0})
        }
    }
    createArr(chart)
    return arr
}
export {}