/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-campa.scss'

export default function ModalCampaignConfirmacion (props) {
  const handleClose = () => {
    window.scrollTo(0, 600)
  }
  return (
        <>
            <Dialog open={props.isOpen} fullWidth={true} maxWidth={props.class} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className={props.color} id="alert-dialog-title">{props.header}</DialogTitle>
                <DialogContent>
                    <DialogContentText className={props.classbody} id="alert-dialog-description">
                        {props.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="btn-close" className='btnCerrar' onClick={props.handle} autoFocus>
                        {props.buttonCerrar}
                    </Button>
                    <Button id="btn-close" onClick={props.btnAceptar} autoFocus>
                        {props.button}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
