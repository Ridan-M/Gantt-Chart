import React, {FC, useState} from 'react';
import s from './styles/Navbar.module.css'
import {createArray} from "../utils/createArray";
import {IPropsTodo} from "./Navbar";
import {useTypedSelector} from "../hooks/useTypedSelector";



const WorkItem: FC<IPropsTodo> = ({setCountShow, countShow}) => {
    const state = useTypedSelector(state => state.data)
    const todoArray = createArray(state)


    const toggleShowTodo = ( id: number, sub: number) => {
        if (sub > 1 && id === countShow){
             setCountShow(--id - sub)
        }else {
            setCountShow(id)
            id <= countShow && setCountShow(--id)
        }
    }

    let padding = 10;
    return (
        <>
            {todoArray?.map((i, index) => {
                if (index <= countShow ) {
                    return (
                        <div
                            onClick={()=>{i.sub && toggleShowTodo(i.sub < 2 ? i.id : +i.sub + i.id,  +i.sub)}}
                            key={i.id} style={{paddingLeft: i.sub ? padding = padding + 25 : padding + 25}}
                            className={s.todo_item}
                        >
                            <span className={s.inside}>{i.sub ? +i.sub : 0}</span>
                            {i.title}
                        </div>)
                } else {
                    return null
                }
            })}
        </>
    );
};

export default WorkItem;
