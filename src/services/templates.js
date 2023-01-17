/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import validationTemplate from '../validation/template'
import img from '../assets/img/temp4.PNG'
import $ from 'jquery'

// functions for template history
const getplantillas = async credenciales => {
  let response
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    if (credenciales === null) {
      credenciales = 'fecha'
    }
    const data = await fetch(global.GET_PLANTILLAS_USUARIO + userId + '/1/?opcion=' + credenciales + '&nombrePlantilla=', requestOptions)
    const resp = await data.json()
    if (resp.code === 200) {
      if (resp.data.Fila.length > 0) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
      } else {
        global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_WITHOUTINFO
        global.CODEERROR = resp.code
      }
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
      global.CODEERROR = resp.code
    }
    response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const getplantillasTipo = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    if (credenciales.cboOrder === null) {
      credenciales.cboOrder = 'fecha'
    }
    const data = await fetch(global.GET_PLANTILLAS_TIPO + userId + '/1/' + credenciales.event + '/?opcion=' + credenciales.cboOrder + '&nombrePlantilla=', requestOptions)
    const resp = await data.json()
    if (resp.code === 200) {
      if (resp.data.Fila.length > 0) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
      } else {
        global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_WITHOUTINFO
        global.CODEERROR = resp.code
      }
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: resp.code
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const getplantillasTipoPublic = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    if (credenciales.cboOrder === null) {
      credenciales.cboOrder = 'fecha'
    }
    const data = await fetch(global.GET_PLANTILLAS_TIPO + userId + '/1/' + credenciales.event + '/?opcion=' + 'publica' + '&nombrePlantilla=', requestOptions)
    const resp = await data.json()
    if (resp.code === 200) {
      if (resp.data.Fila.length > 0) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
      } else {
        global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_WITHOUTINFO
        global.CODEERROR = resp.code
      }
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: resp.code
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const getplantillasNombre = async credenciales => {
  let response
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    let data = ''
    if (credenciales.typeSearchModal === 'A') {
      data = await fetch(global.GET_PLANTILLAS_USUARIO + userId + '/1/?opcion=' + credenciales.cboOrder + '&nombrePlantilla=' + credenciales.search, requestOptions)
    } else {
      data = await fetch(global.GET_PLANTILLAS_TIPO + userId + '/1/' + credenciales.typeSearchModal + '/?opcion=' + credenciales.cboOrder + '&nombrePlantilla=' + credenciales.search, requestOptions)
    }
    const resp = await data.json()
    if (resp.code === 200) {
      if (resp.data.Fila.length > 0) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
      } else {
        global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_WITHOUTINFO
        global.CODEERROR = resp.code
      }
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
      global.CODEERROR = 200
    }
    response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: resp.code
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FALSE_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const loadDetail = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const dataDet = await fetch(global.GET_DET_PLANTILLAS + '/' + userId + '/1/' + info, requestOptions)
    const respDet = await dataDet.json()
    if (respDet.code === 200) {
      if (respDet.data.row.length > 0) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = respDet.code
      } else {
        global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_VIEW_NOT_INFORMATION
        global.CODEERROR = respDet.code
      }
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_VIEW_ERROR
      global.CODEERROR = respDet.code
    }
    const response = {
      data: respDet,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: respDet.code
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_VIEW_ERROR
    global.ERROR_LABEL = global.CODEERRORSET
  }
}

const deleteTemplate = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    const idTemplate = credenciales
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'DELETE',
      headers
    }
    const data = await fetch(global.DELETE_TEMPLATES_API + '/' + idTemplate, requestOptions)
    const resp = await data.json()
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = resp.code
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_DELETE_TEMPLATE_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_DELETE_TEMPLATE_ERROR
    global.ERROR_LABEL = 500
  }
}
const deleteImage = async idImagen => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'DELETE',
      headers
    }
    const data = await fetch(global.DELETE_IMAGES + '?idImagen=' + idImagen, requestOptions)
    const resp = await data.json()
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = resp.code
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_DELETE_TEMPLATE_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      data: resp,
      code: resp.code,
      message: global.LABEL_INPUT_ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_DELETE_TEMPLATE_ERROR
    global.ERROR_LABEL = 500
  }
}

