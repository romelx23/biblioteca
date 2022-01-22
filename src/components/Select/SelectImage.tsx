import React, { useRef, useState } from 'react'
import { data } from '../../data/data';
import { Card } from '../Card/Card';
import './SelectImage.scss'

export const SelectImage = () => {
    const scrollRef = useRef<HTMLHeadingElement>(null);
    const [scroling, setScroling] = useState(0);
    const handleScrollRigth = () => {
        if (scroling < 1500) {
            setScroling(scroling + 300)
            scrollRef.current?.scroll({ left: scroling, behavior: 'smooth' })
        }
    }
    const handleScrollLeft = () => {
        if (scroling > 0) {
            setScroling(scroling - 300)
            scrollRef.current?.scroll({ left: scroling, behavior: 'smooth' })
        }
    }
    const sendCharacter=()=>{
        console.log('se envio personaje');
    }
    // console.log(scroling)
    return (
        <div className="container__select__component">
            <div className="container__select" ref={scrollRef}>
                {
                    data.map((item) => {
                        return <Card item={item} key={item.id} />
                    })
                }
            </div>
            <div className="content__buttons">
                <button
                    className="btn__slider"
                    onClick={handleScrollLeft}>{"<"}</button>
                <button
                    className="btn__slider"
                    onClick={handleScrollRigth}  >{">"}</button>
            </div>
            <button
                className="btn__ingresar"
                onClick={sendCharacter}
            >
                Ingresar
            </button>
        </div>
    )
}
