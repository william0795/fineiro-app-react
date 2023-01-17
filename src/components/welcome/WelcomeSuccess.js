import React from 'react'
import '../../scss/_welcome.scss'
import Confetti from '../../components/util/Confetti'

const WelcomeSuccess = () => {
  return (
        <>
                <div className='conteiner-info-success'>
                  <h3 className='success-title'>En hora buena</h3>
                  <div className='mt-[10px]'>Has completado todos los pasos</div>
                  <div className=''>para poder disfrutar de una</div>
                  <div className=''>buena experiencia</div>
                  <div id='btn' href={ global.ROUTE_DASHBOARD } className="btn btn-block btn-primary login0 rounded-pill">Ir al dashboard</div>
                </div>
            <Confetti />
            <div className="row step-panel">
            </div>
        </>

  )
}

export default WelcomeSuccess
