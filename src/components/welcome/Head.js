/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
import React from 'react'
import '../../scss/_login.scss'
import imgLogo from '../../assets/img/logo-fineiro/logo-fineiro.png'
const Head = () => {
    const logout = () => {
        window.localStorage.clear()
        setTimeout(function () {
            window.location.href = global.ROUTE_LOGIN_BASIC
          }, 1000)
    }
  return (
    <div className='head-app'>
      <div className='logo-head'>
      <img className="" src={imgLogo} alt="banner"></img>

      </div>
      <div className='title-head'>
        <span>Movimientos</span>
      </div>
      <div onClick={logout} className='logout'>
        <i className="fa fa-share-square" aria-hidden="true"></i>
        <span>Cerrar Sesión</span>
      </div>
    </div>
  )
}

export default Head
