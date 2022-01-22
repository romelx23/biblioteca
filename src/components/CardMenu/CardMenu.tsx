import React, { useContext, useState } from 'react'
import './CardMenu.scss'
import plato1 from '../../assets/images/comida/plato1.png'
import { FoodContext } from '../../context/FoodContext';
import { StarRaiting } from '../StarRainting/StarRaiting';
interface Item {
    item: {
        id: string;
        nombre: string;
        category: string;
        price: number;
        rating: number;
        quantity: number;
        url: string;
    }
}
interface MouseEvent extends React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent> {
}
interface item {
    id: string;
    nombre: string;
    category: string;
    price: number;
    rating: number;
    quantity: number;
    url: string;
}

export const CardMenu = ({ item }: Item) => {
    // obtener del Context la funcion agrgar al carrito
    const {quantity}=item;

    const { food, setFood } = useContext(FoodContext);
    const [count, setCount] = useState(quantity);

    const addCart = (item: item) => {
        const itemc = { ...item, quantity: count }
        setFood([...food, itemc])
        food.forEach((el, i) => {
            if (food[i].nombre === itemc.nombre) {
                // setCount(count + 1)
                const newarr = food.filter((el) => el.nombre !== food[i].nombre)
                const itemc2 = { ...item, quantity:1 }
                setFood([...newarr, itemc2])
                // console.log(food);
            }
        })
    }
    // console.log(food);

    return (
        <div className="card__food">
            <img src={item.url} alt="pizza" />
            <div className="">
                <h2>{item.nombre}</h2>
                <div className="starts_group">

                </div>
                <h3>{item.rating}</h3>
                <StarRaiting start={item.rating}/>
                <h3>${item.price}</h3>
            </div>
            <button onClick={() => addCart(item)} className='btn__buy'>+</button>
        </div>
    )
}
