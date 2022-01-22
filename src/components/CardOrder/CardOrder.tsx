import React, { useContext } from 'react'
import { FoodContext } from '../../context/FoodContext';
import './CardOrder.scss'
interface Item {
    item: {
        id: string;
        nombre: string;
        category: string;
        url: string;
        price: number;
        quantity: number
    }
}
export const CardOrder = ({ item }: Item) => {
    let {quantity}=item;
    const { food, setFood } = useContext(FoodContext);
    const deleteProduct = () => {
        // console.log(food);
        const indice = food.indexOf(item)
        const deleted=food.slice(indice,indice+1)
        const [des]=deleted
        const filtrado=food.filter(el=>el!==des)
        // console.log(indice);
        // console.log(filtrado);
        // console.log(des);
        setFood(filtrado)
    }
    const addProd = () => {
        const add={...item,quantity:quantity+1}
        const filtrado=food.filter(el=>el!==item)
        // console.log(add);
        setFood([...filtrado,add])
    }
    // console.log(food);
    const delProd = () => {
        const del={...item,quantity:quantity-1}
        const filtrado=food.filter(el=>el!==item)
        // console.log(del);
        setFood([...filtrado,del])
        if(item.quantity===0){
            setFood([...filtrado])
        }
    }
    return (
        <div className="card__order">
            <div className="card__menu__img">
                <img src={item.url} alt="food" />
            </div>
            <div className="content__card__menu">
                <h2>{item.nombre}</h2>
                <div className="quantity">
                    <button onClick={delProd}>-</button>
                    <h3>x{item.quantity}</h3>
                    <button onClick={addProd}>+</button>
                </div>
            </div>
            <div className="price">
                <h2 className=''>${(item.price * item.quantity).toFixed(2)}</h2>
                <button onClick={deleteProduct}><i className="far fa-trash-alt"></i></button>
            </div>
        </div>
    )
}
