/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-confirmacion.scss'

const ModalConfirmacion = (props) => {
    
  return (
    <>
      <Dialog open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{props.header}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description-conf">
                        {props.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="btn-close" className='btnCerrar' onClick={() => { props.handleModalConf(false) }} autoFocus>
                        Cancelar
                    </Button>
                    <Button id="btn-close" onClick={() => { props.handleModalConf(true) }} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
    </>
  )
}

export default ModalConfirmacion
