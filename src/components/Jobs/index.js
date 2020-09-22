import React from "react"
import style from './styles.module.css'

import Image from 'react-bootstrap/Image'


export default function Header(props) {
    return (
        <>
            <a href={props.link} className={ style.job } rel="noreferrer" target="_blank" title={props.title}>
                <figure>
                    <Image src={props.img} alt="test" fluid/>
                    <figcaption>
                        <h4>{props.title}</h4>
                        <p>{props.text}</p>
                    </figcaption>
                </figure>
            </a>
        </>
    )
}