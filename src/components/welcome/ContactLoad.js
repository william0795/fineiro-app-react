import React, { useState } from 'react'
import check from '../../assets/img/check.png'
import $ from 'jquery'
import contact from '../../images/contact.png'
import ModalInformacion from '../util/ModalInformacion'
import ModalNewMessages from '../../components/util/ModalContactList'
import Toast from '../util/Toast'
const ContactLoad = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)
  const panel2Handler = (op) => () => {
    try {
      if ($('#btn-step3').is(':disabled') !== true && window.localStorage.getItem('returnW') === '1') {
        window.localStorage.setItem('wizard', 1)
        setIsOpen(true)
        setHeader('Crear nueva lista')
        setModalButton('Crear')
        setColorHeader('text-align-left')
      }
    } catch (e) {
    }
  }
  const mostrarMensaje = (codigo, mensaje) => {
    setCodigoToast(codigo)
    setMessageToast(mensaje)
    setIsOpenToast(true)
    setTimeout(() => {
      setIsOpenToast(false)
    }, 1000)
  }
  const handleclose = (accion, detail) => {
    console.log('ejecutaCierremodal', accion)
    console.log(detail)
    if (accion) {
      if (detail === 'E') {
        setIsOpenInfo(true)
      }
      if ('' + detail === 'OK') {
        setIsOpenInfo(true)
      }
    }
    if ('' + detail === 'OK') {
      setIsOpenInfo(true)
    }
    setIsOpen(false)
  }
  const handleCloseModal = () => {
    setIsOpenInfo(false)
    $('#barNext').removeClass()
    $('#barNext').addClass('sheets-next-last1')
    $('#circleNext').removeClass()
    $('#circleNext').addClass('sheets-next-final')
    $('.idshe').addClass('sheetss3')
    $('#percent').html('100%')
    $('#form-welcome').hide()
    $('#form-success').show()
    window.localStorage.setItem('returnW', 2)
  }
  return (
        <div className="col-sm-4 text-center step-data" >
          {isOpenInfo && <ModalInformacion isOpenInfo={isOpenInfo} header={global.HEADER_SAVE_LISTA} body={global.TEXT_SAVE_LISTA} setIsOpenInfo={handleCloseModal}></ModalInformacion>}
            {isOpen && <ModalNewMessages mostrarMensaje={mostrarMensaje} isOpen={isOpen} header={header} color={coloHeader} button={modalButton} handleclose ={handleclose}/>}
            {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
            <div className="form-inline-welcome" id='p-w-circle'>
                <div className="circles" id="stepCircle2">
                    <div className=''>3</div>
                </div>
                <h4 className='title-steps'>Carga de contactos</h4>
            </div>
            <div className="" id="panel2-select">
                <div className="text-center">
                    <div>Carga la base de contactos</div>
                    <div>mediante nuestro template y listo.</div>
                <div className='mt-4'><img alt='' src={contact} className='mt-2 ml-[50%]'/></div>
                    <div className='btn-step2-dis btn btn-primary mt-5 ml-2 disabled'type="button" id="btn-step2" onClick={panel2Handler(1)}>Ir a crear contactos</div>
                </div>
                </div>
            <div className="no-success-panel" id="panel2-success">
                <div className="text-center">
                    <div className="ready">Listo <img alt='' src={check} /></div>
                </div>
            </div>
        </div>
  )
}

export default ContactLoad
