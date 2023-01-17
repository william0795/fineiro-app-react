import React from 'react'
import '../../scss/_congratulationRestore.scss'
import ImgLog from '../util/imgNotify'
import Footer from './Footer'
const CongratulationRestore = () => {
  return (
    <div className="backgroundRestablecer" >
      <ImgLog />
      <div className="background-circle-restablecer">
      <div className="login-restablecer">
          <form>
            <div className="ml-4 pl-3 justify-content-center">
                <h3 className='notify-color'><b>Contraseña Restablecida</b></h3>
                <div className="cheque-eviado"><span><i className="fa fa-check visto"></i></span></div>
                <p className='' >Se ha restablecido tu contraseña correctamente</p>
            </div>
            <a href={global.ROUTE_LOGIN_BASIC} id='btnCreateUser' className=" btn-block create-acceder rounded-pill">Acceder</a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CongratulationRestore
