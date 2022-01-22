import './Sidebar.scss'

export const Sidebar = () => {

    return (
        <>
            <div className="container__sidebar__menu">
                <div className="content__siedebar__top">
                    <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8b/8b8a0a345672533bc0c58f41bc301d0943ea1cfd.jpg" alt="logo" />
                    <button className='boton'><i className="fas fa-compass"></i></button>
                    <button className='boton'><i className="fas fa-shopping-cart"></i></button>
                    <button className='boton'><i className="fas fa-credit-card"></i></button>
                    <button className='boton'><i className="fas fa-chart-bar"></i></button>
                    <button className='boton'><i className="far fa-file-alt"></i></button>
                    <button className='boton'><i className="far fa-heart"></i></button>
                </div>
                <div className="content__siedebar__bottom">
                    <button className='boton'><i className="fas fa-cog"></i></button>
                    <button className='boton'><i className="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        </>
    )
}
