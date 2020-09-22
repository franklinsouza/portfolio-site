import React from 'React'
import style from './skill.module.css'


export default function Skill (props) {
    return(
        <li className={style.item}>
            <img src={props.img} alt={props.tec}/>
            <span>{props.tec}</span>
        </li>
    );
}