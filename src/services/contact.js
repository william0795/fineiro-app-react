/* eslint-disable quote-props */
/* eslint-disable prefer-const */

const getGroups = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(global.CONTACT_LISTCONTACT + credenciales.tipo, requestOptions)
    const items = await resp.json()
    console.log(JSON.stringify(items))
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
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo consutlar la lista de contactos, intente en unos momentos'
    global.CODEERROR = global.CODEERRORSET
  }
}
const getGruposCanal = async credenciales => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.GRUPO_CANAL}?tipoCanal=${credenciales.tipoCanal}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudieron consutlar los grupos, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consutlar las grupos, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const getGrupoId = async idGrupo => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.GRUPO_ID}?idGrupo=${idGrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudieron consutlar los grupos, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consutlar las grupos, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const getGruposDestinatarios = async params => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.GRUPO_DESTINATARIOXTIPO}?` + params, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudieron consutlar los grupos, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consutlar las grupos, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const getDestinatariosXGrupo = async (params) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.GRUPO_DESTINATARIOXGRUPO}?` + params, requestOptions)
    const items = await resp.json()
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consutlar las grupos, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const SegmentoCreate = async infoData => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = infoData.dataSend
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    const dataResp = await fetch(global.GRUPO_SEGMENTO_CREATE, requestOptions)
    const resp = await dataResp.json()
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo crear el segmento, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const AgregaDestinatarioGrupo = async infoData => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = infoData.send
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    const dataResp = await fetch(global.GRUPO_DESTINATARIO_SAVE + `?idGrupo=${infoData.idGrupo}`, requestOptions)
    const resp = await dataResp.json()

    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo agregar el destinatario, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const AgregaDestinatarioUnitGrupo = async infoData => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = infoData.send
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    const dataResp = await fetch(global.SAVE_DEST_UNIT + `?idGrupo=${infoData.idGrupo}`, requestOptions)
    const resp = await dataResp.json()

    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo agregar el destinatario, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const SetDestinatario = async infoData => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = infoData.dataSend
    const requestOptions = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }
    const dataResp = await fetch(global.GRUPO_DESTINATARIO_SAVE + `?idDestinatario=${infoData.idDestinatario}&idGrupo=${infoData.idGrupo}`, requestOptions)
    const resp = await dataResp.json()
    const response = {
      data: resp,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo agregar el destinatario, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const DeleteGrupo = async idGrupo => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'DELETE',
      headers
    }
    const resp = await fetch(`${global.GRUPOS}?idGrupo=${idGrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudo eliminar el grupo, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo eliminar el grupo, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const EditarGrupo = async infoData => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = infoData.body
    const requestOptions = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }
    const resp = await fetch(`${global.GRUPOS}?idGrupo=${infoData.idgrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudo editar el grupo, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo eliminar el grupo, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const DeleteDestinatario = async ({ idGrupo, idDestinatario }) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'DELETE',
      headers
    }
    const resp = await fetch(`${global.GRUPO_DESTINATARIO_SAVE}?idDestinatario=${idDestinatario}&idGrupo=${idGrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudo eliminar el destinatario, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo eliminar el destinatario, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const ConvierteSegmentoLista = async idGrupo => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'PUT',
      headers
    }
    const resp = await fetch(`${global.GRUPO_SEGMENTO_CONVIERTE}?idGrupo=${idGrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudo convertir el segmento, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo convertir el segmento, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const ClonarLista = async idGrupo => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'POST',
      headers
    }
    const resp = await fetch(`${global.GRUPO_CLONAR}?idGrupo=${idGrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudo clonar el grupo, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo clonar el grupo, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const getDestinatarioId = async idDestinatario => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.DESTINATARIO_ID}?idDestinatario=${idDestinatario}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudieron consutlar el destinatario, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consutlar el destinatario, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const CrearGrupo = async infoData => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const data = infoData
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    const resp = await fetch(`${global.GRUPOS}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudo editar el grupo, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo eliminar el grupo, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const AgregaDestinatarioGrupoArchivo = async (dataSend, params) => {
  try {
    const headers = {}
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'POST',
      headers,
      body: dataSend
    }
    const resp = await fetch(`${global.DESTINATARIO_SAVE}?` + params, requestOptions)
    const items = await resp.json()
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo eliminar el grupo, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const GetDataErrorGrupo = async idGrupo => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.GET_DESTINATARIOS_ERROR}/${idGrupo}`, requestOptions)
    const items = await resp.json()
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudo eliminar el grupo, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
const getParametrosGrupo = async idGrupo => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    headers.Authorization = 'Bearer ' + loggedUser.token
    headers.Canal = global.CANAL
    const requestOptions = {
      method: 'GET',
      headers
    }
    const resp = await fetch(`${global.GET_PARAMETROS_GRUPO}/${idGrupo}`, requestOptions)
    const items = await resp.json()
    if (resp.ok === false) {
      global.LABEL_INPUT_ERROR = 'No se pudieron consutlar el destinatario, intente en unos momentos'
      global.ERROR_LABEL = 'error'
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR
    }
    return response
  } catch (editor) {
    global.LABEL_INPUT_ERROR = 'No se pudieron consutlar el destinatario, intente en unos momentos'
    global.ERROR_LABEL = 'error'
  }
}
export default {
  getGroups,
  getGrupoId,
  getGruposCanal,
  getGruposDestinatarios,
  SegmentoCreate,
  AgregaDestinatarioGrupo,
  AgregaDestinatarioUnitGrupo,
  SetDestinatario,
  DeleteGrupo,
  EditarGrupo,
  DeleteDestinatario,
  ConvierteSegmentoLista,
  ClonarLista,
  getDestinatarioId,
  CrearGrupo,
  AgregaDestinatarioGrupoArchivo,
  getDestinatariosXGrupo,
  GetDataErrorGrupo,
  getParametrosGrupo

}
