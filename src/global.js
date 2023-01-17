/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */

// Global var
global.LABEL_ERROR_TELEFONO = 'El teléfono que ingresó es incorrecto'
global.LENGTH_CORREO = 50
global.LENGTH_PAIS = 50
// message
global.MODAL_REDIRECT_TEMPLATE = 'La plantilla se guardó. ¿Desea salir del editor?'
global.DELETE_BTN = 'limpiar plantilla'
global.CODE_BTN = 'código'
global.SAVE_BTN = 'guardar diseño'
global.ATTACH_BTN = 'adjuntos'

// btn
global.ACCEPT = 'Aceptar'
global.CANCEL = 'Cancelar'
global.CLOSE = 'Cerrar'

// URL REDIS
global.URL_REDIS = 'http://desa.goitsa.me:8991/goit-redis-manager/v1/'

// URL NOTIFY API
global.URL_NOTIFY = 'http://desa.goitsa.me:8990/goit-notify-api/v1/'

// SECURITY API
global.SECUTIRY_API = "http://desa.goitsa.me:8989/goit-security-api/v1/";
global.CANAL = "49a5f60a-9f56-4feb-bcf1-5377c6152ef8";
global.LOGIN_METHOD = global.SECUTIRY_API + "autenticacion/login";
global.LOGOUT_METHOD = global.SECUTIRY_API + "autenticacion/revocar-token";
global.REFRESH_METHOD = global.SECUTIRY_API + "autenticacion/refresh-token";
global.CREATE_USER = global.SECUTIRY_API + "usuario";
global.VALIDATE_USER = global.SECUTIRY_API + "usuario/activar-usuario/";
global.ROUTE_CREATE_USER_EMAIL =
global.SECUTIRY_API + "usuario/activar-usuario/enviar-mail/";
global.RESTORE_PASS = global.SECUTIRY_API + "usuario/restablecer-contrasenia/";
global.RESTORE_NEW_PASSWORD =
global.SECUTIRY_API + "usuario/cambiar-contrasenia/";

// TEMPLATES API
global.TEMPLATES_API = 'http://desa.goitsa.me:8990/goit-notify-api/v1/'
global.GET_PLANTILLAS = global.TEMPLATES_API + 'plantillas/getPlantilla'
global.GET_PLANTILLAS_USUARIO = global.TEMPLATES_API + 'plantillas/listarPorUsuario/'
global.GET_PLANTILLAS_TIPO = global.TEMPLATES_API + 'plantillas/listarPorTipo/'
global.GET_PLANTILLAS_NOMBRE = global.TEMPLATES_API + 'plantillas/listarPorNombre/'
global.EDIT_TEMPLATES_API = global.TEMPLATES_API + 'plantillas/editarPlantilla'
global.DELETE_TEMPLATES_API = global.TEMPLATES_API + 'plantillas/eliminarPlantilla'
global.CREATE_TEMPLATES_API = global.TEMPLATES_API + 'plantillas'
global.CREATE_TEMPLATES_API2 = global.TEMPLATES_API + 'plantillas/crearPlantillas/'
global.PUT_PLANTILLAS_FAVORITOS = global.TEMPLATES_API + 'plantillas/favorito/'
global.CREATE_DETALLE_TEMPLATES_API = global.TEMPLATES_API + 'notDetallesPlantilla'
global.ACTUALIZA_DETALLE_TEMPLATES_API = global.TEMPLATES_API + 'notDetallesPlantilla/actualizarDetallePlantilla'
global.GET_DET_PLANTILLAS = global.TEMPLATES_API + 'notDetallesPlantilla/getDetallePlantilla'
global.DELETE_DET_PLANTILLAS = global.TEMPLATES_API + 'notDetallesPlantilla/eliminarDetallePlantilla'
global.IMAGES_TEMPLATES_API = global.TEMPLATES_API + 'imagenes-usuario/imagenes-por-usuario'
global.SAVE_IMAGES_TEMPLATES_API = global.TEMPLATES_API + 'carga-archivo'
global.DUPLY_TEMPLATES_API = global.TEMPLATES_API + 'plantillas/duplicarPlantilla'
global.SEARCH_TEMPLATES_API = global.TEMPLATES_API + 'plantillas/listarPorNombre/Plantilla/'
global.SEARCH_FILES_API = global.TEMPLATES_API + 'adjunto-plantilla/adjuntos-por-plantilla'
global.DELETE_FILES_API = global.TEMPLATES_API + 'adjunto-plantilla'
global.DELETE_IMAGES = global.TEMPLATES_API + 'imagenes-usuario/'

// CAMPAIGN API
global.CAMPAIGN_API =
  "http://desa.goitsa.me:8990/goit-notify-api/v1/notCampanas/";
global.CAMPAIGN_USER = global.CAMPAIGN_API + "getCampanaLista/";
global.CAMPAIGN_NAME = global.CAMPAIGN_API + "getListaNombre/";
global.CAMPAIGN_EDIT = global.CAMPAIGN_API + "actualizarCampana/";
global.CAMPAIGN_DELETE = global.CAMPAIGN_API + "eliminarCampana/";
global.CREATECAMPINGSERVICE =
  "http://desa.goitsa.me:8990/goit-notify-api/v1/notCampanas";

