/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable key-spacing */
/* eslint-disable no-tabs */
/* eslint-disable multiline-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable no-empty */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-shorthand */
/* eslint-disable indent */
/* eslint-disable arrow-spacing */
/* eslint-disable semi */
/* eslint-disable space-before-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable prefer-const */
/* eslint-disable space-infix-ops */
/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from '../util/ModalSpiner'
import '../../scss/_modal-campa.scss'
import '../../scss/_contact.scss'
import gruposServices from '../../services/contact'
import helpServices from '../../services/helper'
import imgXlsx from '../../assets/img/xlsx.png'
import imgXls from '../../assets/img/xls.png'
import '../../scss/_modal-segmento.scss'
import { useDropzone } from 'react-dropzone'
import imgPlus from '../../assets/img/fi_plus-circle.svg'

import $ from 'jquery'
import ModalInformacion from './ModalInformacion'
import ReactTooltip from 'react-tooltip';

export default function ModalContactList (props) {
  const [name, setName] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [spiner, setSpiner] = useState(false)
  const [isBad, setIsBad] = useState(false)
  const [tipoCanalListas, setTipoCanal] = useState('')
  const [tipoCargaContact, setTipoCarga] = useState('A')
  const [dataContactoTipoText, setContactoTipoText] = useState('')
  const [docs, setDocs] = useState([])
  const [docSend, setDocSend] = useState({})
  const [tipoArchivoSend, setTipoArchivo] = useState('')
  const opciones=[1, 2, 3]
  const [data, setData]=useState([
    {
      value:null,
      cpvalue:null
    }
  ])
  const [objError, setObjError] = useState({})
  const [showError, setShowError] = useState(false)
  const [blockCrear, setBlockCrear] = useState(false)
  const [accionModal, setAccionModal] = useState(false)
  const [opcionContent, setOpcionContent] = useState(1)
  const [isOpenInfo, setIsOpenInfo] = useState(false)

const handleClose = () => {
window.scrollTo(0, 600)
setSpiner(false)
}
const setTipoCanales = () => {
let mailing= $('#inputMailing').prop('checked')
let mensajeria=$('#inputMensajeria').prop('checked')
$('#errorTipoCanal').html(' ')
console.log('mailing', mailing);
if(mailing && mensajeria){
    setTipoCanal('T')
}else{
    if(!mailing && !mensajeria) { setTipoCanal('') }
    if(mailing) { setTipoCanal('C') }
    if(mensajeria) { setTipoCanal('M') }
}
}
const setTipoCargaContact = () => {
    let archiv= $('#inputCargaArchivo').prop('checked')
    let text=$('#inputCargaTexto').prop('checked')
    console.log('mailing', archiv);
    if(archiv) { setTipoCarga('A') }
    if(text) { setTipoCarga('T') }
}
const setNombreError = (val) => {
    if(val === ''){
        $('#nombre_lista').addClass('error')
    }else{
        $('#nombre_lista').removeClass('error')
    }
}
const setDescripcionError = (val) => {
    if(val === ''){
        $('#descripcion_lista').addClass('error')
    }else{
        $('#descripcion_lista').removeClass('error')
    }
}
const formatosArchivos = [
    'xls', 'xlsx', 'csv'
]
const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      console.log('file', file);
      console.log(file.name.split('.')[1]);
      let nombreImagen = file.name.split('.')[0]
      let extension = file.name.split('.')[1]
      console.log('archivo', formatosArchivos.includes(extension));
      if(!formatosArchivos.includes(extension)){
        console.log('mal archivo');
        setIsBad(true)
        setDocs([])
        setDocSend({})
        // const fileSend = new File([file], nombreImagen, { type: `aplicattion/${extension}` })
      }else{
        file.ext = file.name.split('.')[1]
        // file.name=file.name.split(' ').join('')
        let files=[file]
        setIsBad(false)
        setDocs(files)
        setDocSend(file)
        if(file.ext === 'xlsx' || file.ext === 'xls'){
          setTipoArchivo('excel')
        }else{
          setTipoArchivo('csv')
        }
        
        console.log('bien archivo');
        $('#errorTipoCarga').html(' ')
      }
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

const generateCsv = async (idGrupo, cabecerasSend) => {
  console.log('dataContactoTipoText', dataContactoTipoText.split('\n'))
  let content=dataContactoTipoText.split('\n');
  // let cabeceras=content[0].split('\t');
  console.log('content', content)
  console.log('dataContactoTipoText', dataContactoTipoText)
  let cabeceras=cabecerasSend.map((cab)=>{ return cab.campo.toLowerCase() });
  let dataTableExcel = [];
  let option = {};
  content.forEach((c, i)=>{
    let obj = {};
    if(content[i] !== ''){
      let cont=content[i].split('\t')
      cabeceras.forEach((c, i) => {
        obj[c] = cont[i];
    });
    }
    if((Object.keys(obj).length > 0)){
      dataTableExcel.push(obj)
    }
    console.log('obj', obj);
  })
  console.log('dataTableExcel', dataTableExcel);  
  let contenido = ""; let blob;

  for (let i = 0; i < dataTableExcel.length; i++) {
    // construimos cabecera del csv
      // resto del contenido
      contenido += Object.keys(dataTableExcel[i]).map(function (key){
        return dataTableExcel[i][key];
      }).join(",") + "\n";
  }
  console.log('contenido', contenido);  
  blob = new Blob(["\ufeff", contenido], { type: 'text/csv' });
  const fileSend = new File([blob], 'contactos', { type: "text/csv" })
  console.log('fileSend', fileSend);
  setDocSend(fileSend)
  setTipoArchivo('csv')
  sendArchivo(idGrupo, cabecerasSend, fileSend, 'csv')
}
  const mostrarContent=(op)=>{
    if(blockCrear){
      return 0;
    }
    if(op===2){
      if([tipoCanalListas, name, descripcion].includes('')){
        if(tipoCanalListas === ''){
          $('#errorTipoCanal').html(global.LABEL_EMPTY_ERROR)
        }else{
          $('#errorTipoCanal').html(' ')
        }
        if(name === ''){
          // $('#errorNombre').html(global.LABEL_EMPTY_ERROR)
          $(`#nombre_lista`).addClass('error')
        }else{
          // $('#errorNombre').html(' ')
          $(`#nombre_lista`).removeClass('error')
        }
        if(descripcion === ''){
          // $('#errorObjetivo').html(global.LABEL_EMPTY_ERROR)
          $('#descripcion_lista').addClass('error')
        }else{
          // $('#error').html(' ')
          $('#descripcion_lista').removeClass('error')
        }
        props.mostrarMensaje(400, global.CAMPOS_OBLIGATORIOS)
       return
      }
    }
    if(op===3){
      if(tipoCargaContact === 'T' && dataContactoTipoText === ''){
        console.log('dataContactoTipoText', dataContactoTipoText);
        $('#text_contactos').addClass('error')
        // setIsBad(true)
        props.mostrarMensaje(400, global.CONTACTOS_REQUERIDO)
        return 0;
      }else{
        if(tipoCargaContact === 'A'){
          console.log('Object.keys(docSend)', Object.keys(docSend));
          if(Object.keys(docSend).length === 0){
            // $('#errorTipoCarga').html(global.CONTACTOS_REQUERIDO)
            setIsBad(true)
            props.mostrarMensaje(400, global.CONTACTOS_REQUERIDO)
            return 0;
          }
          // else{
          //   $('#errorTipoCarga').html('')
          // }
        }else{
          $('#text_contactos').removeClass('error')
          // $('#errorTipoCarga').html('')
          // generateCsv()
        }
      }
    }
    console.log('op', op)
    setTimeout(() => {
      opciones.map((opcn) => {
        if(opcn===op){
            //  $(`#opcion${opcn}`).addClass('active')
             $(`#content${opcn}`).addClass('d-block')
             $(`#content${opcn}`).removeClass('d-none')
        }else{
            // $(`#opcion${opcn}`).removeClass('active')
            $(`#content${opcn}`).addClass('d-none')
            $(`#content${opcn}`).removeClass('d-block')
        }
      })
    }, 500);
    setOpcionContent(op)
  }
  const agregaCampo=()=>{ 
    if(blockCrear){
      return 0;
    }
    setData([...data, { value:null }])
    console.log('data', data)
  }
  const deleteCampo = (indexE) =>{
    if(blockCrear){
      return 0;
    }
    console.log('index', indexE);
    console.log('data', data);
    // $(`#contentCampo${indexE}`).addClass('notsend')
    const dataEl = data.filter((gastoSate, index)=>{
      return index !== indexE;
    }
    )
    console.log('dataEl', dataEl);
    setData(dataEl)
  }
  const crearGrupo = async ()=> {
    console.log('data', data)
    console.log('name', name)
    console.log('descripcion', descripcion)

    let failed=false;
    let camposSend=[];
    let camposPersonalizadosSend=[];

    data.forEach((dataCampo, i)=>{
      let campo=dataCampo.value; 
      console.log('campo', campo);
      console.log('d', dataCampo);
      if(!campo){
        $(`#errorCampo${i}`).html(global.LABEL_EMPTY_ERROR)
        failed=true
        return {
          invalid: true
        }
      }else{
          if(campo === 'CP'){
            if([dataCampo.cpvalue].includes('')){
              failed=true
              $(`#errorCampo${i}`).html(global.LABEL_EMPTY_ERROR)
            }else{
              $(`#errorCampo${i}`).html('')
              camposSend.push({
                                campo:dataCampo.cpvalue.toUpperCase()
                              }                
                )
              camposPersonalizadosSend.push(dataCampo.cpvalue.toUpperCase())
            }
          }else{
            $(`#errorCampo${i}`).html('')
            camposSend.push({ campo })
          }
      }
    })
    let validaCampos = true;
    if(tipoCanalListas === 'T'){
      camposSend.map((camp)=>{
        if(camp.campo==='CORREO' || camp.campo==='TELEFONOMOVIL'){
          validaCampos=false;
        }
      })
      validaCampos && $(`#errorCampoRequerido`).html(global.CAMPO_TELEFONO_CORREO_REQUERIDO)
    }else{
      if(tipoCanalListas === 'C'){
        camposSend.map((camp)=>{
          if(camp.campo==='CORREO'){
            validaCampos=false;
          }
        })
        validaCampos && $(`#errorCampoRequerido`).html(global.CAMPO_CORREO_REQUERIDO)
      }else{
        camposSend.map((camp)=>{
          if(camp.campo==='TELEFONOMOVIL'){
            validaCampos=false;
          }
        })
        validaCampos && $(`#errorCampoRequerido`).html(global.CAMPO_TELMOV_REQUERIDO)
      }
    }
    // generateCsv(14, camposSend);
    console.log('camposSend', camposSend)
    if(!failed && !validaCampos){
      $(`#errorCampoRequerido`).html('')
      let body = {
        nombre: name,
        descripcion: descripcion,
        tipo: 'G',
        canal: tipoCanalListas,
        camposPersonalizados: camposPersonalizadosSend
      }
      
      setSpiner(true)
      const info = await gruposServices.CrearGrupo(body)
      console.log('info', info);

      let objMessage = helpServices.getMessage(info.data)
      console.log('objMessage', objMessage)
      if(objMessage.code === 200){
        console.log('entroo 200')
        console.log('ok Creacion')
        if(tipoCargaContact === 'T'){
          console.log('camposSend', camposSend);
          generateCsv(info.data.data.idGrupo, camposSend);
        }else{
          sendArchivo(info.data.data.idGrupo, camposSend, docSend, tipoArchivoSend)
        }
      }else{
        props.mostrarMensaje(objMessage.code, objMessage.message)
      }

      // setSpiner(false)
      console.log('info', info)
      console.log('camposSend', camposSend)
    }    
  }
  const deleteDoc = () => {
    setDocs([]);
    setDocSend({})
  }
  const setCampo = (val, index) => {
    const dataEdit = data.map((campo, indexE)=>{
      if(indexE === index){
        campo.value=val;
      }
      return campo;
    })
    if(val === 'FECHANACIMIENTO'){
      $(`#info_${index}`).addClass('show-info')
    }else{
      $(`#info_${index}`).removeClass('show-info')
    }
    console.log('dataEdit', dataEdit);
    setData(dataEdit)
  }
  const setCampoCP = (event, index) => {
    console.log('event', event)
    console.log('value', event.target.value)
    let valid = helpServices.verificaSoloTexto(event.target.value)
    console.log('valid', valid)
    if(valid){
      const dataEdit = data.map((campo, indexE)=>{
        if(indexE === index){
          campo.cpvalue=event.target.value;
        }
        return campo;
      })
      console.log('dataEdit', dataEdit);
      setData(dataEdit)
    }
  }
  const sendArchivo = async (idGrupo, camposSend, archivoSend, tipoArchSend) =>{
    let paramsSendArchivo= { 
      idGrupo: idGrupo, 
      tipoArchivo: tipoArchSend,
      errorCompleto:true
    }
    const dataForm = new FormData()
  //  let camposprueba = [{ 'campo':'PRIMERNOMBRE' }, { 'campo':'PRIMERAPELLIDO' }, { 'campo':'CEDULA' }]
    let blob = new Blob([JSON.stringify(camposSend)], { type: "application/json" })

    dataForm.append('archivoDestinatario', archivoSend)
    dataForm.append('nombreCampos', blob, 'nombreCampos')
    let params = helpServices.formatUrlParams(paramsSendArchivo)
    const info2 = await gruposServices.AgregaDestinatarioGrupoArchivo(dataForm, params)
    console.log('info2', info2);
    console.log('params', params);
    console.log('dataForm', dataForm);
    setSpiner(false);
    setAccionModal(true);

    let objMessage = helpServices.getMessage(info2.data)
    console.log('objMessage', objMessage)

    if(objMessage.code === 200){
      console.log('entroo OK')
      props.handleclose(true, 'OK'); 
    }else{
      props.handleclose(true, 'E');  
      props.mostrarMensaje(objMessage.code, objMessage.message)
    }
  }
  const handleKeyPress = (event, valMax, origin) => {
    console.log('event', event.target.value.length + 1);
    console.log('event.charCode', event.charCode);
    let valid;
    if(event.target.value.length + 1 > valMax) return event.preventDefault();
    if(origin==='CP'){
      valid = helpServices.validaSoloLetras(event)
    }else{
      valid = helpServices.validaNombres(event)
    }
    if(!valid) return event.preventDefault();
  }
  const checkContactoTipoText = (value) => {
    console.log('value', value);
    console.log('value', value.length);
    if(value.length < 500000){
      setContactoTipoText(value); 
      if(value === ''){
        console.log('no hay texto');
        $('#text_contactos').addClass('error')
       }else{
        $('#text_contactos').removeClass('error')
       }
    }else{
      setIsOpenInfo(true);
    }
  }

const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({ onDrop, maxFiles: 1 })

  return (
      <>
      {isOpenInfo && <ModalInformacion isOpenInfo={isOpenInfo} header={global.HEADER_CONTACT_EXCEDE} body={global.TEX_CONTACT_EXCEDE} setIsOpenInfo={setIsOpenInfo}></ModalInformacion>}
      <ModalSpiner opt={spiner} />
         <Dialog fullWidth={true} maxWidth={'md'} open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b> <div className='close-x' onClick={() => { props.handleclose(accionModal, 'E') }}>x</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <hr className='mb-4'/>
                <div className=''>
                  <div className="d-flex carousel-nav">
                      <a onClick={ () => mostrarContent(1)} id='opcion1' href="#" className="col ">Configuración
                        <div className= {opcionContent === 1 ? 'success-panel' : 'd-none'} id='panel-sub2'>
                          <hr className='sub-color contact-sub'></hr>
                        </div>
                      </a>
                      <a onClick={ () => mostrarContent(2)} id='opcion2' href="#" className="col ">Agregar contactos
                        <div className= {opcionContent === 2 ? 'success-panel' : 'd-none'} id='panel-sub2'>
                          <hr className='sub-color contact-sub'></hr>
                        </div>
                      </a>
                      <a onClick={ () => mostrarContent(3)} id='opcion3' href="#" className="col ">Agregar campos
                        <div className= {opcionContent === 3 ? 'success-panel' : 'd-none'} id='panel-sub2'>
                          <hr className='sub-color contact-sub'></hr>
                        </div>
                      </a>
                  </div>
                  <div id='content1' className="media-29101 w-100 d-block mt-4">
                    <div className='container-fluid'>
                      <span className="text-input name-input every-label" id='errorTipoCanal'></span>
                      <div className="form-group col-md-12 row align-items-center">
                                <span className="form-label col-md-2">Tipo canal <strong className='obl'>*</strong> </span>
                                <div className='mr-3 d-flex align-items-center'>
                                  <input checked={tipoCanalListas === 'C' || tipoCanalListas === 'T'} id='inputMailing' name='tipoCanal' onClick={(e)=>{ setTipoCanales() }} type="checkbox" className="ml-1 w-check check-color-list mr-2" />
                                  <label className="form-label mb-0">Mailing</label>
                                </div>
                                <div className='mr-3 d-flex align-items-center'>
                                  <input checked={tipoCanalListas === 'M' || tipoCanalListas === 'T'} id='inputMensajeria' name='tipoCanal' onClick={(e)=>{ setTipoCanales() }} type="checkbox" className="ml-1 w-check check-color-list mr-2" />
                                  <label className="form-label mb-0">Mensajería instantánea</label>
                                </div>
                      </div>
                      <div className='form-group col-md-12'>
                          <span className="text-input name-input every-label" id='errorNombre'></span>
                          <label className='mt-3 grey-color'>Nombre de la lista <strong className='obl'>*</strong></label>
                          <input value={name} type="text" 
                                 id='nombre_lista'
                                 onKeyUp={(e)=>{ setNombreError(e.target.value) }} 
                                 onKeyPress={(event) => { handleKeyPress(event, 45, 'TEXT') }}
                                 onChange={({ target }) => setName(target.value)} minLength="20" maxLength="400" 
                                 className="form-control item" 
                                 pattern='Ingrese Nombre'>
                          </input>
                      </div>
                      <div className='form-group col-md-12'>
                          <span className="text-input name-input every-label" id='errorObjetivo'></span>
                          <label className='grey-color'>Descripción de los miembros de la lista <strong className='obl'>*</strong></label>
                          <textarea value={descripcion} 
                                    type="text" 
                                    id='descripcion_lista'
                                    onKeyUp={(e)=>{ setDescripcionError(e.target.value) }} 
                                    onChange={({ target }) => setDescripcion(target.value)} minLength="0" maxLength="40000" 
                                    className="form-control item">
                          </textarea>
                      </div>
                      <div className="text-center">
                          <div className='btn-sgt-step3'><button onClick={ () => mostrarContent(2)} className='btnDelete' >Siguiente</button></div>
                      </div>
                    </div>
                  
                  </div>
                  <div id='content2' className="media-29101 w-100 d-none mt-4">
                    <div className='container-fluid'>
                      <div className="form-group col-md-12 row align-items-center">
                            <span className="form-label col-md-4">Tipo carga de contactos</span>
                            <div className='mr-3 d-flex align-items-center'>
                              <input checked={tipoCargaContact === 'A'} id='inputCargaArchivo' name='tipoCargaArchivo' onClick={(e)=>{ setTipoCargaContact() }} type="radio" className="ml-1 w-check check-color-list mr-2" />
                              <label className="form-label mb-0">Archivo</label>
                            </div>
                            <div className='mr-3 d-flex align-items-center'>
                              <input checked={tipoCargaContact === 'T'} id='inputCargaTexto' name='tipoCargaArchivo' onClick={(e)=>{ setTipoCargaContact() }} type="radio" className="ml-1 w-check check-color-list mr-2" />
                              <label className="form-label mb-0">Texto</label>
                            </div>
                      </div>
                      <div className='text-second-listas pl-3'>
                        <span>Por favor, ingrese la información sin cabecera</span>
                      </div>
                      { tipoCargaContact === 'A' ? <>
                              <div className='row ml-1'>
                                  <span className="text-input name-input every-label" id='errorTipoCarga'></span>
                                  <div className={`col-md-12 rectangular-load crea-lista ${isBad ? 'bad-doc':''}`} id='rect-cont' >
                                        <div className='areaQuitDoc'>
                                            <i onClick={()=> deleteDoc()} className='ml-2 far fa-trash-alt notify-color'></i>
                                        </div> 
                                        <div className='getDocContacts' {...getRootProps()}>
                                            <input {...getInputProps()} accept={[]} />
                                            {docs.map((docs, ide)=> (
                                                <div className='docs-excel' key={ide}>
                                                    {docs.ext === 'xls' ?<img src={imgXls} /> : <img src={imgXlsx} /> }
                                                    <span className='ml-3'>{docs.name}</span>
                                                </div>
                                            ))}
                                          {docs.length === 0 && <p>Seleccionar o arrastrar aqui el archivo</p>}
                                        </div>
                                        
                                  </div>
                              
                              </div>
                      </> : <>
                              <div className='form-group col-md-12'>
                                  <span className="text-input name-input every-label" id='errorTipoCarga'></span>
                                  <label className='mt-3 grey-color'><b>Ingrese contactos </b><span className="text-input name-input"></span></label>
                                  <textarea value={dataContactoTipoText} 
                                            type="text" 
                                            id='text_contactos'
                                            onChange={({ target }) => { 
                                                                        const op2= checkContactoTipoText(target.value); 
                                                                      }} 
                                            minLength="1"
                                            maxLength={ 500000 }
                                            className='form-control carga-contacto-text item'></textarea>
                              </div>  
                      </>}

                      <div className="text-center">
                                <div className='btn-sgt-step3'><button onClick={ () => mostrarContent(3)} className='btnDelete' >Siguiente</button></div>
                            </div>
                    </div>
                  </div>
                  <div id='content3' className="media-29101 w-100 d-none mt-4">
                      <div className='container-fluid'>
                        <div className='headerCampos'>
                          <div className='detailHeader'>
                            <span className='text-camp font-weight-bold'>Mapear campos </span><br></br>
                            <span className='text-camp font-weight-bold'>Identifica los campos de tu base de contactos</span><br></br>
                            <span className="text-input name-input every-label" id="errorCampoRequerido"></span>
                          </div>
                          {/* <div className='contentError'>
                            { showError && <span className='errorCarga' onClick={() => { dowloadCsv(objError) }}> Descargar contactos con error </span> }
                          </div> */}
                        </div>
                          
                          <div className='content-criterio d-grid'>
                              {data.map((content, index)=>{
                                  return(
                                  <>
                                      
                                      <div id={`contentCampo${index}`} className=' row content-data'>
                                        <div className="pl-0 col-md-12 sidebar-box mb-2">
                                          <span className="text-input name-input every-label" id={`errorCampo${index}`}></span>
                                        </div>
                                        <div className="pl-0 col-md-2 colum">
                                           <span id='valColum'> Columna {index+1}</span>
                                        </div> 
                                        <div className="pl-0 col-md-4 sidebar-box select-campos">
                                            <select value={content.value} disabled={blockCrear} onChange={({ target }) => { setCampo(target.value, index) } } id={`campo${index}`} className="form-control item styled-select" >
                                                <option value="" >Seleccionar Campo</option>
                                                <option value="PRIMERNOMBRE" >Primer nombre</option>
                                                <option value="PRIMERAPELLIDO" >Primer apellido</option>
                                                <option value="CORREO" >Correo</option>
                                                <option value="GENERO" >Género</option>
                                                <option value="PAIS" >País</option>
                                                <option value="FECHANACIMIENTO" >Fecha nacimiento</option>
                                                <option value="TELEFONOMOVIL" >Teléfono móvil</option>
                                                <option value="CP" >Campo personalizado</option>
                                            </select>
                                            <div id={`info_${index}`} data-tip={global.INFO_FECHA} data-html={true} className='info-icon'>
                                              <i className="fa fa-info-circle notify-color ajust-text" aria-hidden="true">
                                              </i>
                                              <ReactTooltip place="bottom" type="dark" effect="solid"/>
                                            </div>
                                        </div> 
                                        { content.value === 'CP' && 
                                        <div id={`detallePersonalizado${index}`} className="pl-0 col-md-4 colum">
                                            <input id={`valPersonalizado${index}`} 
                                                  type="text" 
                                                  minLength="20" 
                                                  maxLength="400" 
                                                  value={content.cpvalue}
                                                  onChange={(event) => { setCampoCP(event, index) } }
                                                  onKeyPress={(event) => { handleKeyPress(event, global.LENGTH_NAME_LAST, 'CP') }}
                                                  className="form-control item" />
                                        </div> 
                                        }
                                        
                                        <div className="pl-0 pr-0 col-md-2 sidebar-box"><i onClick={()=> deleteCampo(index)} className='ml-2 far fa-trash-alt notify-color'></i></div>
                                      </div>
                                  </>
                                  ) 
                              })}
                                      <div onClick={()=>{ agregaCampo() }} className='agrega-criterio'>
                                          <img className='mr-1' src={imgPlus} />
                                          <span>Agrega campo</span>
                                      </div>
                          </div>
                          {/* <CSVLink data={csvData}>Download me</CSVLink>; */}
                          <div className="text-center">
                              <div className='btn-sgt-step3'>
                                <button disabled={blockCrear} onClick={ () => { crearGrupo() }} className='btnDelete' >Crear Grupo</button>
                                </div>
                          </div>
                      
                      </div>
                  </div>
                </div>
            </DialogContentText>
            </DialogContent>
        </Dialog>
      </>
  )
}
