/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-campa.scss'
export default function ModalhtmlTemplate (props) {
  const handleClose = () => {
    window.scrollTo(0, 600)
  }

  return (
        <>
            <Dialog fullWidth={true}
            maxWidth={'lg'} open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <hr />{props.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="btn-close" onClick={props.handle} autoFocus>
                        {props.button}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
