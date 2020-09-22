import React from 'react'
import style from './styles.module.css'

export default function Xp (props) {
    return(
        <li className={style.item}>
            <h6>{props.ag}</h6>
            <p>{props.cg}</p>
            <p className={style.date}>{props.pr}</p>
        </li>
    )
}