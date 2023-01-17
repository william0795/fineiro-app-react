const validate = (userData) => {
  let val = true
  // name
  if (userData.password1 === '') {
    global.FIELD = '.password-1'
    global.INPUT_FIELD = '.password1'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  }
  if (userData.password2 === '') {
    global.FIELD = '.password-2'
    global.INPUT_FIELD = '.password2'
    global.LABEL_INPUT_ERROR = global.LABEL_EMPTY_ERROR
    val = false
    return val
  }
  if (userData.password2 !== userData.password1) {
    global.FIELD = '.password-2'
    global.INPUT_FIELD = '.password2'
    global.LABEL_INPUT_ERROR = 'las claves no son iguales'
    val = false
    return val
  }
  return val
}

export default {
  validate
}
