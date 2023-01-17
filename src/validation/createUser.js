const validate = (userData) => {
  let val = true
  if (userData.name === '' && userData.lastName === '' && userData.email === '' && userData.movilPhone === '' &&
        userData.user === '' && userData.pass1 === '') {
    global.FIELD = '.every-label'
    global.INPUT_FIELD = '.every-input'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  }

  if (userData.name === '') {
    global.FIELD = '.name-input'
    global.INPUT_FIELD = '#name'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  } else {
    if (userData.name.length > global.LENGTH_NAME_LAST) {
      global.FIELD = '.name-input'
      global.INPUT_FIELD = '#name'
      global.LABEL_INPUT_ERROR = global.LABEL_MAX_LENGTH_ERROR + global.LENGTH_NAME_LAST + ' caracteres'
      val = false
      return val
    }
  }
  if (userData.lastName === '') {
    global.FIELD = '.last-name-input'
    global.INPUT_FIELD = '#lastName'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  } else {
    if (userData.lastName.length > global.LENGTH_NAME_LAST) {
      global.FIELD = '.last-name-input'
      global.INPUT_FIELD = '#lastName'
      global.LABEL_INPUT_ERROR = global.LABEL_MAX_LENGTH_ERROR + global.LENGTH_NAME_LAST + ' caracteres'
      val = false
      return val
    }
  }
  if (userData.email === '') {
    global.FIELD = '.mail-input'
    global.INPUT_FIELD = '#email'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  } else {
    if (/([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(userData.email) !== true) {
      global.FIELD = '.mail-input'
      global.INPUT_FIELD = '#email'
      global.LABEL_INPUT_ERROR = global.LABEL_ERROR_EMAIL
      val = false
      return val
    }
  }
  if (userData.movilPhone === '') {
    global.FIELD = '.cell-phone-input'
    global.INPUT_FIELD = '#cellPhone'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  } else {
    if (userData.movilPhone.length > global.LENGTH_PHONE_ID) {
      global.FIELD = '.cell-phone-input'
      global.INPUT_FIELD = '#cellPhone'
      global.LABEL_INPUT_ERROR = global.LABEL_MAX_LENGTH_ERROR + global.LENGTH_PHONE_ID + ' caracteres'
      val = false
      return val
    } else {
      if (userData.movilPhone.length < global.LENGTH_PHONE_ID) {
        global.FIELD = '.cell-phone-input'
        global.INPUT_FIELD = '#cellPhone'
        global.LABEL_INPUT_ERROR = global.LABEL_MIN_LENGTH_ERROR + global.LENGTH_PHONE_ID + ' caracteres'
        val = false
        return val
      } else if ((userData.movilPhone[0] !== '0')) {
        global.FIELD = '.cell-phone-input'
        global.INPUT_FIELD = '#cellPhone'
        global.LABEL_INPUT_ERROR = 'Por favor ingrese un número válido.'
        val = false
        return val
      } else if ((userData.movilPhone[1] !== '9')) {
        global.FIELD = '.cell-phone-input'
        global.INPUT_FIELD = '#cellPhone'
        global.LABEL_INPUT_ERROR = 'Por favor ingrese un número válido.'
        val = false
        return val
      }
    }
  }
  if (userData.user === '') {
    global.FIELD = '.user-input'
    global.INPUT_FIELD = '#user'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  } else {
    if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(userData.user) !== true) {
      global.FIELD = '.user-input'
      global.INPUT_FIELD = '#user'
      global.LABEL_INPUT_ERROR = 'El usuario debe tener [Aa-Zz], al menos [6-10] caracteres y al menos un dígito. NO puede tener otros símbolos.'
      val = false
      return val
    }
  }
  if (userData.pass1 === '') {
    global.FIELD = '.pass1-input'
    global.INPUT_FIELD = '#pass1'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  } else {
    if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(userData.pass1) !== true) {
      global.FIELD = '.pass1-input'
      global.INPUT_FIELD = '#pass1'
      global.LABEL_INPUT_ERROR = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.'
      val = false
      return val
    }
  }

  return val
}

export default {
  validate
}
