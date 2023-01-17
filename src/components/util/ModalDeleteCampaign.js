/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
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

export default function ModalDeleteCampaign (props) {
  const [spiner, setSpiner] = useState(false)
  const [id, setId] = useState('')
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
    const info = await campaignServices.deleterCampaign({
      id
    })
    if (info.error === 200) {
      window.localStorage.setItem('campEli', 1)
      window.location.href = global.ROUTE_CAMPAIGN
    } else {
      window.localStorage.setItem('campEli', 1)
      mostrarMensaje(global.CODEERROR, global.LABEL_INPUT_ERROR)
      window.location.href = global.ROUTE_CAMPAIGN
    }
  }
  useEffect(() => {
    if ((props.id) !== '') {
      setId(props.id)
    }
  }, [])

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
            <ModalSpiner opt={spiner} />
            {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
            <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className={props.color} id="alert-dialog-title">{props.header}</DialogTitle>
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