const duplyTemplate = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = {
      idPlantilla: info
    }
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    const dataResp = await fetch(global.DUPLY_TEMPLATES_API + '/' + info, requestOptions)
    const resp = await dataResp.json()
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = resp.code
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_DUPLY_TEMPLATE_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR,
      link: global.LINK,
      field: resp
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_DELETE_TEMPLATE_ERROR
    global.ERROR_LABEL = 500
  }
}

// function templates end

// functions templates mail
const getImages = async img => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const dataResp = await fetch(global.IMAGES_TEMPLATES_API, requestOptions)
    const resp = await dataResp.json()
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_MAIL_IMG
      global.CODEERROR = resp.code
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_MAIL_IMG_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_DELETE_TEMPLATE_ERROR
    global.ERROR_LABEL = 500
  }
}

const saveHeadTemplates = async info => {
  try {
    const idPlantilla = localStorage.getItem('idPlantilla')
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = {
      nombre: info.nameTemplate,
      asunto: info.asunto,
      descripcion: info.descTemplate,
      tipo: 'H',
      contenidoJson: 'hd' // info.design hablar con scarlet error
    }
    window.localStorage.setItem('editTipo', JSON.stringify('H'))
    if (idPlantilla) {
      const validate = validationTemplate.validate(info)
      if (!validate.error) {
        global.CODEERROR = global.CODEERRORSET
        global.ERROR = 1
        global.ERROR_LABEL = 'warning'
      } else {
        const requestOptions = {
          method: 'Put',
          headers,
          body: JSON.stringify(data)
        }
        const dataResp = await fetch(global.EDIT_TEMPLATES_API + '/' + idPlantilla, requestOptions)
        const resp = await dataResp.json()
        if (resp.code === 200) {
          global.LABEL_INPUT_ERROR = global.PROCESO_OK
          global.CODEERROR = resp.code
          const x = await saveDetailTemplates(info)
          if (x !== 200) {
            global.REDIRECT_URL = ''
          }
          global.CODEERROR = x
          global.ERROR = 0
        } else {
          global.LABEL_INPUT_ERROR = global.CREATE_TEMPLATE_FAIL
          global.CODEERROR = resp.code
          global.ERROR = 1
        }
      }
      const response = {
        body: global.BODY,
        url: global.REDIRECT_URL,
        error: global.ERROR,
        errorValidation: global.ERROR,
        code: global.CODEERROR,
        link: global.LINK,
        field: '',
        validate
      }
      return response
    } else {
      const validate = validationTemplate.validate(info)
      if (!validate.error) {
        global.CODEERROR = global.CODEERRORSET
        global.ERROR = 1
        global.ERROR_LABEL = 'warning'
      } else {
        const requestOptions = {
          method: 'POST',
          headers,
          body: JSON.stringify(data)
        }
        const dataResp = await fetch(global.CREATE_TEMPLATES_API, requestOptions)
        const resp = await dataResp.json()
        if (resp.code === 200) {
          global.LABEL_INPUT_ERROR = global.PROCESO_OK
          global.CODEERROR = resp.code
          window.localStorage.setItem(
            'idPlantilla', resp.data.idPlantilla
          )
          const x = await saveDetailTemplates(info)
          if (x !== 200) {
            global.LINK = ''
          }
          global.CODEERROR = x
          global.ERROR = 0
        } else {
          global.CODEERROR = resp.code
          global.ERROR = 1
        }
      }
      const response = {
        header: global.HEADER,
        body: global.BODY,
        url: global.REDIRECT_URL,
        error: global.CODEERROR,
        code: global.CODEERROR,
        errorValidation: global.ERROR,
        link: global.LINK,
        validate,
        field: validate.field
      }
      return response
    }
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.CREATE_TEMPLATE_FAIL
    global.ERROR_LABEL = 500
  }
}

