import React, {createElement, FC} from 'react';
import s from './styles/Navbar.module.css'
import {useTypedSelector} from "../hooks/useTypedSelector";
import WorkItem from "./WorkItem";
import {IDataState} from "../type/chartData";

export interface IPropsTodo {
    setCountShow(n:number):void;
    countShow: number
}


const Navbar:FC <IPropsTodo> = (props) => {

    return (
        <div className={s.navbar_wrapper}>
            <div className={s.marker}>
                <span className={s.marker_title}>Work item</span>
            </div>
            <nav className={s.navbar}>
                <WorkItem {...props}/>
            </nav>
        </div>
    );
};

export default Navbar;