import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Chart from "./Chart";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDataActions} from "../hooks/useAction";


const Index = () => {
    const state = useTypedSelector(state => state.data)
    const {fetchData} = useDataActions();

    useEffect(() => {
        fetchData()
    },[])
    console.log(state)

    return (
        <div className='main_container'>
            <Navbar />
            <Chart/>
        </div>
    );
};

export default Index;