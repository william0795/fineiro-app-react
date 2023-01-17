/* eslint-disable object-shorthand */
/* eslint-disable quotes */
/* eslint-disable arrow-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from '../util/ModalSpiner'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'
import gruposServices from '../../services/contact'
import helpServices from '../../services/helper'
import ModalConfirmacion from '../util/ModalConfirmacion'

import '../../scss/_modal-campa.scss'
import '../../scss/_modal-segmento.scss'
const ModalEditarGrupo = (props) => {
    const [spiner, setSpiner] = useState(false)
    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipoCanalListas, setTipoCanal] = useState('')
    const [tipoCanalCheck, setTipoCanalCheck] = useState('')
    const [isOpenConf, setIsOpenConf] = useState(false)
    const [tipoGrupoEdit, setTipoGrupoEdit] = useState('')

    useEffect(() => {
        if((Object.keys(props.grupoEdit).length > 0)) {
          setName(props.grupoEdit.nombre)
          setDescripcion(props.grupoEdit.descripcion)
          setTipoCanal(props.grupoEdit.canal)
          setTipoGrupoEdit(props.grupoEdit.canal)
          setTimeout(() => {
            // props.grupoEdit.canal = 'T'
            console.log(' props.grupoEdit', props.grupoEdit);
            console.log('props.grupoEdit.canal ', props.grupoEdit.canal);
           
            if(props.grupoEdit.canal === 'T'){
              console.log('entra todos');
              $('#inputMailing').prop('checked', true)
              $('#inputMensajeria').prop('checked', true)
            }else{
              if(props.grupoEdit.canal === 'C'){
                console.log('entra mailin');
                $('#inputMailing').prop('checked', true)
              }else{ 
                console.log('entra mensajeria');
                $('#inputMensajeria').prop('checked', true)
              }
            }
          }, 500);
          
          console.log('editar listo modal');
        }
    }, [])

    const saveGrupo = async () => {
        if([tipoCanalListas, name, descripcion].includes('')){
            if(tipoCanalListas === ''){
              $('#errorTipoCanal').html(global.LABEL_EMPTY_ERROR)
            }else{
              $('#errorTipoCanal').html(' ')
            }
            if(name === ''){
              // $('#errorNombre').html(global.LABEL_EMPTY_ERROR)
              $('#nombreGrupo').addClass('error')
            }else{
              // $('#errorNombre').html(' ')
              $('#nombreGrupo').removeClass('error')
            }
            if(descripcion === ''){
              // $('#errorObjetivo').html(global.LABEL_EMPTY_ERROR)
              $('#descripcionGrupo').addClass('error')
            }else{
              // $('#error').html(' ')
              $('#descripcionGrupo').removeClass('error')
            }
            props.mostrarMensaje(400, global.CAMPOS_OBLIGATORIOS)
           return
          }
        console.log('props.grupoEdit', props.grupoEdit);
        let body = {
            nombre: name,
            descripcion: descripcion,
            tipo: props.grupoEdit.tipo,
            canal: tipoCanalListas,
            camposPersonalizados: props.grupoEdit.camposPersonalizados ? [props.grupoEdit.camposPersonalizados] : null
          }
        setSpiner(true)
        let idgrupo = props.grupoEdit.idGrupo;
        // let idgrupo = 58;
        const info = await gruposServices.EditarGrupo({ idgrupo, body })
        console.log('info', info);

        let objMessage = helpServices.getMessage(info.data)
        console.log('objMessage', objMessage)
    
        if(objMessage.code === 200){
          console.log('entroo OK')
          props.handleCloseEditGrupo(true)  
        }else{
          props.handleclose(true, 'E');  
          props.mostrarMensaje(objMessage.code, objMessage.message)
        }
        setSpiner(false)       
    }
    const setTipoCanales = () => {
      let typeGroup = '';
        let mailing = $('#inputMailing').prop('checked')
        let mensajeria = $('#inputMensajeria').prop('checked')
        console.log('mailing', mailing);
        console.log('mensajeria', mensajeria);
        $('#errorTipoCanal').html(' ')
        if(mailing && mensajeria) {
          setTipoCanalCheck('T')
          typeGroup = 'T';
        }else{
          if(!mailing && !mensajeria) { 
            setTipoCanalCheck('')
            $('#errorTipoCanal').html(global.LABEL_EMPTY_ERROR)
          } 
          if(mailing) { setTipoCanalCheck('C'); typeGroup = 'C'; } 
          if(mensajeria) { setTipoCanalCheck('M'); typeGroup = 'M'; } 
        }
        if(typeGroup !== tipoGrupoEdit){
          setIsOpenConf(true)
        }else{
          setTipoCanal(tipoGrupoEdit)
        }
      }
    const setNombreError = (val) => {
        if(val === ''){
            // $('#errorNombre').html(global.LABEL_EMPTY_ERROR)
            $('#nombreGrupo').addClass('error')
        }else{
            // $('#errorNombre').html(' ')
            $('#nombreGrupo').removeClass('error')
        }
    }
    const setDescripcionError = (val) => {
        if(val === ''){
            // $('#errorObjetivo').html(global.LABEL_EMPTY_ERROR)
            $('#descripcionGrupo').addClass('error')
        }else{
            // $('#errorObjetivo').html(' ')
            $('#descripcionGrupo').removeClass('error')
        }
    }
    const deleteCampos = () => {
      setName('')
      setDescripcion('')
      setTipoCanal('')
      // $('#inputMailing').props('checked', false)
      // $('#inputMensajeria').props('checked', false)
    }
    const handleKeyPress = (event, valMax) => {
      console.log('event', event.target.value.length + 1);
      console.log('event.charCode', event.charCode);
      if(event.target.value.length + 1 > valMax) return event.preventDefault();
      let valid = helpServices.validaNombres(event)
      if(!valid) return event.preventDefault();
    }
    const handleModalConf = (op) => {
      if(op){
        setTipoCanal(tipoCanalCheck)
      }
      setIsOpenConf(false)
    }
  return (
    <>
    {isOpenConf && <ModalConfirmacion isOpen={isOpenConf} body={global.TEXT_CHANGE_CANAL_LIST} handleModalConf={handleModalConf} header={''}/>}

    <ModalSpiner opt={spiner} />
       <Dialog fullWidth={true} maxWidth={'md'} open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title"><b>{props.header}</b>
          <div className='close-x' onClick={()=>{
              const funcion1 = props.handleCloseEditGrupo(false);
              const funcion2 = deleteCampos();
            } } >x</div></DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className='container-fluid-master'>
              <div className=" owl-1">
                  <div id='content1' className="media-29101 w-100 d-block">
                      <div className='container-fluid'>
                          <span className="text-input name-input every-label" id='errorTipoCanal'></span>
                          <div className="form-group row align-items-center">
                            <label className="form-label col-md-2">Tipo canal <strong className='obl'>*</strong></label>
                            <div className='mr-3 d-flex align-items-center'>
                              <input disabled checked={tipoCanalListas === 'T' || tipoCanalListas === 'C'} id='inputMailing' name={props.tipoGrupo === 'L' ? "tipoCanalMaling" : "tipoCanal" } onClick={(e)=>{ setTipoCanales() }} type={props.tipoGrupo === 'L' ? "checkbox" : "radio" } className="ml-1 w-check check-color-list mr-2" />
                              <label className="form-label mb-0">Mailing</label>
                            </div>
                            <div className='mr-3 d-flex align-items-center'>
                              <input disabled checked={tipoCanalListas === 'T' || tipoCanalListas === 'M'} id='inputMensajeria' name={props.tipoGrupo === 'L' ? "tipoCanalMensajeria" : "tipoCanal" } onClick={(e)=>{ setTipoCanales() }} type={props.tipoGrupo === 'L' ? "checkbox" : "radio" } className="ml-1 w-check check-color-list mr-2" />
                              <label className="form-label mb-0">Mensajería instantánea</label>
                            </div>
                          </div>
                          <div className="form-group">
                              <span className="text-input name-input every-label" id='errorNombre'></span>
                              <label className="form-label">{props.label1} <strong className='obl'>*</strong> </label>
                              <input value={name} 
                                     id='nombreGrupo' 
                                     onKeyUp={(e)=>{ setNombreError(e.target.value) }} 
                                     onChange={(e)=>setName(e.target.value)} 
                                     onKeyPress={(event) => { handleKeyPress(event, 45) }}
                                     placeholder='Escriba nombre de plantilla' 
                                     type="text" minLength="20" maxLength="400" 
                                     className="form-control item" 
                                     pattern='Ingrese Nombre' />
                          </div>        
                          <div className="form-group">
                              <span className="text-input name-input every-label" id='errorObjetivo'></span>
                              <label className="form-label">{props.label2} <strong className='obl'>*</strong></label>
                              <textarea value={descripcion} 
                                        id='descripcionGrupo' 
                                        onKeyUp={(e)=>{ setDescripcionError(e.target.value) }} 
                                        onChange={(e)=>setDescripcion(e.target.value)} 
                                        onKeyPress={(event) => { handleKeyPress(event, 45) }}
                                        rows='5' 
                                        placeholder='Escriba un texto máximo de 200 caracteres' 
                                        type="text" minLength="0" maxLength="40000" 
                                        className="form-control item" />
                          </div>
                          
                      </div>
                  </div>

              </div>
          </div>
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button id="btn-close" onClick={() => { saveGrupo() }} autoFocus>
            Editar
          </Button>
          </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalEditarGrupo
