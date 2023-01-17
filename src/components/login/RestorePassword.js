import React, { useState } from 'react'
import ModalSpiner from '../util/ModalSpiner'
import ModalMessages from '../util/ModalMessages'
import Footer from './Footer'
import '../../scss/_changePassword.scss'
import { useParams } from 'react-router-dom'
import loginServices from '../../services/login'
import ImgLog from '../util/imgNotify'
import $ from 'jquery'
const RestorePassword = () => {
  const { proceso } = useParams()
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [spiner, setSpiner] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('prueba header')
  const [body, setBody] = useState('prueba body')
  const restorePasswordHandler = async (event) => {
    $(global.FIELD).html(' ')
    $(global.INPUT_FIELD).removeClass('error')
    try {
      setSpiner(true)
      const userData = await loginServices.restorePasswords({
        password1,
        password2,
        proceso
      })
      if (userData.error === 3) {
        setSpiner(false)
        $(global.FIELD).html(global.LABEL_INPUT_ERROR)
        setColorHeader('notify-color')
        setModalButton('Aceptar')
      } else {
        $(global.FIELD).html(' ')
        setSpiner(false)
        window.location.href = userData.url
      }
    } catch (e) {
      setSpiner(false)
      setIsOpen(true)
      setHeader('prueba')
      setBody('Error Token invalido')
      setTimeout(function () {
        setIsOpen(false)
      }, 5000)
    }
  }
  return (
    <div className="background0">
      <ImgLog />
      <ModalMessages isOpen={isOpen} header={header} body={body} color={coloHeader} button={modalButton} />
      <ModalSpiner opt={spiner} />
      <div className="background-circle-change">
      <div className="login-change-password">
          <form>
            <div>
              <h3 id="OOPS"><b>{global.RESTORE}</b></h3>
              <p>{global.RESTORE_STRING}</p>
            </div>
            <div className='row col-md-12'>
          <div className='col-md-12'>
            <div className="form-group ml-5">
              <div className="wrap-input100 validate-input m-b-26">
              <span className="label-input100 password1"><i className='fa fa-lock'></i></span>
                <label className="form-label-create-user"><b className='color-label'>Nueva contraseña <b className='red-color'>*</b> </b><span className="text-input password-1"></span> </label>
                <input onChange={({ target }) => setPassword1(target.value)} className="input100 password1" type="password" value={password1} name="Password1" placeholder="******" />                <span className="focus-input100"></span>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className="form-group ml-5">
              <div className="wrap-input100 validate-input m-b-26">
              <span className="label-input100 password1"><i className='fa fa-lock'></i></span>
                <label className="form-label-create-user"><b className='color-label'>Repetir contraseña: <b className='red-color'>*</b></b> <span className="text-input password-2"></span> </label>
                <input onChange={({ target }) => setPassword2(target.value)} className="input100 password2" type="password" value={password2} name="Password2" placeholder="******" />
                <span className="focus-input100"></span>
              </div>
            </div>
          </div>
        </div>
            <div className='col-md-12'>
            <div className="form-group mt-4">
              <a onClick={restorePasswordHandler} id='btnCreateUser' className="btn btn-block btn-primary create-button rounded-pill ">Restablecer</a>
            </div>
          </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default RestorePassword
