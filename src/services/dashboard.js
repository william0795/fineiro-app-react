import validationDasboard from '../validation/dashboard'

/* eslint-disable no-unused-vars */

const getDashboardData = async options => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  let error = 0
  let notSend = ''
  let notDesp = ''
  let notIng = ''
  let dateDesp = ''
  let notDespDetailHead = 'Último 3 Meses:'
  let notDespDetailBody = ''
  let notProDetailHead = 'Último 3 Meses:'
  let notProDetailBody = ''
  let notSendDetailHead = 'Último 3 Meses:'
  let notSendDetailBody = ''
  let dateDespDetailHead = ''
  let dateDespDetailBody = ''
  const search = validationDasboard.indicadores(options)
  const searchCampanaDetail = validationDasboard.indicadoresDetalleCampanasDesp(options)
  const searchCampanaProgramadas = validationDasboard.indicadoresDetalleProgramadas(options)
  const searchNotEnivadas = validationDasboard.indicadoresDetallesNotificacionesEnviadas(options)
  const searchFechaProgramacion = validationDasboard.indicadoreFechaProgramacion(options)
  const searchBars = validationDasboard.barsData(options)
  const searchEnviadasCanal = validationDasboard.donutDataEnviadasCanal(options)
  const searchEficienciasWhats = validationDasboard.donutDataEnviadasCanal(options)
  const [notSendIfo, notDespInfo, notIngInfo, dateDespInfo, notDespInfoDetail, notProgInfoDetail, notSendIfoDetail, dateDespInfoDetail, dataBars
    , sendCanal, mailCanal, smsCanal, whatscanal] = await Promise.all([
    fetch(global.NOTSEND_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(response => response.json()),
    fetch(global.DESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(response => response.json()),
    fetch(global.IN_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(response => response.json()),
    fetch(global.DATEDESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(response => response.json()),
    fetch(global.DESP_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchCampanaDetail, requestOptions).then(response => response.json()),
    fetch(global.PRO_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchCampanaProgramadas, requestOptions).then(response => response.json()),
    fetch(global.NOTSEND_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchNotEnivadas, requestOptions).then(response => response.json()),
    fetch(global.DATEDESP_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchFechaProgramacion, requestOptions).then(response => response.json()),
    fetch(global.SEND_NOTIFICATION + '/' + loggedUser.idUsuario + searchBars, requestOptions).then(response => response.json()),
    fetch(global.SEND_CANAL_NOTIFICATION + '/' + loggedUser.idUsuario + searchEnviadasCanal, requestOptions).then(response => response.json()),
    fetch(global.MAIL_EFI + '/' + loggedUser.idUsuario + searchEficienciasWhats, requestOptions).then(response => response.json()),
    fetch(global.SMS_EFI + '/' + loggedUser.idUsuario + searchEficienciasWhats, requestOptions).then(response => response.json()),
    fetch(global.WHATS_EFI + '/' + loggedUser.idUsuario + searchEficienciasWhats, requestOptions).then(response => response.json())
  ]).catch(function () {
    error = global.CODEERROR
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error
    }

    return response
  })

  if (notSendIfo.code !== 200) {
    notSend = ''
  } else {
    notSend = notSendIfo.data
    error = notSendIfo.code
  }
  if ((options.fechaInit !== '' || options.fechaFint !== '')) {
    notDespDetailHead = 'Detalle:'
    notProDetailHead = 'Detalle:'
    notSendDetailHead = 'Detalle:'
    dateDespDetailHead = 'Detalle:'
  }
  if (notDespInfo.code !== 200) { notDesp = '' } else { notDesp = notDespInfo.data }
  if (notIngInfo.code !== 200) { notIng = '' } else { notIng = notIngInfo.data }
  if (dateDespInfo.code !== 200) { dateDesp = '' } else { dateDesp = dateDespInfo.data }
  if (notDespInfoDetail.code === 200) {
    // notDespDetailHead = 'Último 3 Meses:'
    let html = '<ul>'
    for (let i = 0; i < notDespInfoDetail.data.rows.length; i++) {
      html += '<li>' + notDespInfoDetail.data.rows[i].name + ' : ' + notDespInfoDetail.data.rows[i].value + '</li>'
    }
    html += '</ul>'
    notDespDetailBody = html
  } else {
    notDespDetailHead = 'Sin información'
    notDespDetailBody = 'Sin información'
  }
  if (notProgInfoDetail.code === 200) {
    // notProDetailHead = 'Último 3 Meses:'
    let html = '<ul>'
    for (let i = 0; i < notProgInfoDetail.data.rows.length; i++) {
      html += '<li>' + notProgInfoDetail.data.rows[i].name + ' : ' + notProgInfoDetail.data.rows[i].value + '</li>'
    }
    html += '</ul>'
    notProDetailBody = html
  } else {
    notProDetailHead = 'Sin información'
    notProDetailBody = 'Sin información'
  }
  if (notSendIfoDetail.code === 200) {
    // notSendDetailHead = 'Último 3 Meses:'
    let html = '<ul>'
    for (let i = 0; i < notSendIfoDetail.data.rows.length; i++) {
      html += '<li>' + notSendIfoDetail.data.rows[i].name + ' : ' + notSendIfoDetail.data.rows[i].value + '</li>'
    }
    html += '</ul>'
    notSendDetailBody = html
  } else {
    notSendDetailHead = 'Sin información'
    notSendDetailBody = 'Sin información'
  }
  if (dateDespInfoDetail.code === 200) {
    // dateDespDetailHead = ''
    dateDespDetailBody = dateDespInfoDetail.data
  } else {
    dateDespDetailHead = 'Sin información'
    dateDespDetailBody = 'Sin información'
  }
  const ddData = []
  if (dataBars.code === 200) {
    // ddData = dataBars.data.rows
    for (let i = 0; i < dataBars.data.rows.length; i++) {
      const objeto = {
        name: dataBars.data.rows[i].name,
        cant: dataBars.data.rows[i].pv
      }
      ddData.push(objeto)
    }
  }
  let ddDataCanal = []
  if (sendCanal.code === 200) {
    ddDataCanal = sendCanal.data.rows
  }
  let ddDataMailing = []
  if (mailCanal.code === 200) {
    ddDataMailing = mailCanal.data.rows
  }
  let ddDataSms = []
  if (smsCanal.code === 200) {
    ddDataSms = smsCanal.data.rows
  }
  let ddDataWhats = []
  if (whatscanal.code === 200) {
    ddDataWhats = whatscanal.data.rows
  }
  const response = {
    notSend,
    notDesp,
    notIng,
    dateDesp,
    notDespDetailHead,
    notDespDetailBody,
    notProDetailHead,
    notProDetailBody,
    notSendDetailHead,
    notSendDetailBody,
    dateDespDetailHead,
    dateDespDetailBody,
    ddData,
    ddDataCanal,
    ddDataMailing,
    ddDataSms,
    ddDataWhats,
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: 200
  }

  return response
}

const getDashboard = async options => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  const search = validationDasboard.indicadores(options)
  let errorCd = 0
  let errorCp = 0
  let errorNe = 0
  let errorUp = 0
  const data21 = Promise.all([
    fetch(global.NOTSEND_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(res => res.json()),
    fetch(global.DESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(res => res.json()),
    fetch(global.IN_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(res => res.json()),
    fetch(global.DATEDESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions).then(res => res.json())
  ]).then(([items, contactlist, itemgroup]) => {
    if (itemsCd.code !== '200') { errorCd = '' } else { errorCd = itemsCd }
    if (itemsCd.code !== '200') { errorCd = '' } else { errorCd = itemsCd }
    if (itemsCd.code !== '200') { errorCd = '' } else { errorCd = itemsCd }
    if (itemsCd.code !== '200') { errorCd = '' } else { errorCd = itemsCd }
    console.log(items)
  }).catch((err) => {
    console.log(err)
  })
  const data = Promise.all([
    await fetch(global.NOTSEND_REPORT + '/' + loggedUser.idUsuario + search, requestOptions),
    fetch(global.DESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions),
    fetch(global.IN_REPORT + '/' + loggedUser.idUsuario + search, requestOptions),
    fetch(global.DATEDESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions)
  ])
  try {
    const value = await data
    console.log(value) // 👉️ "Hello World"
  } catch (err) {
    console.log(err)
  }
  data.then(value => {
    console.log(value[0].body)
  }).catch(err => {
    console.log(err)
  })
  const resp = await fetch(global.NOTSEND_REPORT + '/' + loggedUser.idUsuario + search, requestOptions)
  const itemsCd = await resp.json()
  if (itemsCd.code !== '200') { errorCd = '' } else { errorCd = itemsCd }
  const resp2 = await fetch(global.DESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions)
  const itemsCp = await resp2.json()
  if (itemsCd.code !== '200') { errorCp = '' } else { errorCp = itemsCp }
  const resp3 = await fetch(global.IN_REPORT + '/' + loggedUser.idUsuario + search, requestOptions)
  const itemsNe = await resp3.json()
  if (itemsCd.code !== '200') { errorNe = '' } else { errorNe = itemsNe }
  const resp4 = await fetch(global.DATEDESP_REPORT + '/' + loggedUser.idUsuario + search, requestOptions)
  const itemsUp = await resp4.json()
  if (itemsCd.code !== '200') { errorUp = '' } else { errorUp = itemsUp }
  const response = {
    itemsCd,
    errorCd,
    itemsCp,
    errorCp,
    itemsNe,
    errorNe,
    itemsUp,
    errorUp,
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: global.ERROR
  }
  return response
}

const getBarsData = async options => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  const search = validationDasboard.barsData(options)
  const bars = await fetch(global.SEND_NOTIFICATION + '/' + loggedUser.idUsuario + search, requestOptions)
  const dataBars = await bars.json()
  let ddData = []
  if (dataBars.code === 200) {
    ddData = dataBars.data.rows
  }
  const response = {
    dataBars: ddData
  }
  return response
}

const getDonut = async options => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  let f = 0
  const searchEnviadasCanal = validationDasboard.donutDataEnviadasCanal(options)
  const searchEficienciasWhats = validationDasboard.donutDataEnviadasCanal(options)
  // dona para notificaciones enviadas por canal
  const canal = await fetch(global.SEND_CANAL_NOTIFICATION + '/' + loggedUser.idUsuario + searchEnviadasCanal, requestOptions)
  const dataCanal = await canal.json()
  let ddData = []
  if (dataCanal.code === 200) {
    ddData = dataCanal.data.rows
  }
  // dona para notificaciones enviadas por mailing
  const mailing = await fetch(global.MAIL_EFI + '/' + loggedUser.idUsuario + searchEficienciasWhats, requestOptions)
  const dataMailing = await mailing.json()
  let ddDataMailing = []
  if (dataMailing.code === 200) {
    ddDataMailing = dataMailing.data.rows
  }
  // dona para notificaciones enviadas por sms
  const sms = await fetch(global.SMS_EFI + '/' + loggedUser.idUsuario + searchEficienciasWhats, requestOptions)
  const dataSms = await sms.json()
  let ddDataSms = []
  if (dataSms.code === 200) {
    ddDataSms = dataSms.data.rows
  }
  // dona para notificaciones enviadas por sms
  const whats = await fetch(global.WHATS_EFI + '/' + loggedUser.idUsuario + searchEficienciasWhats, requestOptions)
  const dataWhats = await whats.json()
  let ddDataWhats = []
  f = 0
  if (dataWhats.code === 200) {
    ddDataWhats = dataWhats.data.rows
  }
  const response = {
    dataDonuts: ddData,
    dataMailing: ddDataMailing,
    dataSms: ddDataSms,
    dataWhats: ddDataWhats
  }
  return response
}

const getIniDetail = async options => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  let data
  let header = ''
  let detail = ''
  let header2 = ''
  let detail2 = ''
  let header3 = ''
  let detail3 = ''
  let header4 = ''
  let detail4 = ''
  let fechaIni
  let fechaFin
  if (options.opt !== 'init') {
    fechaIni = options.fecahaIni
    fechaFin = options.fehcaFin
  } else {
    fechaIni = getInitDate()
    fechaFin = getDate()
  }
  const searchCampanaDetail = validationDasboard.indicadoresDetalleCampanasDesp(options)
  data = await fetch(global.DESP_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchCampanaDetail, requestOptions)
  const itemsResp2 = await data.json()
  if (itemsResp2.code === 200) {
    header = 'Último 3 Meses:'
    let html = '<ul>'
    for (let i = 0; i < itemsResp2.data.rows.length; i++) {
      html += '<li>' + itemsResp2.data.rows[i].name + ' : ' + itemsResp2.data.rows[i].value + '</li>'
    }
    html += '</ul>'
    detail = html
  } else {
    header = 'Sin información'
    detail = 'Sin información'
  }
  const searchCampanaProgramadas = validationDasboard.indicadoresDetalleProgramadas(options)
  data = await fetch(global.PRO_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchCampanaProgramadas, requestOptions)
  const itemsResp3 = await data.json()
  if (itemsResp3.code === 200) {
    header2 = 'Último 3 Meses:'
    let html = '<ul>'
    for (let i = 0; i < itemsResp3.data.rows.length; i++) {
      html += '<li>' + itemsResp3.data.rows[i].name + ' : ' + itemsResp3.data.rows[i].value + '</li>'
    }
    html += '</ul>'
    detail2 = html
  } else {
    header2 = 'Sin información'
    detail2 = 'Sin información'
  }
  const searchNotEnivadas = validationDasboard.indicadoresDetallesNotificacionesEnviadas(options)
  data = await fetch(global.NOTSEND_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchNotEnivadas, requestOptions)
  const itemsResp = await data.json()
  if (itemsResp.code === 200) {
    header3 = 'Último 3 Meses:'
    let html = '<ul>'
    for (let i = 0; i < itemsResp.data.rows.length; i++) {
      html += '<li>' + itemsResp.data.rows[i].name + ' : ' + itemsResp.data.rows[i].value + '</li>'
    }
    html += '</ul>'
    detail3 = html
  } else {
    header3 = 'Sin información'
    detail3 = 'Sin información'
  }
  const searchFechaProgramacion = validationDasboard.indicadoreFechaProgramacion(options)
  data = await fetch(global.DATEDESP_REPORT_DETAIL + '/' + loggedUser.idUsuario + searchFechaProgramacion, requestOptions)
  const itemsResp4 = await data.json()
  if (itemsResp4.code === 200) {
    header4 = ''
    detail4 = itemsResp4.data
  } else {
    header4 = 'Sin información'
    detail4 = 'Sin información'
  }

  const response = {
    header,
    detail,
    header2,
    detail2,
    header3,
    detail3,
    header4,
    detail4
  }
  return response
}

const getDetail = async opt => {
  const headers = { 'Content-Type': 'application/json' }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
  headers.Authorization = 'Bearer ' + loggedUser.token
  headers.Canal = global.CANAL
  const requestOptions = {
    method: 'GET',
    headers
  }
  let data
  let header = ''
  let detail = ''
  if (opt === 'D') {
    data = await fetch(global.NOTSEND_REPORT_DETAIL + '/' + loggedUser.idUsuario + '?opcion=fecha&listCampana=21,22,23&fechaInicio=2022-01-01&fechaFin=2022-06-29', requestOptions)
    const itemsResp = await data.json()
    if (itemsResp.code === 200) {
      header = 'Último 3 Meses:'
      detail = ''
    } else {
      header = 'Sin información'
      detail = 'Sin información'
    }
  }
  if (opt === 'P') {
    data = await fetch(global.DESP_REPORT_DETAIL + '/' + loggedUser.idUsuario + '?opcion=canal,fecha&fechaInicio=2021-01-01&fechaFin=2022-07-20&canal=E', requestOptions)
    const itemsResp = await data.json()
    if (itemsResp.code === 200) {
      header = '3 bases para envío 3 Meses:'
      detail = ''
    } else {
      header = 'Sin información'
      detail = 'Sin información'
    }
  }
  if (opt === 'E') {
    data = await fetch(global.IN_REPORT_DETAIL + '/' + loggedUser.idUsuario + '?opcion=canal&canal=H', requestOptions)
    const itemsResp = await data.json()
    if (itemsResp.code === 200) {
      header = 'Último 3 Meses:'
      detail = ''
    } else {
      header = 'Sin información'
      detail = 'Sin información'
    }
  }
  if (opt === 'U') {
    data = await fetch(global.DATEDESP_REPORT_DETAIL + '/' + loggedUser.idUsuario + '1?opcion=campana&listCampana=21,22,23', requestOptions)
    const itemsResp = await data.json()
    if (itemsResp.code === 200) {
      header = ''
      detail = ''
    } else {
      header = 'Sin información'
      detail = 'Sin información'
    }
  }

  const response = {
    header,
    detail
  }
  return response
}

const getDate = () => {
  const dateData = new Date()
  const date = dateData.getDate()
  const month = dateData.getMonth() + 1
  const year = dateData.getFullYear()
  const dateChange = `${year}${global.DATE_SEPARATOR}${month < 10 ? `0${month}` : `${month}`}${global.DATE_SEPARATOR}${date < 10 ? `0${date}` : `${date}`}`
  return dateChange
}

const getInitDate = () => {
  const dateData = new Date()
  const date = 1
  const month = dateData.getMonth() + 1
  const year = dateData.getFullYear()
  const dateChange = `${year}${global.DATE_SEPARATOR}${month < 10 ? `0${month}` : `${month}`}${global.DATE_SEPARATOR}${date < 10 ? `0${date}` : `${date}`}`
  return dateChange
}

export default {
  getIniDetail,
  getDashboard,
  getDetail,
  getBarsData,
  getDonut,
  getDashboardData
}
