const validate = (info) => {
  let resp = true
  let nameTemplate = ''
  let nameRemit = ''
  let descRemit = ''
  let asuRemit = ''
  let descTemplate = ''
  let clickPanel = 0
  if (!info.nameTemplate) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    nameTemplate = 'nameTemplate'
    clickPanel = 1
    resp = false
  } else {
    if (info.nameTemplate.length > global.TEMPLATE_NAME_LENGTH) {
      global.LABEL_INPUT_ERROR = global.NAME_EXCE
      nameTemplate = 'nameTemplate'
      clickPanel = 1
      resp = false
    }
  }
  if (info.descTemplate) {
    if (info.descTemplate.length > global.DESCRIPTION_LENGTH) {
      global.LABEL_INPUT_ERROR = global.DESCRIP_EXCE
      descTemplate = 'descTemplate'
      clickPanel = 1
      resp = false
    }
  }
  if (!info.nameRem) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    nameRemit = 'nameRemit'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  } else {
    if (info.nameRem.length > global.NAME_REM_LENGTH) {
      global.LABEL_INPUT_ERROR = global.NOMBRE_EXCE
      global.ERROR = 1
      nameRemit = 'nameRemit'
      if (clickPanel === 0) clickPanel = 2
      resp = false
    }
  }
  if (info.descRem === '') {
    global.FIELD = '.mail-input'
    global.INPUT_FIELD = '#email'
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    descRemit = 'descRemit'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  }
  if (info.descRem.length > global.MAIL_LENGTH) {
    global.LABEL_INPUT_ERROR = global.MAIL_EXCE
    global.ERROR = 1
    descRemit = 'descRemit'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  }
  if (/([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(info.descRem) !== true) {
    global.FIELD = '.mail-input'
    global.INPUT_FIELD = '#email'
    global.LABEL_INPUT_ERROR = global.MAIL_ERROR_MESSAGE
    global.ERROR = 1
    descRemit = 'descRemit'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  }
  if (!info.asunto) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    asuRemit = 'asuRemit'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  } else {
    if (info.asunto.length > global.SUBJECT_LENGTH) {
      global.LABEL_INPUT_ERROR = global.SUNJECT_EXCE
      asuRemit = 'asuRemit'
      clickPanel = 2
      resp = false
    }
  }
  const form = {
    nameTemplate,
    descTemplate,
    nameRemit,
    descRemit,
    asuRemit
  }
  const response = {
    nameTemplate,
    descTemplate,
    nameRemit,
    descRemit,
    asuRemit,
    clickPanel,
    form,
    error: resp
  }
  return response
}

const validateSms = (info) => {
  let resp = true
  let nameTemplate = ''
  let textTemplate = ''
  let descTemplate = ''
  let clickPanel = 0
  if (!info.nameTemplate) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    nameTemplate = 'nameTemplate'
    clickPanel = 1
    resp = false
  } else {
    if (info.nameTemplate.length > global.TEMPLATE_NAME_LENGTH) {
      global.LABEL_INPUT_ERROR = global.NAME_EXCE
      nameTemplate = 'nameTemplate'
      clickPanel = 1
      resp = false
    }
  }
  if (info.descTemplate) {
    if (info.descTemplate.length > global.DESCRIPTION_LENGTH) {
      global.LABEL_INPUT_ERROR = global.DESCRIP_EXCE
      descTemplate = 'descTemplate'
      clickPanel = 1
      resp = false
    }
  }
  if (!info.text) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    textTemplate = 'textTemplate'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  } else {
    if (info.text.length > global.SUBJECT_LENGTH) {
      global.LABEL_INPUT_ERROR = global.SUNJECT_EXCE
      textTemplate = 'textTemplate'
      clickPanel = 2
      resp = false
    }
  }
  const form = {
    nameTemplate,
    textTemplate,
    descTemplate
  }
  const response = {
    nameTemplate,
    textTemplate,
    descTemplate,
    clickPanel,
    form,
    error: resp
  }
  return response
}

const validateDetailSms = (info) => {
  let resp = true
  if (!info.descTemplate) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    resp = false
  }
  return resp
}

const validateWhat = (info) => {
  let resp = true
  let nameTemplate = ''
  let textTemplate = ''
  let descTemplate = ''
  let clickPanel = 0
  if (!info.nameTemplate) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    nameTemplate = 'nameTemplate'
    clickPanel = 1
    resp = false
  } else {
    if (info.nameTemplate.length > global.TEMPLATE_NAME_LENGTH) {
      global.LABEL_INPUT_ERROR = global.NAME_EXCE
      nameTemplate = 'nameTemplate'
      clickPanel = 1
      resp = false
    }
  }
  if (info.descTemplate) {
    if (info.descTemplate.length > global.DESCRIPTION_LENGTH) {
      global.LABEL_INPUT_ERROR = global.DESCRIP_EXCE
      descTemplate = 'descTemplate'
      clickPanel = 1
      resp = false
    }
  }
  if (!info.text) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    textTemplate = 'textTemplate'
    if (clickPanel === 0) clickPanel = 2
    resp = false
  } else {
    if (info.text.length > global.SUBJECT_LENGTH) {
      global.LABEL_INPUT_ERROR = global.SUNJECT_EXCE
      textTemplate = 'textTemplate'
      clickPanel = 2
      resp = false
    }
  }
  const form = {
    nameTemplate,
    textTemplate,
    descTemplate
  }
  const response = {
    nameTemplate,
    textTemplate,
    descTemplate,
    clickPanel,
    form,
    error: resp
  }
  return response
}

const validateDetailWhat = (info) => {
  let resp = true
  if (!info.text) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    resp = false
  }
  return resp
}

const validateDetail = (info) => {
  let resp = true
  if (!info.nameRem && !info.descRem) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    resp = false
  } else if (!info.nameRem) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    resp = false
  } else if (!info.descRem) {
    global.LABEL_INPUT_ERROR = global.CAMPOS_OBLIGATORIOS
    global.ERROR = 1
    resp = false
  }
  return resp
}

export default {
  validate,
  validateDetail,
  validateSms,
  validateWhat,
  validateDetailWhat,
  validateDetailSms
}