const loadTemplatesEdit = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    const type = JSON.parse(window.localStorage.getItem('editTipo'))
    let idPlanitlla = 0
    if (type === 'H') {
      idPlanitlla = JSON.parse(window.localStorage.getItem('idPlantilla'))
    }
    if (type === 'T') {
      idPlanitlla = JSON.parse(window.localStorage.getItem('idPlantillaSms'))
    }
    if (type === 'E') {
      idPlanitlla = JSON.parse(window.localStorage.getItem('idPlantillaWhat'))
    }
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const data = await fetch(global.GET_PLANTILLAS + '/' + idPlanitlla + '/1/' + userId, requestOptions)
    const resp = await data.json()
    let dataDet
    if (localStorage.getItem('Publica')) {
      // localStorage.removeItem('Publica')
      dataDet = await fetch(global.GET_DET_PLANTILLAS + '/' + resp.data.idUsuario + '/1/' + idPlanitlla, requestOptions)
    } else {
      dataDet = await fetch(global.GET_DET_PLANTILLAS + '/' + userId + '/1/' + idPlanitlla, requestOptions)
    }
    const respDet = await dataDet.json()
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = resp.code
      global.ERROR = 0
      if (respDet.code === 200) {
        if (respDet.data.row.length > 0) {
          if (type === 'H') {
            window.localStorage.setItem('idDetailPlantilla', respDet.data.row[0].idDetallePlantilla)
          }
          if (type === 'T') {
            window.localStorage.setItem('DetallePlantillaCreadaSms', respDet.data.row[0].idDetallePlantilla)
          }
          if (type === 'E') {
            window.localStorage.setItem('DetallePlantillaCreadaWath', respDet.data.row[0].idDetallePlantilla)
          }
        } else {
          global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
          global.CODEERROR = resp.code
          global.ERROR = 1
        }
      } else {
        global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
        global.CODEERROR = resp.code
        global.ERROR = 1
      }
    } else {
      global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
      global.CODEERROR = resp.code
      global.ERROR = 1
    }
    const response = {
      data: resp,
      dataDet: respDet,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

function quitarAcentos (cadena) {
  const acentos = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' }
  return cadena.split('').map(letra => acentos[letra] || letra).join('').toString()
}

const saveDetailJustTemplates = async info => {
  try {
    const idDetailPlantilla = localStorage.getItem('idDetailPlantilla')
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    let contHtml = info.html.replace('style="min-height: 100vh;"', ' ')
    contHtml = contHtml.replace('<meta charset="utf-8">', '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />')
    const data = {
      asunto: info.asunto,
      cabecera: 'prueba',
      pie: 'prueba',
      contenido: contHtml,
      nombreRemitente: info.nameRem,
      mailRemitente: info.descRem,
      idPlantilla: localStorage.getItem('idPlantilla'),
      idFirma: 1,
      contenidoJson: JSON.stringify(info.design)
    }
    const validate = validationTemplate.validate(info)
    if (!validate.error) {
      global.CODEERROR = global.CODEERRORSET
      global.ERROR = 1
    } else {
      const requestOptions = {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
      }
      const urlDet = '/' + loggedUser.idUsuario + '/1/' + idDetailPlantilla + '/' + localStorage.getItem('idPlantilla')
      const dataResp = await fetch(global.ACTUALIZA_DETALLE_TEMPLATES_API + urlDet, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
        global.ERROR = 0
      } else {
        global.LABEL_INPUT_ERROR = global.CREATE_TEMPLATE_FAIL
        global.CODEERROR = resp.code
        global.ERROR = 1
      }
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR,
      errorValidation: global.ERROR,
      link: global.LINK,
      validate,
      field: ''
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const saveDetailTemplates = async info => {
  try {
    const idDetailPlantilla = localStorage.getItem('idDetailPlantilla')
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = {
      asunto: info.asunto,
      cabecera: 'prueba',
      pie: 'prueba',
      contenido: info.html.replace('style="min-height: 100vh;"', ' '),
      nombreRemitente: info.nameRem,
      mailRemitente: info.descRem,
      idPlantilla: localStorage.getItem('idPlantilla'),
      idFirma: 1,
      contenidoJson: JSON.stringify(info.design)
    }
    let response = 0
    if (idDetailPlantilla) {
      const requestOptions = {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
      }
      const urlDet = '/' + loggedUser.idUsuario + '/1/' + idDetailPlantilla + '/' + localStorage.getItem('idPlantilla')
      const dataResp = await fetch(global.ACTUALIZA_DETALLE_TEMPLATES_API + urlDet, requestOptions)
      const resp = await dataResp.json()
      response = resp.code
    } else {
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.CREATE_DETALLE_TEMPLATES_API, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        window.localStorage.setItem(
          'idDetailPlantilla', resp.data.DetallePlantillaCreada
        )
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        response = resp.code
      } else {
        if (resp.code === 400) {
          global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
        } else {
          global.LABEL_INPUT_ERROR = global.ERROR_SERVICE_OFF
        }
        response = resp.code
      }
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const saveImages = async img => {
  try {
    if (img.fileName) {
      const headers = {}
      const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
      headers.Authorization = 'Bearer ' + loggedUser.token
      headers.Canal = global.CANAL
      const dataForm = new FormData()
      dataForm.append('archivoAdjunto', img.img)
      dataForm.append('tipoAdjunto', 'I')
      const requestOptions = {
        method: 'POST',
        headers,
        body: dataForm
      }
      const dataResp = await fetch(global.SAVE_IMAGES_TEMPLATES_API, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
      } else {
        global.LABEL_INPUT_ERROR = global.TEMPLATE_SAVE_FILES_ERRORS
        global.CODEERROR = resp.code
      }
      const response = {
        header: global.HEADER,
        body: global.BODY,
        url: global.REDIRECT_URL,
        error: global.CODEERROR,
        errorValidation: 0
      }
      return response
    } else {
      global.LABEL_INPUT_ERROR = global.SAVE_IMG_INFO
      global.CODEERROR = global.CODEERRORSET
      const response = {
        header: global.HEADER,
        body: global.BODY,
        url: global.REDIRECT_URL,
        error: global.CODEERRORSET,
        errorValidation: 1
      }
      return response
    }
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
    global.CODEERROR = global.CODEERRORSET
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERRORSET,
      errorValidation: 1
    }
    return response
  }
}

const getFiles = async () => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const dataResp = await fetch(global.SEARCH_FILES_API + '?idPlantilla=' + localStorage.getItem('idPlantilla'), requestOptions)
    const resp = await dataResp.json()
    if (resp.code === 200) {
      if (resp.data.row === 'No hay Adjuntos para la plantilla ' + localStorage.getItem('idPlantilla')) {
        global.LABEL_INPUT_ERROR = resp.data.row
      } else {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
      }
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.TEMPLATE_LOAD_ERROR
    global.CODEERROR = global.CODEERRORSET
  }
}

const saveFile = async file => {
  if (localStorage.getItem('idPlantilla')) {
    const headers = {}
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const dataForm = new FormData()
    dataForm.append('archivoAdjunto', file.file)
    dataForm.append('tipoAdjunto', 'A')
    const requestOptions = {
      method: 'POST',
      headers,
      body: dataForm
    }
    const dataResp = await fetch(global.SAVE_IMAGES_TEMPLATES_API + '?idPlantilla=' + localStorage.getItem('idPlantilla'), requestOptions)
    const resp = await dataResp.json()
    if (resp.success) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = resp.code
    } else {
      global.LABEL_INPUT_ERROR = global.TEMPLATE_SAVE_FILES_ERRORS
      global.CODEERROR = resp.code
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } else {
    global.LABEL_INPUT_ERROR = global.TEMPLATE_SAVE_FILES_ERRORS
    global.ERROR_LABEL = global.CODEERRORSET
  }
}

const deleteFiles = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    const idFile = credenciales.idFile
    headers.Authorization = 'Bearer ' + loggedUser.token
    const userId = loggedUser.idUsuario
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'DELETE',
      headers
    }
    const api = global.DELETE_FILES_API + '?intAdjuntoPlantilla=' + idFile
    const data = await fetch(api, requestOptions)
    const resp = await data.json()
    if (resp.success) {
      global.LABEL_INPUT_ERROR = 'Plantillas eliminada'
      global.ERROR_LABEL = 'success'
    } else {
      global.LABEL_INPUT_ERROR = 'No se pudo eliminar la plantilla'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: resp.success
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consultar las plantillas, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}

// funcitons templates mail end

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

// funcitons sms templates
const saveHeadTemplatesSms = async info => {
  const idPlantillaSms = localStorage.getItem('idPlantillaSms')
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const data = {
    nombre: info.nameTemplate,
    descripcion: info.descTemplate,
    tipo: 'T',
    contenido: info.text
  }
  window.localStorage.setItem('editTipo', JSON.stringify('T'))
  if (idPlantillaSms) {
    const validate = validationTemplate.validateSms(info)
    if (!validate.error) {
      global.CODEERROR = global.CODEERRORSET
      global.ERROR = 1
    } else {
      const requestOptions = {
        method: 'Put',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.EDIT_TEMPLATES_API + '/' + idPlantillaSms, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
        const x = await saveDetailTemplatesSms(info)
        global.ERROR = 0
        if (x.code !== 200) {
          global.REDIRECT_URL = ''
        }
        global.CODEERROR = x.code
      } else {
        global.LABEL_INPUT_ERROR = global.CREATE_TEMPLATE_FAIL
        global.CODEERROR = resp.code
        global.ERROR = 1
      }
    }
    const response = {
      body: global.BODY,
      url: global.REDIRECT_URL,
      code: global.CODEERROR,
      error: global.ERROR,
      link: global.LINK,
      field: '',
      errorValidation: global.ERROR,
      validate
    }
    return response
  } else {
    const validate = validationTemplate.validateSms(info)
    if (!validate.error) {
      global.CODEERROR = global.CODEERRORSET
      global.ERROR = 1
    } else {
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.CREATE_TEMPLATES_API, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
        window.localStorage.setItem(
          'idPlantillaSms', resp.data.idPlantilla
        )
        global.ERROR = 0
        const x = await saveDetailTemplatesSms(info)
        if (x.code !== 200) {
          global.LINK = ''
         }
        global.CODEERROR = x.code
      } else {
        global.CODEERROR = resp.code
        global.ERROR = 1
      }
    }
    const response = {
      body: global.BODY,
      url: global.REDIRECT_URL,
      code: global.CODEERROR,
      error: global.CODEERROR,
      link: global.LINK,
      errorValidation: global.ERROR,
      field: validate.field,
      validate
    }
    return response
  }
}

const saveDetailTemplatesSms = async info => {
  const idDetailPlantilla = localStorage.getItem('DetallePlantillaCreadaSms')
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const data = {
    asunto: 'prueba',
    cabecera: 'prueba',
    pie: 'prueba',
    contenido: info.text.replace('"', ''),
    nombreRemitente: info.descTemplate,
    mailRemitente: info.descTemplate,
    idPlantilla: localStorage.getItem('idPlantillaSms'),
    idFirma: 1,
    contenidoJson: info.design
  }
  if (idDetailPlantilla) {
    const requestOptions = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }
    const urlDet = '/' + loggedUser.idUsuario + '/1/' + idDetailPlantilla + '/' + localStorage.getItem('idPlantillaSms')
    const dataResp = await fetch(global.ACTUALIZA_DETALLE_TEMPLATES_API + urlDet, requestOptions)
    const resp = await dataResp.json()
    if (resp.code === 200) {
      global.BODY = global.PROCESO_OK
      global.REDIRECT_URL = global.ROUTE_USER_CREATED
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.LINK = global.LINK_EMAIL
      global.ERROR_LABEL = 'success'
      global.ERROR = 0
      global.CODEERROR = resp.code
    } else if (resp.code === 400) {
      global.BODY = global.CAMPOS_OBLIGATORIOS
      global.REDIRECT_URL = ''
      global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
      global.ERROR = 2
      global.ERROR_LABEL = 'error'
      global.LINK = ''
      global.CODEERROR = resp.code
    } else {
      global.BODY = global.ERROR_SERVICE_OFF
      global.LABEL_INPUT_ERROR = global.ERROR_SERVICE_OFF
      global.REDIRECT_URL = ''
      global.ERROR = 2
      global.ERROR_LABEL = 'error'
      global.LINK = ''
      global.CODEERROR = resp.code
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: 4,
      code: global.CODEERROR,
      link: global.LINK,
      field: 0
    }
    return response
  } else {
    const validate = validationTemplate.validateSms(info)
    if (!validate.error) {
      global.ERROR = 1
      global.CODEERROR = '400'
    } else {
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.CREATE_DETALLE_TEMPLATES_API, requestOptions)
      const resp = await dataResp.json()
      if (resp.success) {
        global.BODY = global.PROCESO_OK
        global.REDIRECT_URL = global.ROUTE_USER_CREATED
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.LINK = global.LINK_EMAIL
        global.ERROR = 0
        global.ERROR_LABEL = 'success'
        global.CODEERROR = resp.code
        window.localStorage.setItem(
          'DetallePlantillaCreadaSms', JSON.stringify(resp.data.DetallePlantillaCreada)
        )
      } else {
        global.BODY = resp.message
        global.REDIRECT_URL = ''
        global.HEADER = 'Advertencia'
        global.ERROR = 2
        global.LABEL_INPUT_ERROR = 'Ocurrio un error'
        global.ERROR_LABEL = 'error'
        global.LINK = ''
        global.CODEERROR = resp.code
      }
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      code: global.CODEERROR,
      url: global.REDIRECT_URL,
      error: global.CODEERROR,
      errorValidation: global.ERROR,
      link: global.LINK,
      field: validate.field
    }
    return response
  }
}

