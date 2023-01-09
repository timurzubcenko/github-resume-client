import React from 'react'
import s from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={s.container}>
            <span className={s.loader}></span>
        </div>
    );
};
export default Loading