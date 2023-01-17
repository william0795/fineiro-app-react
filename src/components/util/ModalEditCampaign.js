/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from './ModalSpiner'
import '../../scss/_modal-campa.scss'
import campaignServices from '../../services/campaign'
import $ from 'jquery'
import Toast from './Toast'
export default function ModalEditCampaign (props) {
  const [spiner, setSpiner] = useState(false)
  const [nameCampania, setNameCampania] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [id, setId] = useState('')
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)

  const handleService = async (event) => {
    if (nameCampania === '') {
      $('#nameCamp').addClass('error')
      mostrarMensaje('400', global.LABEL_EMPTY_ERROR)
    } else {
      setSpiner(true)
      const info = await campaignServices.editCampaign({
        id,
        nameCampania,
        descripcion
      })
      if (info.error === 200) {
        window.localStorage.setItem('campEli', 2)
        setSpiner(false)
        window.localStorage.setItem(
          'EnameCampana', (nameCampania)
        )
        window.localStorage.setItem(
          'Edescription', (descripcion)
        )
        window.location.href = global.ROUTE_CAMPAIGN
      } else {
        window.localStorage.setItem('campEli', 2)
        mostrarMensaje(global.CODEERROR, global.LABEL_INPUT_ERROR)
      }
    }
  }
  const handleClose = () => {
    window.scrollTo(0, 600)
    setSpiner(false)
  }
  const HandleError = () => {
    $('#error').html(' ')
    $('#nameCamp').removeClass('error')
  }
  useEffect(() => {
    if ((Object.keys(props.editCampaign).length > 0)) {
      setDescripcion(props.editCampaign.descripcion)
      setNameCampania(props.editCampaign.campana)
      setId(props.editCampaign.idCampana)
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
      <ModalSpiner opt={spiner} onClose={handleClose} />
      {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
         <Dialog fullWidth={true} maxWidth={'md'} open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b><div className='close-x' onClick={props.handle}>x</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <hr/>
               <label className='mt-3 '><b>{props.label1} </b><b className='pink-color'> *</b><span className="text-input name-input"></span></label>
               <span className="text-input name-input every-label" id='error'></span>
               <input value={nameCampania} onKeyDown={HandleError} type="text" onChange={({ target }) => setNameCampania(target.value)} minLength="20" maxLength="400" className="form-control item" id='nameCamp'></input>
               <label><b>{props.label2} </b><span className="text-area"></span></label>
               <textarea value={descripcion} type="text" onChange={({ target }) => setDescripcion(target.value)} minLength="0" maxLength="40000" className="form-control item"></textarea>
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
