import React, {FC} from 'react';
import s from './styles/Chart.module.css'
import {useTypedSelector} from "../hooks/useTypedSelector";


const Chart: FC<{countShow: number}> = ({countShow}) => {
    const state = useTypedSelector(state => state.data)


    return (
        <div className={s.chart}>
            
        </div>
    );
};

export default Chart;