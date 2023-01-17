/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-campa.scss'
export default function ModalConfiguracionTemplates (props) {
  const [nameCampania, setNameCampania] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const handleClose = () => {
    window.scrollTo(0, 600)
  }

  return (
        <>
            <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <label className='mt-3 '><b>Nombre del remitente: </b><span className="text-input name-input"></span></label>
                    <input value={nameCampania} type="text" onChange={({ target }) => setNameCampania(target.value)} minLength="20" maxLength="400" className="form-control item" pattern='Ingrese Nombre'>{props.input1}</input>
                    <label><b>Descripción del remitente</b><span className="text-area"></span></label>
                    <textarea value={descripcion} type="text" onChange={({ target }) => setDescripcion(target.value)} minLength="0" maxLength="40000" className="form-control item">{props.input2}</textarea>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="btn-close" onClick={props.handle} autoFocus>
                        {props.button}
                    </Button>
                    <Button id="btn-close" onClick={props.handle} autoFocus>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
