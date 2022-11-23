import React, {FC} from 'react';
import s from './styles/Navbar.module.css'
import {useTypedSelector} from "../hooks/useTypedSelector";
import WorkItem from "./WorkItem";
import {IDataState} from "../type/chartData";

const Navbar = () => {
    const state = useTypedSelector(state => state.data)
    console.log(state)
    return (
        <nav className={s.navbar}>
            <div className={s.marker}>
                <span className={s.marker_title}>Work item</span>
            </div>
            <ul>
                {state.map((i) => <WorkItem {...i}/>)}
                
            </ul>
        </nav>
    );
};

export default Navbar;