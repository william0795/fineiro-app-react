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
import templateServices from '../../services/templates'
import Toast from '../../components/util/Toast'
import $ from 'jquery'
export default function ModalDeleteAdjunto (props) {
  const [spiner, setSpiner] = useState(false)
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)

  const handleClose = () => {
    window.scrollTo(0, 600)
    setSpiner(false)
  }
  const mostrarMensaje = (codigo, mensaje) => {
    setCodigoToast(codigo)
    setMessageToast(mensaje)
    setIsOpenToast(true)
    setTimeout(() => {
      setIsOpenToast(false)
    }, 1000)
  }
  const deleteTemplate = async () => {
    $('.btnCerrar').click()
    let userData
    setSpiner(true)
    if (props.option === 'plantilla') { userData = await templateServices.deleteFiles({ idFile: $('#idFile').val() }) }
    if (props.option === 'william') { alert('hola') }
    if (props.option === 'lady') { alert('hola') }
    if (userData.error) {
      mostrarMensaje(200, 'Archivo eliminado con éxito')
      setSpiner(false)
      $('#' + props.idRemove).remove()
      setTimeout(function () {
        window.location.href = global.ASDD_FILES
      }, 2000)
    } else {
      setSpiner(false)
      mostrarMensaje(400, 'Ocurrió un error al eliminar el archivo')
    }
  }
  return (
    <>
      {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
      <input type="hidden" id="idFile" value={props.idFile} />
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
