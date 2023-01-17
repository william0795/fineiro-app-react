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
import templatesServices from '../../services/templates'
import Toast from '../../components/util/Toast'
import $ from 'jquery'

export default function ModalDeleteTemplate (props) {
  const [spiner, setSpiner] = useState(false)
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)

  const handleClose = () => {
    window.scrollTo(0, 600)
    setSpiner(false)
  }
  const deleteTemplate = async () => {
    $('.btnCerrar').click()
    setSpiner(true)
    const templates = await templatesServices.deleteTemplate($('#idDeleteTemplate').val())
    setSpiner(false)
    if (templates.error === 200) {
      mostrarMensaje(global.CODEERROR, global.LABEL_INPUT_ERROR, true)
    } else {
      mostrarMensaje(global.CODEERROR, global.LABEL_INPUT_ERROR, false)
    }
  }

  const mostrarMensaje = (codigo, mensaje, redirect) => {
    setCodigoToast(codigo)
    setMessageToast(mensaje)
    setIsOpenToast(true)
    setTimeout(() => {
      setIsOpenToast(false)
      if (redirect) {
        window.location.href = global.ROUTE_TEMPLASTES
      }
    }, 2000)
  }

  return (
    <>
      {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
      <ModalSpiner opt={spiner} />
      <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle className={props.color + ' notify-color ajust-modal'} id="alert-dialog-title"><b>{props.header}</b></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="btn-close" className='btnCerrar' onClick={props.handle} autoFocus>
            {props.buttonCerrar}
          </Button>
          <Button id="btn-close" onClick={deleteTemplate} autoFocus>
            {props.button}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
