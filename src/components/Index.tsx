import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Chart from "./Chart";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDataActions} from "../hooks/useAction";
import {createArray} from "../utils/createArray";
import {IDataState} from "../type/chartData";


const Index = () => {
    // const state = useTypedSelector(state => state.data)
    // const todoArr = createArray(state)
    const [countShow, setCountShow] = useState(0)
    const {fetchData} = useDataActions();


    useEffect(() => {
        fetchData()
    },[countShow])




    return (
        <div className='main_container'>
            <Navbar  setCountShow={setCountShow} countShow={countShow}/>
            <Chart countShow={countShow}/>
        </div>
    )

};

export default Index;