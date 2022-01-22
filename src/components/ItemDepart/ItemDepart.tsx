import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDepart.scss'
interface Props{
    item:{
        id:string,
        nombre:string,
        type:string,
        price:number,
        bedrooms:number,
        bathrooms:number,
        longer:number,
        likes:number,
        url:string
    }
}
export const ItemDepart = ({item}:Props) => {
    return (
        <>
            <div className="card__depart">
                <Link to={`/depart/${item.id}`}>
                        <img src={item.url} alt="house" />
                        </Link>
                        <div className="content__card">
                            <h2>Lugar</h2>
                            <h1>{item.nombre}</h1>
                            <h4>{item.type}</h4>
                            <h3>${item.price} <span>/month</span></h3>
                        </div>
                        <div className="content__icons">
                            <div className="">
                                <i className="fas fa-bed"></i><span>{item.bedrooms}</span>
                            </div>
                            <div className="">
                                <i className="fas fa-bath"></i>
                                <span>{item.bathrooms}</span>
                            </div>
                            <div className="">
                                <i className="fas fa-ruler-combined"></i><span>{item.longer}</span>
                            </div>
                            <div className="">
                                <i className="far fa-heart"></i>
                                <span>{item.likes}</span>
                            </div>
                        </div>
                    </div>
        </>
    )
}
