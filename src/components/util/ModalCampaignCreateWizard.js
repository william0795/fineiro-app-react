/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ModalSpiner from "../util/ModalSpiner";
import "../../scss/_modal-campa.scss";
import campaignServices from "../../services/campaign";
import $ from "jquery";
import Toast from "./Toast";
// eslint-disable-next-line space-before-function-paren
export default function ModalCampaignCreateWizard(props) {
  const [spiner, setSpiner] = useState(false);
  const [nameCampania, setNameCampania] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [isOpenToast, setIsOpenToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [codigoToast, setCodigoToast] = useState(400)
  const handleService = async (event) => {
    if (nameCampania === "") {
      $("#nameCamp").addClass("error");
      mostrarMensaje('400', global.LABEL_EMPTY_ERROR)
    } else {
      setSpiner(true);
      const info = await campaignServices.Campaign({
        nameCampania,
        descripcion,
      });
      if (info.error === 200) {
        setSpiner(false);
        $('#btn-step3').prop('disabled', false)
        window.localStorage.setItem('returnW', 0)
        $('#panel1-select').removeClass()
        $('#panel1-select').addClass('no-success-panel')
        $('#panel1-success').removeClass()
        $('#panel1-success').addClass('success-panel')
        $('#barNext').removeClass()
        $('#barNext').addClass('sheet-next')
        $('#circleNext').removeClass()
        $('#circleNext').addClass('sheets-next')
        $('.idshe').addClass('sheetss1')
        $('#stepCircle3').removeClass()
        $('#stepCircle3').addClass('circle')
        $('#stepCircle1').removeClass()
        $('#stepCircle1').addClass('circle-success')
        $('#percent').html('50%')
        $('#btn-step3').removeClass()
        $('#btn-step3').addClass('btn btn-notify')
        $(".close-x").click()
      }
    }
  };
  const handleClose = () => {
    window.scrollTo(0, 600);
    setSpiner(false);
  };
  const HandleError = () => {
    $("#error").html(" ");
    $("#nameCamp").removeClass("error");
  };
  const mostrarMensaje = (codigo, mensaje) => {
    setCodigoToast(codigo)
    setMessageToast(mensaje)
    setIsOpenToast(true)
    setTimeout(() => {
      setIsOpenToast(false)
    }, 1000)
  }
  return (
    <>
      <ModalSpiner opt={spiner} onClose={handleClose} />
      {isOpenToast && <Toast message={messageToast} codigo={codigoToast} />}
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={props.isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={props.color} id="alert-dialog-title">
          <b>{props.header}</b>
          <div className="close-x" onClick={props.handle}>
            x
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <hr />
            <label className="mt-3 ">
              <b>{props.label1} </b><b className='pink-color'>*</b>
              <span className="text-input name-input"></span>
            </label>
            <span
              className="text-input name-input every-label"
              id="error"
            ></span>
            <input
              value={nameCampania}
              onKeyDown={HandleError}
              type="text"
              onChange={({ target }) => setNameCampania(target.value)}
              minLength="20"
              maxLength="400"
              className="form-control item"
              pattern="Ingrese Nombre"
              id="nameCamp"
            ></input>
            <label>
              <b>{props.label2} </b>
              <span className="text-area"></span>
            </label>
            <textarea
              value={descripcion}
              type="text"
              onChange={({ target }) => setDescripcion(target.value)}
              minLength="0"
              maxLength="40000"
              className="form-control item"
            ></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="btn-close" onClick={handleService} autoFocus>
            {props.button}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
