/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from '../util/ModalSpiner'
import '../../scss/_modal-campa.scss'
import campaignServices from '../../services/campaign'
import $ from 'jquery'
import Toast from './Toast'
import ModalCampaignConfirmacion from './ModalCampaignConfirmacion'
export default function ModalCampaign (props) {
  const [spiner, setSpiner] = useState(false)
  const [nameCampania, setNameCampania] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)
  const [isOpen1, setIsOpen] = useState(false)
  const [classbody, setClassbody] = useState()
  const [color, setColor] = useState()
  const [header, setHeader] = useState()
  const [body, setBody] = useState()
  const [button, setButton] = useState()
  const [buttonCerrar, setButtonCerrar] = useState()
  const [handle, setHandle] = useState()
  const [btnAceptar, setBtnAceptar] = useState()

  const handleService = async (event) => {
    if (nameCampania === '') {
      $('#nameCamp2').addClass('error')
      mostrarMensaje('400', global.LABEL_EMPTY_ERROR)
    } else {
      setSpiner(true)
      const info = await campaignServices.Campaign({
        nameCampania,
        descripcion
      })
      if (info.error === 200) {
        window.localStorage.setItem('idcamp', info.data.CampanaCrea)
        window.localStorage.setItem('camp', nameCampania)
        window.localStorage.setItem('descamp', descripcion)
        setSpiner(false)
        setIsOpen(true)
        setClassbody()
        setColor()
        setHeader()
        setBody('¿Desea realizar una programación con la campaña creada?')
        setButton('Aceptar')
        setButtonCerrar('Cancelar')
        setBtnAceptar(handleAceptar)
        setHandle(handleClose)
      } else {
        mostrarMensaje(global.CODEERROR, global.LABEL_INPUT_ERROR)
      }
    }
  }
  const handleClose = () => () => {
    setSpiner(true)
    window.localStorage.setItem('campEli', 3)
    $('#nameCamp2').val('')
    $('#textCamp2').val('')
    window.location.href = global.ROUTE_CAMPAIGN
  }

  const handleAceptar = () => () => {
    setSpiner(false)
    window.localStorage.setItem('steps', 2)
    window.localStorage.setItem('cp', 'op')
    $('#labelCampana').html('<b>Campaña: </b>' + nameCampania)
    $('#panel-info1').html('<b>Objetivo: </b>' + descripcion)
    mostrarMensaje('200', global.PROCESO_OK)
    window.location.href = global.ROUTE_CREATECAMPAIGN
  }

  const HandleError = () => {
    $('#error').html(' ')
    $('#nameCamp2').removeClass('error')
  }
  const mostrarMensaje = (codigo, mensaje) => {
    setCodigoToast(codigo)
    setMessageToast(mensaje)
    setIsOpenToast(true)
    setTimeout(() => {
      setIsOpenToast(false)
    }, 1000)
  }
  return (
      <>
      <ModalSpiner opt={spiner}/>
      <ModalCampaignConfirmacion isOpen={isOpen1} classbody={classbody} color={color} header={header} body={body} button={button} buttonCerrar={buttonCerrar} handle={handle} btnAceptar={btnAceptar}/>
      {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
         <Dialog fullWidth={true} maxWidth={'md'} open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b><div className='close-x' onClick={props.handle}>x</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <hr/>
               <label className='mt-3 '><b>{props.label1}</b><b className='pink-color'> *</b><span className="text-input name-input"></span></label>
               <span className="text-input name-input every-label" id='error'></span>
               <input onKeyDown={HandleError} type="text" onChange={({ target }) => setNameCampania(target.value)} minLength="20" maxLength="400" className="form-control item" pattern='Ingrese Nombre' id='nameCamp2'></input>
               <label><b>{props.label2} </b><span className="text-area"></span></label>
               <textarea type="text" onChange={({ target }) => setDescripcion(target.value)} minLength="0" maxLength="40000" className="form-control item" id='textCamp2'></textarea>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button id="btn-close" onClick={handleService} autoFocus>
              {props.button}
            </Button>
            </DialogActions>
        </Dialog>
      </>
  )
}
