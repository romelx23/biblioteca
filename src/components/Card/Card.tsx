import React from 'react'
import './Card.scss'

interface Props{
    item: {
        id: string;
        nombre: string;
        url: string;
    }
}
export const Card = ({item}:Props) => {

    return (
        <div className="container__card">
            <h2>{item.nombre}</h2>
            <img src={item.url} alt="padoru__image" />
        </div>
    )
}
