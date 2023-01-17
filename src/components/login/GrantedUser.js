import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import globalServices from '../../services/global'
import '../../scss/_login.scss'
import Banner from './Banner'
import ImgLog from '../util/imgNotify'
import ModalSpiner from '../util/ModalSpiner'
import Footer from './Footer'
import check from '../../assets/img/check.png'

export default function GrantedUser () {
  const [bannerTitle, setBannerTitle] = useState(false)
  const [spiner, setSpiner] = useState(false)
  const { proceso } = useParams()
  useEffect(() => {
    setSpiner(true)
    granted(proceso)
  }, [])
  const granted = async (event) => {
    const resp = await globalServices.grantedUser(event)
    if (resp.error) {
      setBannerTitle(false)
    } else {
      setTimeout(function () {
        window.location.href = resp.url
      }, 5000)
      setBannerTitle(true)
    }
    setSpiner(false)
  }
  return (
    <div className="background0" id="backSelect">
      <ImgLog />
      <div className="backgroundCircle"></div>
      <ModalSpiner opt={spiner} />
      { bannerTitle
        ? <><input type="hidden" value={bannerTitle} /><div className="loginContainer container-fluid">
          <Banner />
          <div className="login-form text-center">
            <div className="col-md-auto ">
              <div className="mb-4">
                <h3 className='success-title'>!En hora buena</h3>
                <div className="success-panel" id="panel2-success">
                  <div className="form-group">
                    <div className="ready text-center"><img alt='' src={check} /></div>
                  </div>
                </div>
                <div className='mt-[10px]'>Tu cuenta ha sido activada sin</div>
                <div className=''>problemas. Puedes acceder a tu</div>
                <div className=''>cuenta con el usuario y</div>
                <div className=''>contraseña.</div>
                <br />
                <a href={global.ROUTE_LOGIN} className="btn btn-block btn-primary login0  rounded-pill">Acceder</a>
              </div>
            </div>
          </div>
        </div></>
        : <><input type="hidden" value={bannerTitle} /><div className="loginContainer container-fluid">
        <Banner />
        <div className="login-form text-center">
          <div className="col-md-auto ">
            <div className="mb-4">
              <h3 className='success-title notify-color'>¡En hora buena!</h3>
              <div className="success-panel" id="panel2-success">
                <div className="form-group">
                  <div className="ready text-center"><img alt='' src={check} /></div>
                </div>
              </div>
              <div className='mt-[10px]'>Tu cuenta ha sido activada sin</div>
              <div className=''>problemas. Puedes acceder a tu</div>
              <div className=''>cuenta con el usuario y</div>
              <div>contraseña.</div>
              <br />
              <a href={global.ROUTE_LOGIN_BASIC} className="btn btn-block btn-primary login0  rounded-pill">Acceder</a>
            </div>
          </div>
        </div>
      </div></>

      }

      <Footer />
    </div>
  )
}