// funcitons whatsapp templates
const saveHeadTemplatesWhat = async info => {
  const idPlantillaWath = localStorage.getItem('idPlantillaWhat')
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const data = {
    nombre: info.nameTemplate,
    descripcion: info.descTemplate,
    tipo: 'E',
    contenidoJson: 'test'
  }
  window.localStorage.setItem('editTipo', JSON.stringify('E'))
  if (idPlantillaWath) {
    const validate = validationTemplate.validateWhat(info)
    if (!validate.error) {
      global.ERROR = 1
      global.CODEERROR = '400'
    } else {
      const requestOptions = {
        method: 'Put',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.EDIT_TEMPLATES_API + '/' + idPlantillaWath, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
        global.ERROR = 0
        const x = await saveDetailTemplatesWhat(info)
        if (x.code !== 200) {
          global.REDIRECT_URL = ''
        }
        global.CODEERROR = x.code
      } else {
        global.LABEL_INPUT_ERROR = global.CREATE_TEMPLATE_FAIL
        global.CODEERROR = resp.code
        global.ERROR = 1
      }
    }
    const response = {
      body: global.BODY,
      url: global.REDIRECT_URL,
      code: global.CODEERROR,
      errorValidation: global.ERROR,
      link: global.LINK,
      validate,
      field: ''
    }
    return response
  } else {
    const validate = validationTemplate.validateWhat(info)
    if (!validate.error) {
      global.CODEERROR = global.CODEERRORSET
      global.ERROR = 1
      global.CODEERROR = '400'
    } else {
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.CREATE_TEMPLATES_API, requestOptions)
      const resp = await dataResp.json()
      if (resp.code === 200) {
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.CODEERROR = resp.code
        window.localStorage.setItem(
          'idPlantillaWhat', resp.data.idPlantilla
        )
       const x = await saveDetailTemplatesWhat(info)
       if (x.code !== 200) {
        global.LINK = ''
       }
       global.CODEERROR = x.code
        global.ERROR = 0
      } else {
        global.CODEERROR = resp.code
        global.ERROR = 1
      }
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      link: global.LINK,
      code: global.CODEERROR,
      field: validate.field,
      validate,
      errorValidation: global.ERROR
    }
    return response
  }
}

