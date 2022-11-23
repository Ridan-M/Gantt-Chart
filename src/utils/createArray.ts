import {IDataState} from "../type/chartData";


export const createArray = (chart: IDataState) => {
    let arr: IDataState[] = [] ;

    function createArr(ob: IDataState) {
        if (ob.sub && (typeof ob.sub !== 'number')) {
            arr.push({...ob, sub: ob.sub.length})
            ob.sub.forEach((s: IDataState) => {
                createArr(s)
            })
        }
        if (!ob.sub) {
            arr.push({...ob})
        }
    }
    createArr(chart)
    if(arr) return arr
}