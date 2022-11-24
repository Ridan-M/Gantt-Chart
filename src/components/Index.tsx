import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Chart from "./Chart";
import {useDataActions} from "../hooks/useAction";


const Index = () => {
    const [countShow, setCountShow] = useState(0)
    const {fetchData} = useDataActions();


    useEffect(() => {
        fetchData()
    }, [countShow])


    return (
        <div className='main_container'>
            <Navbar setCountShow={setCountShow} countShow={countShow}/>
            <Chart countShow={countShow}/>
        </div>
    )

};

export default Index;