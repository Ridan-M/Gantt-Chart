import React, {FC} from 'react';
import s from './styles/Navbar.module.css'
import {IPropsTodo} from "./Navbar";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Tasks: FC<IPropsTodo> = ({setCountShow, countShow}) => {
    const state = useTypedSelector(state => state.data)


    const toggleShowTodo = (id: number, sub: number) => {
        if (sub > 1 && id === countShow) {
            setCountShow(--id - sub)
        } else {
            setCountShow(id)
            id <= countShow && setCountShow(--id)
        }
    }

    let padding = 10;
    return (
        <>
            {state?.map((i, index) => {
                if (index <= countShow) {
                    return (
                        <div
                            onClick={() => {
                                i.sub && toggleShowTodo(i.sub < 2 ? i.id : i.sub + i.id, i.sub)
                            }}
                            key={i.id} style={{paddingLeft: i.sub ? padding = padding + 25 : padding + 25}}
                            className={s.todo_item}
                        >
                            <span
                                className={`${s.inside} ${i.sub && s.todo_item_toggle} ${countShow >= i.id && i.sub && s.todo_item_hide} `}>
                                {i.sub}
                            </span>
                            {i.title}
                        </div>)
                } else {
                    return null
                }
            })}
        </>
    );
};

export default Tasks;
