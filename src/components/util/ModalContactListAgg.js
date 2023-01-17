/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable no-var */
/* eslint-disable key-spacing */
/* eslint-disable keyword-spacing */
/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
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
import '../../scss/_modal-segmento.scss'
import gruposServices from '../../services/contact'
import helpServices from '../../services/helper'
import validator from 'validator'
import date from '../../services/global'

import $ from 'jquery'

export default function ModalContactListAgg ({ isOpenAg, idGrupo, destinatarioEdit, opcionLista, handlecloseAgg, header, color, button, tipoGrupo, mostrarMensaje }) {
  const [name, setName] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setMail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fechaN, setFechaN] = useState('')
  const [genero, setGenero] = useState('')
  const [pais, setPais] = useState('')
  const [spiner, setSpiner] = useState(false)
  const [messageError, setMessageError] = useState('')
const handleClose = () => {
  console.log('ejecuta cierre');
  setSpiner(false)
  setName('')
  setApellido('')
  setMail('')
  setTelefono('')
  setFechaN('')
  setGenero('')
  setPais('')

  // window.scrollTo(0, 600)
}

useEffect(() => {
  if((Object.keys(destinatarioEdit).length > 0)) {
    setName(destinatarioEdit.primerNombre)
    setApellido(destinatarioEdit.primerApellido)
    setMail(destinatarioEdit.correo)
    setTelefono(destinatarioEdit.telefonoMovil)
    setFechaN(destinatarioEdit.fechaNacimiento)
    setGenero(destinatarioEdit.genero)
    setPais(destinatarioEdit.pais)
      console.log('editar listo modal');
  }
}, [])

const saveDestinatario = async () => {
  let dataSend
  let idGrupoSend = idGrupo
  let proccssDone = true;
  let emailDone = true;
  let telDone = true;
  // let idGrupo = 35

  if(tipoGrupo === 'C'){
    proccssDone = verificaCampo(email, 'email')
  }else{
    if(tipoGrupo === 'M'){
      proccssDone = verificaCampo(telefono, 'telefono')
    }else{
      proccssDone = verificaCampo(email, 'email')
      proccssDone = verificaCampo(telefono, 'telefono')
    }
  }
  if(telefono !== ''){ telDone = verificaCampo(telefono, 'telefono') }
  if(email !== ''){ emailDone = verificaCampo(email, 'email') }

  if((telefono === '' && proccssDone === false) || (email === '' && proccssDone === false)){
    mostrarMensaje(400, global.CAMPOS_OBLIGATORIOS)
  }

  console.log('proccssDone', proccssDone);
  // if ([name, apellido, fechaN, genero, telefono, email].includes('')) {
  //   proccssDone = false;
  //   verificaCampo(name, 'nombre')
  //   verificaCampo(apellido, 'apellido')
  //   verificaCampo(fechaN, 'fecha')
  //   verificaCampo(genero, 'genero')
  //   console.log('Faltan campos por llenar');
  // }
  console.log('proccssDone', proccssDone);
  console.log('telDone', telDone);
  console.log('emailDone', emailDone);
  console.log('fechaN', fechaN);

  if(proccssDone && emailDone && telDone) {
    setSpiner(true)
    dataSend = {
      primerNombre: name,
      primerApellido: apellido,
      genero: genero,
      correo: email,
      telefonoMovil: telefono,
      fechaNacimiento: fechaN,
      pais: pais,
      camposPersonalizados: []
    }
    let info;
    if(opcionLista === 'C') {
      let send = [dataSend]
      info = await gruposServices.AgregaDestinatarioUnitGrupo({ send, idGrupo })
    }else{
      let idDestinatario = destinatarioEdit.idDestinatario
      info = await gruposServices.SetDestinatario({ dataSend, idDestinatario, idGrupo })
    }
      console.log(info)
      setSpiner(false)

      let objMessage = helpServices.getMessage(info.data)
      console.log('objMessage', objMessage)
      
      if(objMessage.code === 200){
        console.log('entroo OK')
        handleClose()
        handlecloseAgg(true);
      }else{
        mostrarMensaje(objMessage.code, objMessage.message)
      }
  }

  console.log('dataSend', dataSend);
  console.log('idGrupo', idGrupo);
  console.log('idGrupoSend', idGrupoSend);
}

