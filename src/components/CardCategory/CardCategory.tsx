import React from 'react'
import { Link } from 'react-router-dom'
import './CardCategory.scss'
interface Item{
    item:{
        nombre:string
        url:string
    }
}
export const CardCategory = ({item}:Item) => {
    return (
        <div className='card__category'>
            <Link to={`category/${item.nombre}`}>
            <div className="content__image">
            <img className='card__image' src={item.url} alt="category" />
            </div>
            <h3>{item.nombre}</h3>
            <button className='card__menu__category'>{'>'}</button>
            </Link>
        </div>
    )
}
