import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DepartDetail.scss";
import { data } from "../../data/depart_data";
interface Item {
  id: string;
  nombre: string;
  type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  longer: number;
  likes: number;
  url: string;
}
export const DepartDetail = () => {
  let { id } = useParams();
  const [item, setItem] = useState<Item[]>([]);
  useEffect(() => {
    const item = data.filter((el) => el.id === id);
    setItem(item);
    // console.log(item);
  }, [id]);
  return (
    <div className="container__deatil__screen">
      <h1 className="title">Depart Detail</h1>
      {item.length === 0 ? (
        <>
          <h1>no hay elementos</h1>
        </>
      ) : (
        item.map((el) => {
          return (
            <div key={el.id} className="card__depart__detail">
              <h2>{el.nombre}</h2>
              <img src={el.url} alt="" />
              <div className="content__depart__details">
                <div className="title__details">
                  <h1>Detalles</h1>
                  <h2>Cuartos <span>:</span> </h2>
                  <h2>Baños <span>:</span></h2>
                  <h2>tipo <span>:</span></h2>
                  <h2>Likes <span>:</span></h2>
                  <h2>Longitud <span>:</span></h2>
                  <h2>Precio <span>:</span></h2>
                </div>
                <div className="content__details">
                  <h2>
                    {el.bedrooms}
                    <i className="fas fa-bed"></i>
                  </h2>
                  <h2>
                    {el.bathrooms}
                    <i className="fas fa-bath"></i>
                  </h2>
                  <h2>{el.type}</h2>
                  <h2>
                    {el.likes}
                    <i className="far fa-heart"></i>
                  </h2>
                  <h2>
                    {el.longer}
                    <i className="fas fa-ruler-combined"></i>
                  </h2>
                  <h2>${el.price}</h2>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
