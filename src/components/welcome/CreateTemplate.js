/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
import React, { useState, useEffect } from "react";
import check from "../../assets/img/check.png";
import ImgTest from "../../images/template.png";
import $ from "jquery";
import ModalWIzardTemplate from "../util/ModalWIzardTemplate";

const CreateTemplate = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState('')
  const [header, setHeader] = useState('')
  const [handle, setHandle] = useState()
  useEffect(() => {
    if (window.localStorage.getItem('returnW') === '0') {
      $('#btn-step3').prop('disabled', false)
      $("#panel1-select").removeClass();
      $("#panel1-select").addClass("no-success-panel");
      $("#panel1-success").removeClass();
      $("#panel1-success").addClass("success-panel1");
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
    }
    if (window.localStorage.getItem('returnW') === '1') {
      $('#btn-step3').prop('disabled', false)
      $('#panel3-select').removeClass()
      $('#panel3-select').addClass('no-success-panel')
      $('#panel3-success').removeClass()
      $('#panel3-success').addClass('success-panel')
      $('#barNext').removeClass()
      $('#barNext').addClass('sheet-next-last')
      $('#circleNext').removeClass()
      $('#circleNext').addClass('sheets-next-last')
      $('.idshe').addClass('sheetss2')
      $('#stepCircle3').removeClass()
      $('#stepCircle3').addClass('circle-success')
      $('#stepCircle2').removeClass()
      $('#stepCircle2').addClass('circle')
      $('#percent').html('75%')
      $('#btn-step2').removeClass()
      $('#btn-step2').addClass('btn btn-notify mt-5')

      $('#panel1-select').removeClass()
      $('#panel1-select').addClass('no-success-panel')
      $('#panel1-success').removeClass()
      $('#panel1-success').addClass('success-panel')
      $('#stepCircle1').removeClass()
      $('#stepCircle1').addClass('circle-success')
    }
    if (window.localStorage.getItem('returnW') === '2') {
      $('#barNext').removeClass()
      $('#barNext').addClass('sheets-next-last1')
      $('#circleNext').removeClass()
      $('#circleNext').addClass('sheets-next-final')
      $('.idshe').addClass('sheetss3')
      $('#percent').html('100%')
      $('#form-welcome').hide()
      $('#form-success').show()
    }
  }, [])

  const panel3Handler = () => {
    try {
      if ($('#btn-step3').is(':disabled') !== true) {
        setIsOpen(true)
        setColor('text-left')
        setHeader('Crear plantilla')
        setHandle(HandleClose)
      }
    } catch (e) {}
  };

  const HandleClose = () => () => {
    setIsOpen(false)
    // window.location.href = '/campaign'
  }
  return (
    <div className="col-sm-4 text-center step-data">
      <ModalWIzardTemplate isOpen= {isOpen} color= {color} header= {header} handle= {handle} />
      <div className="form-inline-welcome" id='p-w-circle'>
        <div className="circles" id="stepCircle3">
          <div className="">2</div>
        </div>
        <h4 className="title-steps">Crear plantilla</h4>
      </div>
      <div className="" id="panel3-select">
        <div className="ml-3 text-xs font-medium not-italic text-center mt-[13px] ml-[60px]">
        Crea o selecciona la plantilla
        </div>
        <div className="ml-3 mb-4 text-xs font-medium not-italic ml-[64px]">
        que mejor te convenga.
        </div>
        <div className="mt-4 mb-4 ml-3">
          <img alt="" src={ImgTest} />
        </div>
        <button
          type="button"
          className="btn btn-primary mt-4 ml-4"
          id="btn-step3"
          onClick={() => { panel3Handler() }}
        >
          <div className="mt-[8px] ml-[6px]">Ir a crear plantilla</div>
        </button>
      </div>
      <div className="no-success-panel" id="panel3-success">
        <div className="text-center">
          <div className="ready">
            Listo <img alt="" src={check} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