const saveDetailTemplatesWhat = async info => {
  const idDetailPlantilla = localStorage.getItem('DetallePlantillaCreadaWath')
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const data = {
    asunto: 'prueba',
    cabecera: 'prueba',
    pie: 'prueba',
    contenido: info.text.replace('"', ''),
    nombreRemitente: '',
    mailRemitente: '',
    idPlantilla: localStorage.getItem('idPlantillaWhat'),
    idFirma: 1,
    contenidoJson: info.design
  }
  if (idDetailPlantilla) {
    const requestOptions = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }
    const urlDet = '/' + loggedUser.idUsuario + '/1/' + idDetailPlantilla + '/' + localStorage.getItem('idPlantillaWhat')
    const dataResp = await fetch(global.ACTUALIZA_DETALLE_TEMPLATES_API + urlDet, requestOptions)
    const resp = await dataResp.json()
    if (resp.code === 200) {
      global.BODY = global.PROCESO_OK
      global.REDIRECT_URL = global.ROUTE_USER_CREATED
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.LINK = global.LINK_EMAIL
      global.ERROR_LABEL = 'success'
      global.ERROR = 0
      global.CODEERROR = resp.code
    } else if (resp.code === 400) {
      global.BODY = global.CAMPOS_OBLIGATORIOS
      global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
      global.REDIRECT_URL = ''
      global.ERROR = 2
      global.ERROR_LABEL = 'error'
      global.LINK = ''
      global.CODEERROR = resp.code
    } else {
      global.BODY = global.ERROR_SERVICE_OFF
      global.LABEL_INPUT_ERROR = global.ERROR_SERVICE_OFF
      global.REDIRECT_URL = ''
      global.ERROR = 2
      global.ERROR_LABEL = 'error'
      global.LINK = ''
      global.CODEERROR = resp.code
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      code: global.CODEERROR,
      link: global.LINK,
      field: 0
    }
    return response
  } else {
    const validate = validationTemplate.validateWhat(info)
    if (!validate.error) {
      global.ERROR = 1
      global.ERROR_LABEL = 'error'
      global.CODEERROR = '400'
    } else {
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      }
      const dataResp = await fetch(global.CREATE_DETALLE_TEMPLATES_API, requestOptions)
      const resp = await dataResp.json()
      if (resp.success) {
        global.BODY = global.MESSAGES_CREATE_USER
        global.REDIRECT_URL = global.ROUTE_USER_CREATED
        global.LABEL_INPUT_ERROR = global.PROCESO_OK
        global.LINK = global.LINK_EMAIL
        global.ERROR = 0
        global.ERROR_LABEL = 'success'
        global.CODEERROR = resp.code
        window.localStorage.setItem(
          'DetallePlantillaCreadaWath', resp.data.DetallePlantillaCreada
        )
      } else {
        global.BODY = resp.message
        global.REDIRECT_URL = ''
        global.HEADER = 'Advertencia'
        global.ERROR = 2
        global.ERROR_LABEL = 'error'
        global.LINK = ''
        global.CODEERROR = resp.code
      }
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      code: global.CODEERROR,
      link: global.LINK,
      field: validate.field
    }
    return response
  }
}

