/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from '../util/ModalSpiner'
import '../../scss/_modalWizardTemplate.scss'
export default function ModalWIzardTemplate(props) {
  const [spiner, setSpiner] = useState(false)
  const returnCreatePlantilla = (event) => () => {
    if (event === 'H') {
      window.location.href = global.ROUTE_CREATEMAILTEMPLATES
      window.localStorage.setItem('wizard', 1)
    }
    if (event === 'T') {
      window.location.href = global.ROUTE_CREATESMSTEMPLATES
      window.localStorage.setItem('wizard', 1)
    }
    if (event === 'E') {
      window.location.href = global.ROUTE_CREATEWHATTEMPLATES
      window.localStorage.setItem('wizard', 1)
    }
  }
  const handleClose1 = () => {
    window.scrollTo(0, 600)
    setSpiner(false)
  }
  return (
      <>
      <ModalSpiner opt={spiner} onClose={handleClose1} />
         <Dialog fullWidth={true} maxWidth={'md'} open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b><div className='close-x' onClick={props.handle}>x</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <hr/>
              <div className='row col-12 d-flex justify-content-around'>
                <div className='col-3 text-center b-evelope' onClick={returnCreatePlantilla('H')}>
                  <i className='far fa-envelope notify-color'></i>
                  <h6>Crear plantilla mail</h6>
                </div>
                <div className='col-3 text-center b-evelope ml-2' onClick={returnCreatePlantilla('T')}>
                <i className='far fa-comment-dots notify-color'></i>
                  <h6>Crear plantilla sms</h6>
                </div>
                <div className='col-3 text-center b-evelope ml-2' onClick={returnCreatePlantilla('E')}>
                <i className="fab fa-whatsapp notify-color"></i>
                  <h6>Crear plantilla whatsapp</h6>
                </div>
              </div>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
      </>
  )
}
