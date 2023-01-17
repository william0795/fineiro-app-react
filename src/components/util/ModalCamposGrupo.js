/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
import React from 'react'
// import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-confirmacion.scss'

const ModalCamposGrupo = (props) => {

    return (
        <>
          <Dialog open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" className='informacion'>
                        {global.CAMPOS_GRUPO_TITLE}
                        <div className='close-x' onClick={() => { props.setIsOpenCampos(false) } } >x</div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description-conf" className='data-campos-group'>
                            {props.dataCampos.map((val, index) => {
                                return <button className='btn-campos' key={index}>{val}</button>
                            })}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* <Button id="btn-close" onClick={() => { props.setIsOpenCampos(false) }} autoFocus>
                            Aceptar
                        </Button> */}
                    </DialogActions>
                </Dialog>
        </>
      )
}

export default ModalCamposGrupo