// PROGRAMATION API
global.PROGRAMATION_API =
  "http://desa.goitsa.me:8990/goit-notify-api/v1/notProgramacionCampana";

// GRUPOS API
global.GRUPO_ID = global.URL_REDIS + 'grupos/getGroup'
global.GRUPO_CANAL = global.URL_REDIS + 'grupos/getGroups'
global.GRUPO_DESTINATARIO = global.URL_REDIS + 'grupos/grupo-destinatarios'
global.GRUPO_DESTINATARIOXTIPO = global.URL_REDIS + 'grupos/grupo-destinatariosXtipo'
global.GRUPO_DESTINATARIOXGRUPO = global.URL_REDIS + 'grupos/getDestinatarioXGrupos'
global.GRUPO_SEGMENTO_CREATE = global.URL_REDIS + 'grupos/grupo-segmento'
global.GRUPO_DESTINATARIO_SAVE = global.URL_REDIS + 'destinatario'
global.GRUPOS = global.URL_REDIS + 'grupos'
global.GRUPO_SEGMENTO_CONVIERTE = global.URL_REDIS + 'grupos/cambiar-tipo'
global.GRUPO_CLONAR = global.URL_REDIS + 'grupos/clonar-grupo'
global.DESTINATARIO_ID = global.URL_REDIS + 'destinatario/getDestinatariosXId'
global.GET_PARAMETROS_GRUPO = global.URL_REDIS + 'grupos/parametrosGenerales'

// DESTINATARIO API
global.DEST_API = 'http://desa.goitsa.me:8990/goit-notify-api/v1/'
global.DESTINATARIO_SAVE = global.DEST_API + 'destinatario'
global.GET_DESTINATARIOS_ERROR = global.DEST_API + 'destinatario/getDestinatariosFallidos'

global.SAVE_DEST_UNIT = global.URL_REDIS + 'destinatario/destinatarioUnitario'

// REPORT API
global.REPORT_API = "http://desa.goitsa.me:8992/goit-reporteria-api/v1/";
global.NOTSEND_REPORT =
  global.REPORT_API + "reporteria/mostrarNotfEnviadas";
global.DESP_REPORT = global.REPORT_API + "reporteria/despachados";
global.IN_REPORT = global.REPORT_API + "reporteria/ingresados";
global.DATEDESP_REPORT = global.REPORT_API + "reporteria/fechaDespachada";

// REPORT API DETAIL
global.DESP_REPORT_DETAIL = global.REPORT_API + "reporteria/detalleDespachas";
global.PRO_REPORT_DETAIL = global.REPORT_API + "reporteria/detalleProgramadas";
global.NOTSEND_REPORT_DETAIL = global.REPORT_API + "reporteria/detalleNotificaciones";
global.DATEDESP_REPORT_DETAIL = global.REPORT_API + "reporteria/detalleUltimaFecha";

// DASHBOARD API
global.SEND_NOTIFICATION = global.REPORT_API + 'reporteria/notfEnviadas'
global.SEND_CANAL_NOTIFICATION = global.REPORT_API + 'reporteria/notfEnviadasPorCanal'
global.WHATS_EFI = global.REPORT_API + 'reporteria/eficienciaWs'
global.SMS_EFI = global.REPORT_API + 'reporteria/eficienciaSms'
global.MAIL_EFI = global.REPORT_API + 'reporteria/eficienciaEmail'

global.TESTIMG = "/load/imgaLoad.php";

// CONTACT API
global.CONTACT_LISTCONTACT = global.URL_REDIS + "grupos/getGroups?tipoCanal=";

// DESUSCRIPCION API
global.DESUSCRIPCION = global.URL_NOTIFY + "listaGris/desuscripcion";

// routes
global.ROUTE_LOGIN = '*'
global.ROUTE_LOGIN_BASIC = 'login'
global.ROUTE_WELCOME = 'bienvenido'
global.ROUTE_HOME = '*'

