/* eslint-disable indent */
import '../../scss/_login.scss'
import React, { useState } from 'react'
import ModalSpiner from '../util/ModalSpiner'
import ModalNewMessages from '../util/ModalGeneral'
import loginServices from '../../services/login'
import $ from 'jquery'
import imgLogo from '../../assets/img/logo-fineiro/logo-fineiro-white.png'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [spiner, setSpiner] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('')
  const [body, setBody] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [handle, setHandle] = useState()
  const [closes, setCloses] = useState()
  const [hclose, setHclose] = useState()

  const something = (event) => {
    if (event.keyCode === 13) {
      $('#btnLogin').click()
    }
  }
  const handleClose = (op) => () => {
    setIsOpen(false)
  }
  const loginHandler = async (event) => {
    event.preventDefault()
    $(global.FIELD).html(' ')
    $(global.INPUT_FIELD).removeClass('error')
    setSpiner(true)
    try {
      const userData = await loginServices.login({
        username,
        password
      })
      console.log('userData', userData)
      if (userData.error === 1) {
        setSpiner(false)
        $(global.FIELD).html(global.LABEL_INPUT_ERROR)
        $(global.INPUT_FIELD).addClass('error')
      } else if (userData.error === 401) {
        setSpiner(false)
        setIsOpen(true)
        setColorHeader('text-center')
        setBody(global.BODY)
        setModalButton('Aceptar')
        setHandle(handleClose)
        setHclose(handleClose)
        setCloses('X')
        $('.MuiDialogContentText-root').addClass('text-center')
       } else {
        setTimeout(function () {
          setSpiner(false)
          dataUser()
        }, 2000)
       }
    } catch (e) {
      setSpiner(false)
      setIsOpen(true)
      setHeader(global.MODAL_HEAD_ERROR)
      setBody(global.ERROR_TRYCATCH)
      setModalButton('Aceptar')
      setTimeout(function () {
        setIsOpen(false)
      }, 3000)
    }
  }

  const dataUser = async () => {
    try {
      const userData = await loginServices.getDataUser()
      console.log('userData', userData)
      if (userData.error === 1) {
        setSpiner(false)
        $(global.FIELD).html(global.LABEL_INPUT_ERROR)
        $(global.INPUT_FIELD).addClass('error')
      } else if (userData.error === 401) {
        setSpiner(false)
        setIsOpen(true)
        setColorHeader('text-center')
        setBody(global.BODY)
        setModalButton('Aceptar')
        setHandle(handleClose)
        setHclose(handleClose)
        setCloses('X')
        $('.MuiDialogContentText-root').addClass('text-center')
       } else {
        setTimeout(function () {
          setSpiner(false)
          dataUser()
          window.location.href = userData.url
        }, 1000)
       }
    } catch (e) {
      setSpiner(false)
      setIsOpen(true)
      setHeader(global.MODAL_HEAD_ERROR)
      setBody(global.ERROR_TRYCATCH)
      setModalButton('Aceptar')
      setTimeout(function () {
        setIsOpen(false)
      }, 3000)
    }
  }
  return (
    <div className="" id="backSelect">
      <ModalNewMessages isOpen={isOpen} header={header} body={body} color={coloHeader} button={modalButton} handle={handle} close={closes} hclose={hclose}/>
      <ModalSpiner opt={spiner} />
      <div className="">
        <div className="">
          <div className="content-form">
            <div className="mb-4">
            <img className="" src={imgLogo} alt="banner"></img>
              <h3><b>Iniciar Sesión</b></h3>
              <p className="mb-4"><b>{global.WELCOME_STRING} </b></p>
            </div>
            <div className="form-group ml-5">
              <div className="wrap-input100 validate-input m-b-26 every-input" id='user' data-validate="Username is required">
                <span className="label-input100"><i className="fa fa-user"></i></span><span className="text-input user-input every-label"></span>
                <input maxLength="150" minLength="1" onKeyDown={(e) => something(e) } onChange={({ target }) => setUsername(target.value)} className="input100 color-label" type="text" value={username} name="Username" placeholder={global.USERNAME } id='user' />
                <span className="focus-input100"></span>
              </div>
            </div>
            <div className="form-group ml-5 mb-4">
              <div className="wrap-input100 validate-input m-b-26 every-input" id='pass' data-validate="Username is required">
                <span className="label-input100"><i className='fa fa-lock'></i></span><span className="text-input pass-input every-label"></span>
                <input maxLength="20" minLength="1" onKeyDown={(e) => something(e) } onChange={({ target }) => setPassword(target.value)} value={password} className="input100 color-label" type="password" name="Password" placeholder={global.PASSWORD} id='pass' />
                <span className="focus-input100"></span>
              </div>
            </div>
            <div className='cont-button'>
              <button onClick={loginHandler} id='btnLogin' className="btn btn-block btn-primary login0 rounded-pill">Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
