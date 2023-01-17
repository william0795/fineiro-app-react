import React, { useEffect, useState } from 'react'
import '../../scss/_forgotPassword.scss'
import ImgLog from '../util/imgNotify'
import ModalSpiner from '../util/ModalSpiner'
import ModalNewMessages from '../util/ModalGeneral'
import Footer from './Footer'
import loginServices from '../../services/login'
import { useParams } from 'react-router-dom'
import $ from 'jquery'
const ActivacionEmail = () => {
  const { proceso } = useParams()
  const [email, setEmail] = useState('')
  const [spiner, setSpiner] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [body, setBody] = useState('')
  useEffect(() => {
    $('.faas').addClass('faas')
  }, [])
  function loginHandler () {
    window.location.href = global.ROUTE_LOGIN_BASIC
  }
  const activacionEmailHandler = async (event) => {
    setSpiner(true)
    event.preventDefault()
    try {
      if (!email) {
        setSpiner(false)
        setIsOpen(true)
        setHeader('Error')
        setBody('Ingrese su correo por favor')
        return false
      } else {
        if (/([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(email) !== true) {
          setSpiner(false)
          setIsOpen(true)
          setHeader('Error')
          setBody('Correo ingresado incorrecto')
          return false
        } else {
          const user = await loginServices.sendMail({
            email,
            proceso
          })
          if (!user.error) {
            setSpiner(false)
            setIsOpen(true)
            setHeader(user.header)
            setBody(user.body)
            setColorHeader('notify-color')
            setModalButton('Aceptar')
            setEmail('')
            // window.location.href = user.header
          } else {
            setSpiner(false)
            setIsOpen(true)
            setHeader(user.header)
            setBody(user.body)
          }
        }
      }
    } catch (e) {
      setSpiner(false)
      setIsOpen(true)
      setHeader(global.MODAL_HEAD_ERROR)
      setBody(global.ERROR_TRYCATCH)
      setTimeout(function () {
        setIsOpen(false)
      }, 5000)
    }
  }
  return (
    <div className="background2" id="backSelect">
      <div className="background-circle-forgot"></div>
      <ModalNewMessages isOpen={isOpen} header={header} body={body} color={coloHeader} button={modalButton} />
      <ModalSpiner opt={spiner} />
      <div className="container">
        <ImgLog />
        <div className="login-forgot-password">
          <form>
            <div>
              <h3 id="OOPS"><b>{global.OOPS}</b></h3>
              <h3><b>Activar Cuenta</b></h3>
              <p>ingresa tu correo para activar tu cuenta</p>
            </div>
            <div className="form-group ml-5 justify-content-center ">
              <div className="wrap-input100 validate-input m-b-26 mt-4" data-validate="Email is required">
                <span className="label-input100"><i className="fa fa-envelope"></i></span>
                <input onChange={({ target }) => setEmail(target.value)} className="input100" type="text" value={email} name="Username" placeholder={global.FORGOTTEXTP} />
                <span className="focus-input100"></span>
              </div>
              <div className='row justify-content-center mt-5 ml-5'>
                <div className='envio'>Enviar</div>
                <div className='flex-shrink-0 ml-3'>
                  <button id='enviar' onClick={activacionEmailHandler} className="cheque">→</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <span className="return_password" ><i className='fas fa-arrow-alt-circle-left faas' onClick={loginHandler}></i></span>
      <Footer />
    </div>
  )
}

export default ActivacionEmail