// Global var
global.USER_ID = ''
global.RETORNO = ' Programación de campañas'
global.HEADER = ''
global.BODY = ''
global.ERROR = 1
global.ERROR_LABEL = ''
global.EXPIRE_DATE = 1
global.REDIRECT_URL = ''
global.WELCOME = 'Bienvenido'
global.WELCOME_STRING = 'Por favor ingrese su usuario y contraseña'
global.USERNAME = 'Usuario o correo'
global.PASSWORD = 'Contraseña'
global.RESTORE_PASSWORD = 'Nueva contraseña'
global.FORGOT = 'Olvidé mi Contraseña'
global.NEW_USER = '¿No tienes cuenta?'
global.FORGOTTEXT = 'Restablece tu contraseña'
global.FORGOTTEXTP = 'Ingresa tu correo electrónico'
global.COMEBACKLOGIN = 'Volver al Login'
global.SENDPASS = 'Recuperar'
global.FOOTER = 'Desarrollado por GoIt S.A. - ©Copyright '
global.OOPS = '¡Ups!'
global.OOPS_HEARD = 'Olvidaste la contraseña'
global.OOPS_STRING = 'Por favor ingresa tu email para que puedas restablecer tu contraseña.'
global.RESTORE = 'Restablece tu contraseña'
global.RESTORE_STRING = 'Ingresa tu nueva contraseña'
global.ERROR_TRYCATCH = 'Ocurrio un error, intentelo en unos momentos por favor.'
global.DATE_SEPARATOR = '-'
global.HOUR_SEPARATOR = ':'
global.FIELD = ''
global.INPUT_FIELD = ''
global.INPUT_FIELD = ''
global.LABEL_INPUT_ERROR = ''
global.LABEL_EMPTY_ERROR = 'Por favor ingrese los campos obligatorios.'
global.LABEL_EMPTY_ERROR_CRITERIO = 'Los campos del criterio son obligatorios'
global.LABEL_MAX_LENGTH_ERROR = 'El campo no puede exceder de '
global.LABEL_MIN_LENGTH_ERROR = 'El campo no puede ser menor de'
global.LABEL_ERROR_PASS = 'contraseñas no coinciden'
global.LABEL_ERROR_EMAIL = 'Por favor ingrese un correo válido.'
global.LENGTH_PHONE_ID = 10
global.LENGTH_NAME_LAST = 100
global.LENGTH_PASS = 45
global.MESSAGES_CREATE_USER = 'Consulta tu email con el link de verificación si el mensaje no se encuentra en tu bandeja de entrada revisa tu carpeta de Spam o correos no deseados.'
global.CLOSE_MODAL = false
global.LINK_EMAIL = 'Reenviar email de verificación'
global.MESSAGES_ALERT = 'Debe tener combinación de letras [Aa-Zz], minimo 6 caracteres y al menos un dígito. NO puede tener otros símbolos.'
global.NAMECAMPANA = ''
global.CODEERROR = ''
global.CODEERRORSET = '400'
global.ERROR_SERVICE_OFF = 'Lo sentimos el servicio no está disponible ahora, intenta en unos minutos. Si el problema persiste comunícate con el área técnica.'
// message
global.HAVECAMPAIGN = 0
global.MODAL_HEAD_WARNING = 'Advertencia'
global.MODAL_HEAD_ERROR = 'Error'
global.MODAL_HEAD_SUCCESS = 'Exito'
global.MODAL_BODY_SUCCES = 'Bienvenido '
global.MODAL_HEAD_DELETE_TEMPLATE = 'Eliminar la plantilla'
global.MODAL_DELETE_TEMPLATE = '¿Está seguro de eliminar la plantilla?'
global.MODAL_HEAD_CANCEL_TEMPLATE = 'Cancelar la plantilla'
global.MODAL_CANCEL_TEMPLATE = '¿Está seguro de cancelar la plantilla?'
global.MODAL_ELIM_LISTA = '¿Está seguro de eliminar la lista?'
global.MODAL_ELIM_SGEMENTO = '¿Está seguro de eliminar el segmento?'
global.MODAL_ELIM_DESTINATARIO = '¿Está seguro de eliminar el contacto?'
global.MODAL_CONV_SEGMENTO = '¿Está seguro de convertir el segmento a Lista Principal?'
global.MODAL_CLONAR_LISTA = '¿Está seguro de clonar la lista?'
global.MODAL_HEAD_DELETE_FILE = 'Eliminar adjunto'
global.MODAL_DELETE_FILE = '¿Está seguro de eliminar el adjunto de la plantilla?'
global.FILES = []

// btn
global.ACCEPT = 'Aceptar'
global.CANCEL = 'Cancelar'
global.CLOSE = 'Cerrar'

// text for TemplatesHistory
global.TYPE_TEMPLATE = 'Tipo de Plantilla'
global.CREATE_DATE = 'Fecha de creación'
global.CREATE_TEMPLATE_MAIL = 'Plantilla mail'
global.CREATE_TEMPLATE_SMS = 'Plantilla SMS'
global.CREATE_TEMPLATE_WHATS = 'Plantilla whatsapp'
global.TEMPLATE_SEARCH = 'Buscar:'
global.TEMPLATE_TITLE = 'Mis plantillas'
global.TEMPLATE_FILTER = 'Filtrar por:'
global.TEMPLATE_FILTER_ALL = 'Todos'
global.TEMPLATE_FILTER_SMS = 'SMS'
global.TEMPLATE_FILTER_MAIL = 'Mail'
global.TEMPLATE_FILTER_WHATSAPP = 'Whatsapp'
global.TEMPLATE_ORDER = 'Ordenar por:'
global.TEMPLATE_NOT_INFO = 'No se encontraron registros de Plantillas'

global.REQUIRED = '*'

// mensajes Generales
global.PROCESO_OK = '¡Proceso realizado con éxito!'
global.CAMPOS_OBLIGATORIOS = 'Por favor ingrese los campos obligatorios.'
global.MAIL_ERROR_MESSAGE = 'Por favor ingrese un correo válido.'
