import React, { useEffect, useState } from 'react'
import '../../scss/_forgotPassword.scss'
import ImgLog from '../util/imgNotify'
import ModalSpiner from '../util/ModalSpiner'
import ModalNewMessages from '../util/ModalGeneral'
import Footer from './Footer'
import loginServices from '../../services/login'
import $ from 'jquery'
const ForgotPassword = () => {
  const [mail, setMail] = useState('')
  const [spiner, setSpiner] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [body, setBody] = useState('')
  const [handle, setHandle] = useState()
  useEffect(() => {
    $('.faas').addClass('faas')
  }, [])
  function loginHandler () {
    window.location.href = global.ROUTE_LOGIN_BASIC
  }
  const handleClose = (op) => () => {
    setIsOpen(false)
  }
  const forgotPasswordHandler = async (event) => {
    event.preventDefault()
    try {
      setSpiner(true)
      if (!mail) {
        setSpiner(false)
        setIsOpen(true)
        setHeader('Error')
        setBody('Ingrese su correo')
        setModalButton('Aceptar')
        setHandle(handleClose)
        return false
      } else if (/([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(mail) === false) {
        setSpiner(false)
        setIsOpen(true)
        setHeader('Error')
        setBody('El correo ingresado es inválido.')
        setModalButton('Aceptar')
        setHandle(handleClose)
        return false
      } else {
        const user = await loginServices.sendMailRestorePassword({
          mail
        })
        setSpiner(false)
        setIsOpen(true)
        setHeader(user.header)
        setBody(user.body)
        setColorHeader('notify-color')
        setModalButton('Aceptar')
        setHandle(handleClose)
        if (!user.error) {
          setTimeout(function () {
            $('#backSelect').removeClass()
            $('#backSelect').addClass('background1')
            $('#enviar').html('✓')
            $('.envio').html('Enviado')
            $('#OOPS').addClass('no-success')
            $('#1').removeClass()
            $('#1').addClass('no-success-panel')
            $('#2').removeClass()
            $('#2').addClass('success-panel')
            $('#mail').prop('disabled', true)
            setMail('')
          }, 5000)
        } else {
          if (user.code === 400) {
            setSpiner(false)
            setIsOpen(true)
            setHeader(global.MODAL_HEAD_ERROR)
            setBody(global.CAMPOS_OBLIGATORIOS)
            setTimeout(function () {
              setIsOpen(false)
            }, 5000)
          } else {
            if (user.code === 401 || user.code === 500) {
              setSpiner(false)
              setIsOpen(true)
              setHeader(global.MODAL_HEAD_ERROR)
              setBody(global.ERROR_SERVICE_OFF)
              setTimeout(function () {
                setIsOpen(false)
              }, 5000)
            }
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
      <ModalNewMessages isOpen={isOpen} header={header} body={body} color={coloHeader} button={modalButton} handle={handle} />
      <ModalSpiner opt={spiner} />
      <ImgLog />
      <div className="background-circle-forgot">
        <div className="login-forgot-password">
          <form>
            <div>
              <h3 id="OOPS"><b>{global.OOPS}</b></h3>
              <h3><b>{global.OOPS_HEARD}</b></h3>
              <p>{global.OOPS_STRING}</p>
            </div>
            <div className="form-group ml-5 justify-content-center ">
              <div className="wrap-input100 validate-input m-b-26 mt-4" data-validate="Username is required">
                <span className="label-input100"><i className='fa fa-user'></i></span>
                <input onChange={({ target }) => setMail(target.value)} className="input100" type="text" value={mail} name="Username" placeholder={global.FORGOTTEXTP} id='mail' />
                <span className="focus-input100"></span>
              </div>
              <div className='row justify-content-center mt-5 ml-5 btn-send'>
                <div className='envio'>Enviar</div>
                <div className='flex-shrink-0 ml-3'>
                  <div className='success-panel' id='1'><button id='enviar' onClick={forgotPasswordHandler} className="cheque"><i className='fas fa-arrow-right'></i></button></div>
                  <div className='no-success-panel' id='2'><div className="btn-enviado"><i className='fas fa-arrow-right pl-1 pt-1'></i></div></div>
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

export default ForgotPassword
