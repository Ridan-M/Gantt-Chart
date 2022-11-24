import React, {FC} from 'react';
import s from './styles/Navbar.module.css'
import Tasks from "./Tasks";

export interface IPropsTodo {
    setCountShow(n: number): void;

    countShow: number
}


const Navbar: FC<IPropsTodo> = (props) => {

    return (
        <div className={s.navbar_wrapper}>
            <div className={s.marker}>
                <span className={s.marker_title}>Work item</span>
            </div>
            <nav className={s.navbar}>
                <Tasks {...props}/>
            </nav>
        </div>
    );
};

export default Navbar;