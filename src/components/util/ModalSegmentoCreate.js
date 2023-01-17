/* eslint-disable dot-notation */
/* eslint-disable semi */
/* eslint-disable key-spacing */
/* eslint-disable multiline-ternary */
/* eslint-disable prefer-const */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable comma-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable arrow-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable-next-line prefer-const */

import React, { useState,useEffect } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import ModalSpiner from '../util/ModalSpiner'
import imgPlus from '../../assets/img/fi_plus-circle.svg'
import TableCheck from '../../views/contacts/components/TableCheck'

import '../../scss/_modal-campa.scss'
import '../../scss/_modal-segmento.scss'
import $ from 'jquery'
import gruposServices from '../../services/contact'
import helpServices from '../../services/helper'
import NewModal from './ModalGeneral'

export default function ModalSegment (props) {
  const [name, setName] = useState('')
  const [objetivo, setDescripcion] = useState('')
  const [data,setData]=useState([1])
  const [lista,setLista]=useState([])
  const [listas,setListas]=useState([])
  const [spiner, setSpiner] = useState(false)
  const [listasDataGeneral, setListasDataGeneral] = useState([])
  const [datatable, setDataTable] = useState({})
  const [tipoCanalListas, setTipoCanal] = useState('')
  const [pageSelect, setPageSelect] = useState(1)
  const [opcionContent, setOpcionContent] = useState(1)
  const opciones=[1,2,3]
  let listasSelec = []
  let listasSelecGen = []

  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('')
  const [body, setBody] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [handle, setHandle] = useState()
  const [closes, setCloses] = useState()
  const [hclose, setHclose] = useState()

  // localStorage.setItem('list',null)
  const getDataListas = async () => {
    console.log('entrDataListas');
    const tipoCanal = tipoCanalListas
    const templates = await gruposServices.getGruposCanal({ tipoCanal })
    console.log(templates)
    // setListas(templates.data.data.row)
    if(templates.data.data.totalRows > 0){
      let objetoListas = templates.data.data.row.map((listasTemplate) => {
        let isChecked=false
        if(lista.length!==0 && lista[0].length!==0){
          let datosRecorre=lista
          if(datosRecorre.includes(listasTemplate.idGrupo)){
            isChecked=true;
          }
        }
        
        let tipoCanal='';
        if(listasTemplate.canal==='C'){ tipoCanal='Mailing' }
        if(listasTemplate.canal==='M'){ tipoCanal='Mensajería instantánea' }
        if(listasTemplate.canal==='T'){ tipoCanal='Ambos' }
        return {
          accion: <input id={`inputTable${listasTemplate.idGrupo}`} onClick={(e)=>{ agregaLista(e.target.checked,listasTemplate.idGrupo, listasTemplate.permitido); }} type="checkbox" className="ml-1 col-1 form-check-input w-check  check-color-list"></input>,
          // accion: '',
          nameList: helpServices.toTitleCase(listasTemplate.nombre),
          dateCreate: <div className='fechaTable'><span>{ listasTemplate.fechaCreacion }</span><span></span></div>,
          typeCanal:tipoCanal ,
          suscrpters:listasTemplate.cantidadDestinatarios ,
          idGrupo:listasTemplate.idGrupo,
          ckecked:true
        }
      }) 
      setListas(objetoListas)
      setListasDataGeneral(templates.data.data.row)
      listasSelecGen=objetoListas
    }else{
      console.log('entra vacio');
      setListas([])
      setListasDataGeneral([])
    }
   
   }

  useEffect(()=>{
    if(tipoCanalListas!==''){
      getDataListas()
    }

  }, [tipoCanalListas])

  const handleClose = () => {
    console.log('ejecuta cierre');
    setSpiner(false)
    setName('')
    setDescripcion('')
    setTipoCanal('')
    setLista([])
    setListas([])
    setData([1])
    localStorage.setItem('list',null)
    listasSelec = []
    listasSelecGen = []
    // window.scrollTo(0, 600)
    
  }
  const handleCloseInfo = (op) => () => {
    setIsOpen(false)
  }
  const setTipoCanales = () => {
    let mailing = $('#inputMailing').prop('checked')
    let mensajeria = $('#inputMensajeria').prop('checked')
    console.log('mailing', mailing);
    console.log('mensajeria', mensajeria);
    $('#errorTipoCanal').html(' ')
    if(mailing && mensajeria) {
      setTipoCanal('T')
    }else{
      if(!mailing && !mensajeria) { 
        setTipoCanal('')
        $('#errorTipoCanal').html(global.LABEL_EMPTY_ERROR)
      } 
      if(mailing) { setTipoCanal('C') } 
      if(mensajeria) { setTipoCanal('M') } 
    }
  }
  const mostrarContent=(op)=>{

    if(op===2){
        if([tipoCanalListas,name,objetivo].includes('')){
          if(tipoCanalListas===''){
            $('#errorTipoCanal').html(global.LABEL_EMPTY_ERROR)
          }else{
            $('#errorTipoCanal').html(' ')
          }
          if(name===''){
            // $('#errorNombre').html(global.LABEL_EMPTY_ERROR)
            $('#nombreSegmento').addClass('error')
          }else{
            // $('#errorNombre').html(' ')
            $('#nombreSegmento').removeClass('error')
          }
          if(objetivo===''){
            // $('#errorObjetivo').html(global.LABEL_EMPTY_ERROR)
            $('#objetivoSegmento').addClass('error')
          }else{
            // $('#error').html(' ')
            $('#objetivoSegmento').removeClass('error')
          }
          
          props.mostrarMensaje(400, global.CAMPOS_OBLIGATORIOS)
         return
        }
        // getDataListas()    
    }
    if(op===3){
      let listaSelct = JSON.parse(localStorage.getItem('list'))
      console.log('listaSelct',listaSelct);
      if(!listaSelct){
        $('#errorListas').html('No hay listas seleccionadas')
        return
      }
      if(listaSelct.length===0){
        $('#errorListas').html('No hay listas seleccionadas')
        return 
      }else{
        $('#errorListas').html('')
      }
    }
    console.log('op',op)
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
  const agregaLista=(event,id, permitido)=>{
   
    console.log('event',event)
    console.log('id',id)
    console.log(name);

    if(event){

      if (permitido === 'false') {
        $(`#inputTable${id}`).prop('checked', false)
        setIsOpen(true)
        setColorHeader('text-center')
        setBody('La base de datos seleccionada esta siendo procesada.')
        setModalButton('Aceptar')
        setHandle(handleCloseInfo)
        setHclose(handleCloseInfo)
        setCloses('X')
        $('.MuiDialogContentText-root').addClass('text-center')
      }else{
        let liT= JSON.parse(localStorage.getItem('list'))
        if(liT){
          liT.push(id)
        }else{
          liT=[]
          liT.push(id)
        }
        
        localStorage.setItem('list',JSON.stringify(liT))
        $('#errorListas').html('')
      }   
    }else{
      let liT=JSON.parse(localStorage.getItem('list'))
      console.log('liT',liT);
      liT= liT.filter((listaEv)=>
                  listaEv!==id
      )
      localStorage.setItem('list',JSON.stringify(liT))
      if(liT.length===0){ $('#errorListas').html('No hay listas seleccionadas') }
      
    }  
    
     console.log('localStorage',JSON.parse(localStorage.getItem('list')))
  }
  const agregaListaAll=(event)=>{
    let liTab=[]
   console.log('listasDataGeneral',listasDataGeneral);
    console.log('event',event)
    if(event){
      listasDataGeneral.map((li)=>{
        if(li.permitido==='true'){
          liTab.push(li.idGrupo)
        }
      })
      console.log('liTab',liTab);
       localStorage.setItem('list',JSON.stringify(liTab))
       $('#errorListas').html('')
    }else{
      localStorage.setItem('list',JSON.stringify(liTab))
      $('#errorListas').html('No hay listas seleccionadas')
    }
     console.log('listasSelec',listasSelec)
  }

  const agregaCriterio=()=>{ 
    

    setData([...data,data.length+1])

    console.log('data',data)
    
  }
  const crearSegmento = async ()=>{ 

    console.log('data',data)
    console.log('name',name)
    console.log('objetivo',objetivo)
    let gruposSend='';
    let listaSelct = JSON.parse(localStorage.getItem('list'))
    if(listaSelct.length>0){
      console.log('lista',listaSelct)
      listaSelct.map((liSend,i)=>{
        gruposSend===''?gruposSend=liSend:i+1===lista.length?gruposSend=`${gruposSend},${liSend}`:gruposSend=`${liSend},${gruposSend}`
      })
    }
    console.log('gruposSend',gruposSend);
    let failed=false;
    let camposFiltradosSend=[]
    data.forEach((d,i)=>{
      let condicion= i===0 ? 'AND' : $(`#condicion${i}`).val(); 
      let campo=$(`#campo${i}`).val(); 
      let criterio=$(`#criterio${i}`).val();
      let valorCriterio=$(`#detalle${i}`).val();
      console.log('valorCriterio', valorCriterio)
      if([campo,criterio,valorCriterio].includes('')){
        $(`#errorCriterioFiltrado${i}`).html(global.LABEL_EMPTY_ERROR_CRITERIO)
        failed=true
        return {
          invalid:true
        }
      }else{
        $(`#errorCriterioFiltrado${i}`).html('')
        if(!$(`#contentCriterio${i}`).hasClass('notsend')){
          camposFiltradosSend.push(
            {
              campo,
              criterio,
              valorCriterio,
              condicion
            }
          ) 
        }
      }
      console.log($(`#contentCriterio${i}`).hasClass('notsend'))
      // console.log(`condicion${i}`,condicion);
      // console.log(`campo${i}`,campo);
      // console.log(`criterio${i}`,criterio);
      // console.log(`detalle${i}`,valorCriterio);

     
    })
    console.log('camposFiltradosSend',camposFiltradosSend)
    if(!failed){
      setSpiner(true)
      const dataSend={
        nombreSegmento: name,
        objetivoSegmento: objetivo,
        canal: tipoCanalListas,
        idGrupo: gruposSend,
        camposFiltrados: camposFiltradosSend
      }

      const info = await gruposServices.SegmentoCreate({ dataSend })
      setSpiner(false)

      let objMessage = helpServices.getMessage(info.data)
      console.log('objMessage', objMessage)

      if(objMessage.code === 200){
        console.log('entroo 200')
        handleClose()
        props.handle(true); 
      }else{
        props.mostrarMensaje(objMessage.code, objMessage.message)
      }
     
      console.log('dataSend',dataSend)
      console.log('info',info)
      console.log('camposFiltradosSend',camposFiltradosSend)
      console.log('listasSelec',listasSelec)

    }
    
    
  }
  const setNombreError = (val)=>{
    if(val===''){
      $('#errorNombre').html(global.LABEL_EMPTY_ERROR)
      $('#nombreSegmento').addClass('error')
    }else{
      $('#errorNombre').html(' ')
      $('#nombreSegmento').removeClass('error')
    }
    
  }
  const setDescripcionError = (val)=>{
    if(val===''){
      $('#errorObjetivo').html(global.LABEL_EMPTY_ERROR)
      $('#objetivoSegmento').addClass('error')
    }else{
      $('#errorObjetivo').html(' ')
      $('#objetivoSegmento').removeClass('error')
    }
  }
  const showLogs2 = (e) => {
    console.log(e);
  }
  const deleteCriterio = (index) =>{
    console.log('index',index);
    $(`#contentCriterio${index}`).addClass('notsend')
  }
  const handleKeyPress = (event, valMax) => {
    console.log('event', event.target.value.length + 1);
    console.log('event.charCode', event.charCode);
    if(event.target.value.length + 1 > valMax) return event.preventDefault();
    let valid = helpServices.validaNombres(event)
    if(!valid) return event.preventDefault();
  }
  const selectCampo = (value, index) =>{
    console.log('value', value)
    if(value === 'fechaNacimiento'){
      document.getElementById(`detalle${index}`).type='date'
    }else{
      document.getElementById(`detalle${index}`).type='text'
    }
  }
  return (
      <>
      <ModalSpiner opt={spiner} />
      {isOpen && <NewModal isOpen={isOpen} header={header} body={body} color={coloHeader} button={modalButton} handle={handle} close={closes} hclose={hclose}/>}

         <Dialog fullWidth={true} maxWidth={'md'} open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b> 
            <div className='close-x' onClick={()=>{
              const funcion1 = props.handle(false);
              const funcion2 = handleClose();
              
            } }>x</div></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <div className='container-fluid-master'>
                <div className="d-flex carousel-nav">
                    <a onClick={ () => mostrarContent(1)} id='opcion1' href="#" className="col active">Configuración
                      <div className= {opcionContent === 1 ? 'success-panel' : 'd-none'} id='panel-sub2'>
                        <hr className='sub-color contact-sub'></hr>
                      </div>
                    </a>
                    <a onClick={ () => mostrarContent(2)} id='opcion2' href="#" className="col ">Select. listas a segmentar
                      <div className= {opcionContent === 2 ? 'success-panel' : 'd-none'} id='panel-sub2'>
                        <hr className='sub-color contact-sub'></hr>
                      </div>
                    </a>
                    <a onClick={ () => mostrarContent(3)} id='opcion3' href="#" className="col ">Criterios de filtrado
                      <div className= {opcionContent === 3 ? 'success-panel' : 'd-none'} id='panel-sub2'>
                        <hr className='sub-color contact-sub'></hr>
                      </div>
                    </a>
                </div>
                <div className=" owl-1">

                    <div id='content1' className="media-29101 w-100 d-block">
                        <div className='container-fluid'>
                            <span className="text-input name-input every-label" id='errorTipoCanal'></span>
                            <div className="form-group row align-items-center">
                              <span className="form-label col-md-2">Tipo canal <strong className='obl'>*</strong></span>
                              <div className='mr-3 d-flex align-items-center'>
                                <input id='inputMailing' name='tipoCanal' onClick={(e)=>{ setTipoCanales() }} type="radio" className="ml-1 w-check check-color-list mr-2" />
                                <label className="form-label mb-0">Mailing</label>
                              </div>
                              <div className='mr-3 d-flex align-items-center'>
                                <input id='inputMensajeria' name='tipoCanal' onClick={(e)=>{ setTipoCanales() }} type="radio" className="ml-1 w-check check-color-list mr-2" />
                                <label className="form-label mb-0">Mensajería Instantánea</label>
                              </div>
                                
                            </div>
                            <div className="form-group">
                                <span className="text-input name-input every-label" id='errorNombre'></span>
                                <label className="form-label"><b>Nombre del segmento <strong className='obl'>*</strong></b> </label>
                                <input id='nombreSegmento' 
                                       onKeyUp={(e)=>{ setNombreError(e.target.value) }} 
                                       onChange={(e)=>setName(e.target.value)} 
                                       onKeyPress={(event) => { handleKeyPress(event, 45) }}
                                       placeholder='Escriba nombre del segmento' 
                                       type="text" minLength="20" maxLength="400" 
                                       className="form-control item" 
                                       pattern='Ingrese Nombre' />
                            </div>        
                            <div className="form-group">
                                <span className="text-input name-input every-label" id='errorObjetivo'></span>
                                <label className="form-label"><b>Objetivo del segmento <strong className='obl'>*</strong></b></label>
                                <textarea id='objetivoSegmento' 
                                          onKeyUp={(e)=>{ setDescripcionError(e.target.value) }} 
                                          onChange={(e)=>setDescripcion(e.target.value)} 
                                          rows='5' 
                                          placeholder='Escriba un texto máximo de 200 caracteres' 
                                          type="text" minLength="0" maxLength="40000" 
                                          className="form-control item" />
                            </div>
                            
                            <div className="text-center">
                                <div className='btn-sgt-step3'><button onClick={ () => mostrarContent(2)} className='btnDelete' >Siguiente</button></div>
                            </div>
                        </div>
                    </div>

                    <div id='content2' className="media-29101 w-100 d-none">

                        <div className='container-fluid table-create-segmento'>
                          
                          <TableCheck setPageSelect={setPageSelect} listasDataGeneral={listasDataGeneral} lista={lista} mostrarContent={mostrarContent} listas={listas} agregaListaAll={agregaListaAll} agregaLista={agregaLista} />
                        </div>
                    </div>
                    <div id='content3' className="media-29101 w-100 d-none">
                        <div className='container-fluid'>
                            <span className='font-weight-bold'>Selecciona criterio de filtrado</span>
                            <div className='content-criterio d-grid'>
                                {data.map((content,index)=>{
                                   return(
                                    <>
                                        
                                        <div id={`contentCriterio${index}`} className=' row content-data'>
                                          <div className="pl-0 col-md-12 sidebar-box mb-2">
                                            <span className="text-input name-input every-label" id={`errorCriterioFiltrado${index}`}></span>
                                          </div>
                                           {(index>0)?<>
                                                          <div className="pl-0 col-md-4 sidebar-box"></div>
                                                          <div className="pl-0 col-md-4 sidebar-box">
                                                              <select id={`condicion${index}`} className="form-control item styled-select mb-2">
                                                                    <option value="" >Seleccionar condición</option>
                                                                    <option value="AND" >AND</option>
                                                                    <option value="OR" >OR</option>
                                                                </select>
                                                          </div>
                                                          <div className="pl-0 pr-0 col-md-4 sidebar-box delete-criterio"><i onClick={()=> deleteCriterio(index)} className='ml-2 far fa-trash-alt notify-color'></i></div>
                                                        </> : ''} 
                                            <div className="pl-0 col-md-4 sidebar-box">
                                            
                                                <select onChange={({ target })=>selectCampo(target.value,index)} id={`campo${index}`} className="form-control item styled-select" >
                                                    <option value="" >Seleccionar Campo</option>
                                                    <option value="correo" >Correo</option>
                                                    <option value="primerNombre" >Primer nombre</option>
                                                    <option value="primerApellido" >Primer apellido</option>
                                                    <option value="genero" >Género</option>
                                                    <option value="telefonoMovil" >Teléfono móvil</option>
                                                    <option value="fechaNacimiento" >Fecha nacimiento</option>
                                                    <option value="pais" >País</option>
                                                </select>
                                            </div> 
                                            <div className="pl-0 col-md-4 sidebar-box">
                                                <select id={`criterio${index}`} className="form-control item" >
                                                    <option value="" >Seleccionar Criterio</option>
                                                    <option value={1} >Mayor que</option>
                                                    <option value={2} >Menor que</option>
                                                    <option value={3} >Igual a</option>
                                                    <option value={4} >Mayor igual</option>
                                                    <option value={5} >Menor igual</option>
                                                    <option value={6} >Empieza con</option>
                                                    <option value={7}>Termina con</option>
                                                    <option value={8}>Contiene palabra</option>
                                                </select>
                                            </div> 
                                            <div className="pl-0 col-md-4">
                                                <input id={`detalle${index}`} type="text" minLength="20" maxLength="400" className="form-control item" />
                                            </div> 
                                        </div>
                                    </>
                                   ) 
                                })}
                                        <div onClick={()=>{ agregaCriterio() }} className='agrega-criterio'>
                                            <img className='mr-1' src={imgPlus} />
                                            <span>Agrega criterio de filtrado</span>
                                        </div>
                            </div>
                            <div className="text-center">
                                <div className='btn-sgt-step3'><button onClick={ () => { crearSegmento() }} className='btnDelete' >Generar Segmento</button></div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
           
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            {/* <Button id="btn-close" onClick={props.handle} autoFocus>
              {props.button}
            </Button> */}
            </DialogActions>
        </Dialog>
      </>
  )
}
