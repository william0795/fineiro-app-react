/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import axios from 'axios'

const getReportGeneral = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const data = await fetch(global.SERVICEREPORTGENERAL + loggedUser.idUsuario + '?fechaDesde=' + info.fechaInicio + ' 00:00:00' + '&fechaHasta=' + info.fechaFin + ' 23:59:59', requestOptions)
    const items = await data.json()
    if (items.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = items.code
    } else {
      global.LABEL_INPUT_ERROR = items.message
      global.CODEERROR = items.code
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el reporte general, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getReportCamp = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const data = await fetch(global.SERVICEREPORTCAMP + loggedUser.idUsuario, requestOptions)
    const items = await data.json()
    if (items.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = items.code
    } else {
      global.LABEL_INPUT_ERROR = items.message
      global.CODEERROR = items.code
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el historial campaña, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getReporteDownloadPers = async (params) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    // const urlPrueba = 'https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4'
    const urlSend = `${global.GET_REPORTE_DOWNLOAD}?idCampanaReporte=${params.idCampanaReporte}&userName=${params.userName}`
    let dataSend
   await axios({
      url: urlSend,
      method: 'GET',
      headers,
      responseType: 'blob' // importante
    }).then((response) => {
      console.log('response', response.data)
      console.log('response', response)
      dataSend = response.data
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = 200
   }).catch((error) => {
      console.log(error)
      global.LABEL_INPUT_ERROR = error.message
      global.CODEERROR = error.code
    })
    const responseSend = {
      data: dataSend,
      code: global.CODEERROR
    }
    return responseSend
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el historial campaña, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}

const getPDFCampaingn = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL

    const urlPrueba = global.SERVICEPDFGENERAL + '?user=' + loggedUser.idUsuario + '&startDate=' + info.fechaInicio + ' 00:00:00' + '&endDate=' + info.fechaFin + ' 23:59:59' + '&userName=' + info.user

    let dataSend
   await axios({
      url: urlPrueba,
      method: 'GET',
      headers,
      responseType: 'blob' // importante
    }).then((response) => {
      console.log('response', response.data)
      console.log('response', response)
      dataSend = response.data
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = 200
   }).catch(error => {
      console.log(error)
      global.LABEL_INPUT_ERROR = error.message
      global.CODEERROR = error.code
    })

    const responseSend = {
      data: dataSend,
      code: global.CODEERROR
    }
    return responseSend
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el historial campaña, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getListaGris = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const data = await fetch(`${global.LISTA_GRIS}1/${loggedUser.idUsuario}?fechaDesde=${info.fechaInicio} 00:00:00&fechaHasta=${info.fechaFin} 23:59:59&page=${info.obSe.pagina}&size=${info.obSe.size}&mail=${info.correo}`, requestOptions)
    const items = await data.json()
    if (items.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = items.code
    } else {
      global.LABEL_INPUT_ERROR = items.message
      global.CODEERROR = items.code
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el reporte general, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getListaNegra = async info => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const data = await fetch(global.LISTA_NEGRA + '1?fechaDesde=' + info.fechaInicio + '&fechaHasta=' + info.fechaFin + '&page=' + info.obSe.pagina + '&size=' + info.obSe.size + '&mail=' + info.correo, requestOptions)
    const items = await data.json()
    console.log(items)
    if (items.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = items.code
    } else {
      global.LABEL_INPUT_ERROR = items.message
      global.CODEERROR = items.code
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el reporte general, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getReporteDownloadListaNegra = async (params) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    // const urlPrueba = 'https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4'
    const urlSend = `${global.GET_REPORTE_DOWNLOAD_LISTA_NEGRA}?userName=${params.userName}&idUsuario=${loggedUser.idUsuario}&fechaDesde=${params.fechaInicio} 00:00:00&fechaHasta=${params.fechaFin} 23:59:59`
    let dataSend
   await axios({
      url: urlSend,
      method: 'GET',
      headers,
      responseType: 'blob' // importante
    }).then((response) => {
      console.log('response', response.data)
      console.log('response', response)
      dataSend = response.data
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = 200
   }).catch((error) => {
      console.log(error)
      global.LABEL_INPUT_ERROR = error.message
      global.CODEERROR = error.code
    })
    const responseSend = {
      data: dataSend,
      code: global.CODEERROR
    }
    return responseSend
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el historial campaña, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getReporteDownloadListaGris = async (params) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    // const urlPrueba = 'https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4'
    const urlSend = `${global.GET_REPORTE_DOWNLOAD_LISTA_GRIS}?userName=${params.userName}&dsUsuario=${loggedUser.idUsuario}&fechaInicio=${params.fechaInicio} 00:00:00&fechaFin=${params.fechaFin} 23:59:59`
    let dataSend
   await axios({
      url: urlSend,
      method: 'GET',
      headers,
      responseType: 'blob' // importante
    }).then((response) => {
      console.log('response', response.data)
      console.log('response', response)
      dataSend = response.data
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = 200
   }).catch((error) => {
      console.log(error)
      global.LABEL_INPUT_ERROR = error.message
      global.CODEERROR = error.code
    })
    const responseSend = {
      data: dataSend,
      code: global.CODEERROR
    }
    return responseSend
  } catch {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar el historial campaña, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
export default {
  getReportGeneral,
  getReportCamp,
  getPDFCampaingn,
  getReporteDownloadPers,
  getListaNegra,
  getListaGris,
  getReporteDownloadListaNegra,
  getReporteDownloadListaGris
}
