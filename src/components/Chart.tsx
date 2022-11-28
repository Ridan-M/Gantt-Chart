import React, {createElement, FC} from 'react';
import s from './styles/Chart.module.css'
import {useTypedSelector} from "../hooks/useTypedSelector";
import timeline from "../image/timeline.jpg";


type chartsItem = {
    title: string;
    start: number;
    end: number;
    id: number;
}

const Chart: FC<{ countShow: number }> = ({countShow}) => {
    const state = useTypedSelector(state => state.data)
    const charts: chartsItem[] = [];


    const stringByNumber = (date: string): number => {
        let day = date.split('-').pop()
        return Number(day)

    }

    state.forEach((item, index) => {
        if (index <= countShow) {
            charts.push({
                title: item.title,
                start: stringByNumber(item.period_start),
                end: stringByNumber(item.period_end),
                id: item.id
            })
        }
    })

    return (
        <div className={s.chart}>
            {charts && charts.map((item, index) => {
                let createId = `id_${item.id}`
                return (
                    <div
                        id={createId}
                        key={item.id}
                        style={{
                            width: 24 * (1 + item.end - item.start),
                            marginLeft: item.start * 24
                        }}
                        className={`${s.chart_item}`}>

                        <span className={s.chart_title}>{item.title}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default Chart;