const handleKeyPress = (event, valMax, campo) => {
  console.log('event', event.target.value.length + 1);
  console.log('event.charCode', event.charCode);
  if(campo === 'telefono'){
    if(event.target.value.length + 1 > valMax) return event.preventDefault();
    let valid = helpServices.validaSoloNumeros(event)
    console.log('valid', valid);
    if(!valid) return event.preventDefault();
  }else{
    if(campo === 'correo'){
      if(event.target.value.length + 1 > valMax || event.charCode === 32) return event.preventDefault(); 
    }else{
        if(event.target.value.length + 1 > valMax) return event.preventDefault();
        let valid = helpServices.validaTextoLetras(event)
        if(!valid) return event.preventDefault();
    }
  }
}
const verificaCampo = (valor, campo) => {
  if(campo === 'telefono'){
    let messageTel = ''
    let badTel = false;
    let mostarError = false;
    if(tipoGrupo === 'M' || tipoGrupo === 'T'){
      if(valor === '' || valor.length !== global.LENGTH_PHONE_ID || String(valor).substring(0, 2) !== '09') {
        badTel = true;
        if(valor === ''){ messageTel = global.CAMPOS_OBLIGATORIOS } else {
          mostarError = true;
          messageTel = global.LABEL_ERROR_TELEFONO
        }
      }
    }else{
      if(valor !== ''){
        if(valor.length !== global.LENGTH_PHONE_ID || String(valor).substring(0, 2) !== '09') {
          messageTel = global.LABEL_ERROR_TELEFONO
          console.log('valor.substr(0, 1)', String(valor).substring(0, 2));
          console.log('String(valor)', String(valor));
          badTel = true;
          mostarError = true;
        }
      }
    }
    if(badTel){
      if(mostarError){
        $(`#error_${campo}`).html(messageTel)
        $(`#contacto_${campo}`).addClass('error')
      }
      return false;
    }else{
      $(`#error_${campo}`).html('')
      $(`#contacto_${campo}`).removeClass('error')
      return true;
    }
  }
  if(campo === 'email'){
    let messageCorreo = '';
    let badEmail = false;
    let mostarError = false;
    if(tipoGrupo === 'C' || tipoGrupo === 'T'){
      if(valor === '' || !validator.isEmail(valor)){
        if(valor === ''){ messageCorreo = global.CAMPOS_OBLIGATORIOS } else {
          mostarError = true;
          messageCorreo = global.LABEL_ERROR_EMAIL
        }
        badEmail = true;
      }
    }else{
      if(valor !== '' && !validator.isEmail(valor)){
        mostarError = true;
        badEmail = true;
        messageCorreo = global.LABEL_ERROR_EMAIL
      }
    }
    if(badEmail){
      if(mostarError){
        $(`#error_${campo}`).html(messageCorreo)
        $(`#contacto_${campo}`).addClass('error')
      }
      return false;
    }else{
      $(`#error_${campo}`).html('')
      $(`#contacto_${campo}`).removeClass('error')
      return true;
    }
  }

  if(valor === '') {
    $(`#error_${campo}`).html(global.LABEL_EMPTY_ERROR)
    $(`#contacto_${campo}`).addClass('error')
  }else{
    $(`#error_${campo}`).html('')
    $(`#contacto_${campo}`).removeClass('error')
  }
}
  return (
      <>
      <ModalSpiner opt={spiner} />
         <Dialog fullWidth={true} maxWidth={'md'} open={isOpenAg} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={color} id="alert-dialog-title"><b>{header}</b> <div className='close-x' onClick={() => {
              const funcion1 = handlecloseAgg(false);
              const funcion2 = handleClose();
            } }>x</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <hr/>
            <div className='row'>
              <div className='form-group col-md-12'>
                <span className="text-input name-input every-label" id='error_nombre'></span>
                <label className='grey-color'>Primer nombre del contacto</label>
                <input id='contacto_nombre' 
                       value={name} type="text"  
                      //  onKeyUp={({ target }) => verificaCampo(target.value, 'nombre')} 
                       onChange={({ target }) => setName(target.value)} minLength="20" maxLength="400" 
                       onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_NAME_LAST, 'nombre') }}
                       className="form-control item" pattern='Ingrese Nombre'>
                </input>
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-md-12'>
              <span className="text-input name-input every-label" id='error_apellido'></span>
              <label className='grey-color'>Primer apellido del contacto</label>
               <input id='contacto_apellido' 
                      value={apellido} 
                      type="text" 
                      // onKeyUp={({ target }) => verificaCampo(target.value, 'apellido')} 
                      onChange={({ target }) => setApellido(target.value)} minLength="0" maxLength="40000"
                      onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_NAME_LAST, 'apellido') }} 
                      className="form-control item">
                </input>
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-md-12'>
              <span className="text-input name-input every-label" id='error_email'></span>
                <label className='grey-color'>Mail  <strong hidden={tipoGrupo === 'C' || tipoGrupo === 'T' ? false : true} className='obl'>*</strong></label>
                <input id='contacto_email' 
                       value={email} 
                       type="text" 
                       onKeyUp={({ target }) => verificaCampo(target.value, 'email')} 
                       onChange={({ target }) => setMail(target.value)} minLength="0" maxLength="40000" 
                       onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_CORREO, 'correo') }} 
                       className="form-control item">
                </input>
              </div>
            </div>
            <div className='row'>
                <div className='form-group col-md-6'>
                    <span className="text-input name-input every-label" id='error_telefono'></span>
                    <label className='grey-color'>Teléfono <strong hidden={tipoGrupo === 'M' || tipoGrupo === 'T' ? false : true} className='obl'>*</strong></label>
                    <input id='contacto_telefono' 
                           value={telefono}
                           type="text"
                           onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_PHONE_ID, 'telefono') }} 
                           onKeyUp={({ target }) => verificaCampo(target.value, 'telefono')} 
                           onChange={({ target }) => setTelefono(target.value)} minLength="0" maxLength="40000" 
                           className="form-control item">
                    </input>
                </div>
                <div className='form-group col-md-6'>
                    <span className="text-input name-input every-label" id='error_fecha'></span>
                    <label className='grey-color'>Fecha de nacimiento</label>
                    <input id='contacto_fecha' 
                          value={fechaN} 
                          type="date" 
                          onChange={({ target }) => { const set = setFechaN(target.value) } } 
                          max={date.getDate()}
                          className="form-control item"></input>
                </div>
            </div>
            <div className='row'>
                <div className='form-group col-md-6 sidebar-box'>
                    <span className="text-input name-input every-label" id='error_genero'></span>
                    <label className='grey-color'>Género</label>
                    <input id='contacto_genero'
                           value={genero} 
                           type="text" 
                           onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_PAIS, 'pais') }} 
                           onChange={({ target }) => { const set = setGenero(target.value) } } 
                           minLength="0" maxLength="40000" 
                           className="form-control item">
                    </input>

                  </div>
                <div className='form-group col-md-6 sidebar-box'>
                    <label className='grey-color'>País</label>
                    <input value={pais} 
                           type="text" 
                           onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_PAIS, 'pais') }} 
                           onChange={({ target }) => setPais(target.value)} minLength="0" maxLength="40000" 
                           className="form-control item">
                    </input>

                    {/* <select value={pais} onChange={({ target }) => setPais(target.value)} className="form-control item styled-select" >
                      <option value="" >Ingrese País de Contacto</option>
                      <option value="E" >Ecuador</option>
                      <option value="M" >Mexico</option>
                    </select> */}
                </div>
            </div>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button id="btn-close" onClick={() => { saveDestinatario() }} autoFocus>
              {button}
            </Button>
            </DialogActions>
        </Dialog>
      </>
  )
}
