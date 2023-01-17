/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from '../util/ModalSpiner'
import check from '../../images/check.png'
export default function NewModalEmail (props) {
  const [spiner, setSpiner] = useState(false)
  const handleClose = () => {
    window.scrollTo(0, 600)
    setSpiner(false)
  }

  return (
      <>
      <ModalSpiner opt={spiner} />
         <Dialog fullWidth={true} maxWidth={'sm'}open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={props.color} id="alert-dialog-title">{props.header} <div className='' onClick={props.hclose}>{props.close}</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <div className='mt-5'>{props.body}</div>
            </DialogContentText>
            </DialogContent>
            <div className="ready text-center mb-4"><img alt='' src={check} /></div>
            <DialogActions>
            </DialogActions>
        </Dialog>
      </>
  )
}
