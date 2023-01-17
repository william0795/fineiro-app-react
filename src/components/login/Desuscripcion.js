/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
import React, { useEffect, useState } from 'react'
import '../../scss/desuscripcion.scss'
import ImgLog from '../util/imgNotify'
import ModalSpiner from '../util/ModalSpiner'
import ModalNewMessages from '../util/ModalGeneral'
import Footer from './Footer'
import Toast from '../../components/util/Toast'
import loginServices from '../../services/login'
import { useParams } from 'react-router-dom'
import DataDesusc from '../../static/desuscripcionData.json'
import $ from 'jquery'

const Desuscripcion = () => {
  const { idTicket } = useParams()
  const { mail } = useParams()
  const [spiner, setSpiner] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showOther, setShowOther] = useState(false)
  const [header, setHeader] = useState('')
  const [dato, setDato] = useState(null)
  const [datoOther, setDatoOther] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('Aceptar')
  const [body, setBody] = useState('')
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)
  useEffect(() => {
    console.log('dato', dato)
    if(dato === '4'){
      console.log('entra')
      setShowOther(true)
    }else{
      setShowOther(false)
    }
  }, [dato])
  const send = async () => {
    console.log('send')
    console.log('idTicket', idTicket)
    console.log('mail', mail)
    let observacion;
    if(dato){
      dato === '4' ? observacion = datoOther : observacion = DataDesusc[dato].text
    }else{
      mostrarMensaje(400, 'Fata escoger el motivo de desuscripción')
      console.log('no hay datos')
      return
    }
    const data = {
      mail,
      observacion
    }
    if(mail && idTicket && dato){
    setSpiner(true)
    const resp = await loginServices.sendDesuscripcion(data, idTicket)
    setSpiner(false)
    if (resp.code === 200) {
      setHeader(resp.header)
      setBody(resp.body)
      setColorHeader('notify-color')
      setIsOpen(true)
    } else {
      setIsOpen(true)
      setHeader(resp.header)
      setBody(resp.body)
    }
    }
    console.log('data', data)
   
  }
  const mostrarMensaje = (codigo, mensaje) => {
    setCodigoToast(codigo)
    setMessageToast(mensaje)
    setIsOpenToast(true)
    setTimeout(() => {
      setIsOpenToast(false)
    }, 1000);
  }
  const getFechaFormat = () => {
    const fecha = new Date();
    console.log('fecha', fecha)

    let day = fecha.getDate();
    
    let month = fecha.getMonth() + 1;
    
    let year = fecha.getFullYear();
 
    // muestra la fecha de hoy en formato `MM/DD/YYYY`
    // console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
    
  }
  const handle = () => {
    console.log('close')
    setIsOpen(false)
  }
  return (
    <div className="" id="backSelect">
      <ModalNewMessages handle={handle} isOpen={isOpen} header={header} body={body} color={coloHeader} button={modalButton} />
      <ModalSpiner opt={spiner} />
      {isOpenToast && <Toast message={messageToast} codigo={codigoToast}/>}
      <div className="container">
        <ImgLog />
        <div className="contentDesusc">
           <div>
              <h3 className="title-canc"><b>Cancelación Suscripción</b></h3>
              <p>Sentimos mucho que te vayas. Por favor, dedica unos instantes a decirnos por qué.</p>
            </div>
            <div className="form-group justify-content-center content-data-desusc">
              <div className="pregunta">
                <span>¿Cuál es el principal motivo por el cuál deseas cancelar tu suscripción?</span>
              </div>
              {DataDesusc.map((item) => {
                return <>
                  <div key={item.value} className=" mb-2">
                    <input className=" mr-2" name="checkMotivo" value={ item.value } onChange={({ target }) => setDato(target.value)} type="radio"/>
                    <label>{item.text}</label>
                  </div>
                </>
              })}
              {showOther && <>
                <div className=" mb-2">
                  <textarea value={datoOther} 
                          type="text" 
                          id='text_other'
                          onChange={({ target }) => { setDatoOther(target.value) }} 
                          minLength="1"
                          placeholder="Ingrese motivo"
                          maxLength={ 500000 }
                          className='form-control carga-contacto-text item'>
                  </textarea>                  
                </div>
              </>}
              <div className='btn-action mt-5'>
                  <button onClick={ () => { send() }} className='btn-pincipal' >Cancelar Suscripción</button>
              </div>
            </div>
        </div>
      </div>
      {/* <span className="return_password" ><i className='fas fa-arrow-alt-circle-left faas' onClick={loginHandler}></i></span> */}
      <Footer />
    </div>
  )
}

export default Desuscripcion
