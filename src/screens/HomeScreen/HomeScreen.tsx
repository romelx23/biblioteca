import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.scss'
export const HomeScreen = () => {
  return <div>
    <div className="mavbar__home">
      <h2>HomeScreen</h2>
      <div className="buttons__register">
                    <button>Login</button>
                    <button>Register</button>
                </div>
    </div>
    <div className="content__home">
      <div className="hero__text">
        <h2>El mejor lugar para Hospedarse</h2>
        <h4>Crea nuevas historias con nostros</h4>
        <Link to={'depart'} className='btn__depart'>Ver Más</Link>
      </div>
      <div className="hero__image">
        <div className='decoration2'></div>
        <div className='decoration'></div>
        <img src="https://www.freepnglogos.com/uploads/building-png/download-building-png-image-pngimg-6.png" alt="hero_image" />
      </div>
    </div>
  </div>;
};
