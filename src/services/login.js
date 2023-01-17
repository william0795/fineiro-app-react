/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
import base64 from 'react-native-base64'
import validationCreateUser from '../validation/createUser'
import validationPassword from '../validation/password'

const login = async credenciales => {
  const token = 'Bearer undefined'
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token
  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(credenciales)
  }
    const resp = await fetch('https://api.finerio.mx/api/login', requestOptions)
    const items = await resp.json()
    console.log('items', items)
    if (items) {
      window.localStorage.setItem('loggedUser', JSON.stringify(items))
      window.localStorage.setItem('token', items.access_token)
      global.ERROR = 0
      global.REDIRECT_URL = global.ROUTE_WELCOME
    } else if (items.code === 401) {
      global.HEADER = global.MODAL_HEAD_ERROR
      global.BODY = items.message
      global.ERROR = items.code
      global.REDIRECT_URL = ''
    }
  const response = {
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: global.ERROR
  }
  return response
}

const getDataUser = async () => {
  console.log('ejecuta me')
  const idtoken = localStorage.getItem('token')
  const token = `Bearer ${idtoken}`
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token
  const requestOptions = {
    method: 'GET',
    headers
  }
  const resp = await fetch('https://api.finerio.mx/api/me', requestOptions)
  const items = await resp.json()
  console.log('items', items)
  if (items) {
    window.localStorage.setItem('dataUser', JSON.stringify(items))
    global.ERROR = 0
    global.REDIRECT_URL = global.ROUTE_WELCOME
  } else {
    global.HEADER = global.MODAL_HEAD_ERROR
    global.BODY = items.message
    global.ERROR = items.code
    global.REDIRECT_URL = ''
  }
  const response = {
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: global.ERROR
  }
  return response
}
const getMovimientos = async () => {
  console.log('ejecuta movimeintos')
  const idtoken = localStorage.getItem('token')
  const dataUser = JSON.parse(localStorage.getItem('dataUser'));
  const token = `Bearer ${idtoken}`
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token
  console.log('dataUser', dataUser)
  const requestOptions = {
    method: 'GET',
    headers
  }
  const resp = await fetch(`https://api.finerio.mx/api/users/${dataUser.id}/movements`, requestOptions)
  const items = await resp.json()
  console.log('items', items)
  if (items) {
    global.ERROR = 0
    global.REDIRECT_URL = ''
  } else {
    global.HEADER = global.MODAL_HEAD_ERROR
    global.BODY = items.message
    global.ERROR = items.code
    global.REDIRECT_URL = ''
  }
  const response = {
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: global.ERROR,
    data: items
  }
  return response
}

export default {
  login,
  getDataUser,
  getMovimientos
}
