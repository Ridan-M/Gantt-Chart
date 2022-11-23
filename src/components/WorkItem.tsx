import React, {FC} from 'react';
import s from './styles/Navbar.module.css'
import {IDataState} from "../type/chartData";

const WorkItem: FC<IDataState> = (props) => {
    return (
        <li  className={s.task} id={`${props.id}`}>
        </li>
    );
};

export default WorkItem;