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
import $ from 'jquery'
export default function ModalReturnTemplate (props) {
  const [spiner, setSpiner] = useState(false)

  const handleClose = () => {
    window.scrollTo(0, 600)
    setSpiner(false)
  }
  const redirectTemplate = async () => {
    $('.btnCerrar').click()
    setSpiner(true)
    window.localStorage.removeItem('idPlantilla')
    window.localStorage.removeItem('idDetailPlantilla')
    window.localStorage.removeItem('editTipo')
    setTimeout(function () {
      setSpiner(false)
      if (window.localStorage.getItem('newTemplate') === '1') {
        window.localStorage.removeItem('idPlantilla')
        window.localStorage.removeItem('idDetailPlantilla')
        window.localStorage.removeItem('editTipo')
        window.localStorage.removeItem('newTemplate')
        window.location.href = global.ROUTE_TEMPLASTES
      } else {
        if (window.localStorage.getItem('wizard') === '1') {
          window.location.href = global.ROUTE_WELCOME
          window.localStorage.setItem('returnW', 1)
          window.localStorage.removeItem('wizard')
        } else {
          window.localStorage.setItem('steps', 2)
          window.location.href = global.ROUTE_CREATECAMPAIGN
        }
      }
    }, 2000)
  }
  return (
        <>
            <input type="hidden" id="typeTemplate" value={props.type} />
            <ModalSpiner opt={spiner} />
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
                    <Button id="btn-close" onClick={redirectTemplate} autoFocus>
                        {props.button}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