const getTemplatesSeach = async credenciales => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  const userId = loggedUser.idUsuario
  const name = credenciales.search
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  const resp = await fetch(global.SEARCH_TEMPLATES_API + userId + '/1/' + name, requestOptions)
  const items = await resp.json()
  if (items.status === 404) {
    global.ERROR = 2
  }
  const response = {
    data: items,
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: global.ERROR
  }
  return response
}
const putFavoritos = async inf => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'PUT',
      headers
    }
    const dataResp = await fetch(global.PUT_PLANTILLAS_FAVORITOS + '1/' + loggedUser.idUsuario + '/' + inf.idPlantilla, requestOptions)
    const resp = await dataResp.json()
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = ''
      global.CODEERROR = resp.code
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FAVORITOS_ERROR
      global.CODEERROR = resp.code
    }
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_TEMPLATE_FAVORITOS_ERROR
    global.ERROR_LABEL = 500
  }
}
export default {
  getplantillas,
  getplantillasTipo,
  saveHeadTemplates,
  getImages,
  saveDetailTemplates,
  saveHeadTemplatesSms,
  saveDetailTemplatesSms,
  saveHeadTemplatesWhat,
  saveDetailTemplatesWhat,
  loadTemplatesEdit,
  deleteTemplate,
  saveImages,
  saveFile,
  loadDetail,
  duplyTemplate,
  getTemplatesSeach,
  getplantillasNombre,
  getFiles,
  deleteFiles,
  saveDetailJustTemplates,
  deleteImage,
  putFavoritos,
  getplantillasTipoPublic
}
