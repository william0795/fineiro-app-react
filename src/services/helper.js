/* eslint-disable prefer-regex-literals */
/* eslint-disable quote-props */
/* eslint-disable no-tabs */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable eol-last */
const formatUrlParams = (params) => {
    const query = Object.keys(params)
    .map((k) => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map((val) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&');
      }

      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    })
    .join('&');

    return query;
}
const esEmailValido = (email) => {
    let mailValido = false;
      'use strict';
      let EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }
const validaSoloNumeros = (event) => {
  if (event.charCode >= 48 && event.charCode <= 57) return true;
  if (event.charCode === 8) return true;
  if (event.charCode === 13) return true;
  return false
}
const validaTextoLetras = (event) => {
  if (event.charCode >= 48 && event.charCode <= 57) return false;
  if (event.charCode >= 33 && event.charCode <= 47) return false;
  if (event.charCode >= 58 && event.charCode <= 64) return false;
  if (event.charCode >= 91 && event.charCode <= 96) return false;
  if (event.charCode >= 123 && event.charCode <= 126) return false;
  if (event.charCode === 161 || 
      event.charCode === 191 || 
      event.charCode === 183 || 
      event.charCode === 172 ||
      event.charCode === 186 ||
      event.charCode === 170) return false;
  return true
}
const validaSoloLetras = (event) => {
  if (event.charCode >= 65 && event.charCode <= 90) return true;
  if (event.charCode >= 97 && event.charCode <= 122) return true;
  return false
}
const validaNombres = (event) => {
  if (event.charCode >= 33 && event.charCode <= 47) return false;
  if (event.charCode >= 58 && event.charCode <= 64) return false;
  if (event.charCode >= 91 && event.charCode <= 94) return false;
  if (event.charCode >= 123 && event.charCode <= 127) return false;
  if (event.charCode === 161) return false;
  if (event.charCode === 180) return false;
  if (event.charCode === 231) return false;
  if (event.charCode === 96) return false;
  return true
}
const dowloadCsv = (data, nameArchivo) => {
  let blob;
  let clicEvent;
  let save;
  let d = new Date();
  let contenido = "";

  for (let i = 0; i < data.length; i++) {
    // construimos cabecera del csv
    // if (i === 0){
    //   contenido += Object.keys(dataTableExcel[i]).join(",") + "\n";
    // }

     // resto del contenido
      contenido += Object.keys(data[i]).map(function (key){
        return data[i][key];
      }).join(",") + "\n";
  }
  console.log('contenido', contenido);
  blob = new Blob(["\ufeff", contenido], { type: 'text/csv' });
  let reader = new FileReader();
		reader.onload = function (event) {
			// escuchamos su evento load y creamos un enlace en dom
			save = document.createElement('a');
			save.href = event.target.result;
			save.target = '_blank';
			// aquí le damos nombre al archivo
			save.download = nameArchivo + ".csv";
			try {
				// creamos un evento click
				clicEvent = new MouseEvent('click', {
					'view': window,
					'bubbles': true,
					'cancelable': true
				});
			} catch (e) {
				// si llega aquí es que probablemente implemente la forma antigua de crear un enlace
				clicEvent = document.createEvent("MouseEvent");
				clicEvent.initEvent('click', true, true);
			}
			// disparamos el evento
			save.dispatchEvent(clicEvent);
			// liberamos el objeto window.URL
			(window.URL || window.webkitURL).revokeObjectURL(save.href);
		}
		// leemos como url
		reader.readAsDataURL(blob);
}
const getMessage = (data) => {
  console.log('data =>>>', data)
  let objReturn = { code: null, message: null };
  switch (data.code) {
    case 200:
      console.log('entroo 200')
      objReturn.code = 200;
      objReturn.message = global.PROCESO_OK;
      break;
    case 400:
      objReturn.code = 400;
      objReturn.message = global.CAMPOS_OBLIGATORIOS;
      break;
    case 401 || 500:
      objReturn.code = 500;
      objReturn.message = global.ERROR_SERVICE_OFF;
    break;
    default:
      objReturn.code = data.code;
      objReturn.message = data.message;
      break;
  }
  return objReturn;
}

const toTitleCase = (phrase) => {
  if (phrase) {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
}
const verificaSoloTexto = (value) => {
  console.log('value', value)
  const pattern = new RegExp('^[A-Z]+$', 'i');
  let isValid = false; 
  if (!value) {
    isValid = true;
  } else {
    if (!pattern.test(value)){ 
        isValid = false;
      } else {
        isValid = true;
      }
  }
  return isValid;
}

const verificaSoloTextoNumero = (value) => {
  console.log('value', value)
  const pattern = new RegExp('^[0-9a-zA-Z]+$', 'i');
  let isValid = false; 
  if (!value) {
    isValid = true;
  } else {
    if (!pattern.test(value)){ 
        isValid = false;
      } else {
        isValid = true;
      }
  }
  return isValid;
}
const getValidUser = (idUsuario) => {
  const userData = JSON.parse(localStorage.getItem('loggedUser'))
  console.log('userData', userData)
  console.log('userData.idUsuario', userData.idUsuario)
  if (idUsuario === userData.idUsuario){
    return true
  } else {
    return false
  }
}
export default {
  formatUrlParams,
  esEmailValido,
  validaSoloNumeros,
  validaSoloLetras,
  validaTextoLetras,
  validaNombres,
  dowloadCsv,
  getMessage,
  toTitleCase,
  getValidUser,
  verificaSoloTexto,
  verificaSoloTextoNumero
}