/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
const Campaign = async (infoData) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    headers.Authorization = "Bearer " + loggedUser.token;
    headers.Canal = global.CANAL;
    const data = {
      campana: infoData.nameCampania,
      descripcion: infoData.descripcion,
    };
    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const dataResp = await fetch(global.CREATECAMPINGSERVICE, requestOptions);
    const resp = await dataResp.json();
    if (resp.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = resp.code;
      window.localStorage.setItem('message', global.PROCESO_OK)
      window.localStorage.setItem('code', resp.code)
    } else {
      global.LABEL_INPUT_ERROR =
      resp.message
      global.CODEERROR = resp.code;
      window.localStorage.setItem('message', resp.message)
      window.localStorage.setItem('code', resp.code)
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR,
      data: resp.data,
    };
    return response;
  } catch (editor) {
    global.LABEL_INPUT_ERROR =
    global.LOAD_CAMPAIGN_FALSE_ERROR
    global.ERROR_LABEL = 500
  }
};

const getCampaignTable = async (credenciales) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    headers.Authorization = "Bearer " + loggedUser.token;
    const userId = loggedUser.idUsuario;
    headers.Canal = global.CANAL;
    const requestOptions = {
      method: "GET",
      headers,
    };
    const resp = await fetch(
      global.CAMPAIGN_USER + userId + "/1" + '?campana=',
      requestOptions
    );
    const items = await resp.json();
    if (items.code === 200) {
      if (items.data.length > 0) {
        global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN
        global.CODEERROR = items.code
      } else {
        global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN_WITHOUTINFO
        global.CODEERROR = items.code
      }
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN_FALSE_ERROR
      global.CODEERROR = items.code
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR,
    };
    return response;
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN_FALSE_ERROR
    global.CODEERROR = global.CORREERRORSET
  }
};

const getCampaignSeach = async (credenciales) => {
  const headers = { "Content-Type": "application/json" };
  const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  headers.Authorization = "Bearer " + loggedUser.token;
  const userId = loggedUser.idUsuario;
  const name = credenciales.search;
  headers.Canal = global.CANAL;
  const requestOptions = {
    method: "GET",
    headers,
  };
  const resp = await fetch(
    global.CAMPAIGN_USER + userId + "/1" + '?campana=' + name,
    requestOptions
  );
  const items = await resp.json();
  if (items.code === 200) {
    if (items.data.length > 0) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = items.code
    } else {
      global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN_WITHOUTINFO
      global.CODEERROR = '1'
    }
  } else {
    global.LABEL_INPUT_ERROR = items.message
    global.CODEERROR = items.code
  }
  const response = {
    data: items,
    header: global.HEADER,
    body: global.BODY,
    url: global.REDIRECT_URL,
    error: global.CODEERROR
  };
  return response;
};

const deleterCampaign = async (infoId) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    headers.Authorization = "Bearer " + loggedUser.token;
    const idCamp = infoId.id;
    headers.Canal = global.CANAL;
    const requestOptions = {
      method: "DELETE",
      headers,
    };
    const resp = await fetch(global.CAMPAIGN_DELETE + idCamp, requestOptions);
    const items = await resp.json();
    if (items.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      global.CODEERROR = items.code
      window.localStorage.setItem('message', global.PROCESO_OK)
      window.localStorage.setItem('code', items.code)
    } else {
      global.LABEL_INPUT_ERROR =
        items.message
      global.CODEERROR = items.code
      window.localStorage.setItem('message', items.message)
      window.localStorage.setItem('code', items.code)
    }
    const response = {
      data: items,
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    };
    return response;
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN_ERROR
    global.CODEERROR = global.CODEERRORSET;
    window.localStorage.setItem('message', global.LOAD_CAMPAIGN_ERROR)
    window.localStorage.setItem('code', global.CODEERRORSET)
  }
};

const editCampaign = async (infoData) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    headers.Authorization = "Bearer " + loggedUser.token;
    const userId = loggedUser.idUsuario;
    const idCamp = infoData.id;
    headers.Canal = global.CANAL;
    const data = {
      campana: infoData.nameCampania,
      descripcion: infoData.descripcion,
    };
    const requestOptions = {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    };
    const resp = await fetch(
      global.CAMPAIGN_EDIT + idCamp + "/" + userId + "/1",
      requestOptions
    );
    const items = await resp.json()
    if (items.code === 200) {
      global.LABEL_INPUT_ERROR = global.PROCESO_OK
      window.localStorage.setItem('message', global.PROCESO_OK)
      window.localStorage.setItem('code', items.code)
    } else {
      global.LABEL_INPUT_ERROR =
      items.message
      global.ERROR_LABEL = resp.code
      window.localStorage.setItem('message', items.message)
      window.localStorage.setItem('code', items.code)
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.CODEERROR
    };
    return response;
  } catch (editor) {
    global.LABEL_INPUT_ERROR = global.LOAD_CAMPAIGN_ERROR
    global.CODEERROR = global.CODEERRORSET;
    window.localStorage.setItem('message', global.LOAD_CAMPAIGN_ERROR)
    window.localStorage.setItem('code', global.CODEERRORSET)
  }
};

const programacion = async (infoData) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    const data = infoData.datt;
    headers.Authorization = "Bearer " + loggedUser.token;
    headers.Canal = global.CANAL;
    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const dataResp = await fetch(global.PROGRAMATION_API, requestOptions);
    const resp = await dataResp.json();
    if (resp.success) {
      global.LABEL_INPUT_ERROR = "Programacion exitosa";
      global.ERROR_LABEL = "success";
      global.ERROR = 0;
    } else {
      global.LABEL_INPUT_ERROR =
        "No se puedo programar la campaña, intente en unos momentos";
      global.ERROR_LABEL = "error";
      global.ERROR = 1;
    }
    const response = {
      header: global.HEADER,
      body: global.BODY,
      url: global.REDIRECT_URL,
      error: global.ERROR,
    };
    return response;
  } catch (editor) {
    global.LABEL_INPUT_ERROR =
      "No se pudo crear la campaña, intente en unos momentos";
    global.ERROR_LABEL = "error";
  }
};
export default {
  Campaign,
  getCampaignTable,
  getCampaignSeach,
  deleterCampaign,
  editCampaign,
  programacion,
};
