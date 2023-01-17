import React, { useState, useEffect } from 'react'
import check from '../../assets/img/check.png'
import '../../scss/_welcome.scss'
import ModalCampaignCreateWizard from '../util/ModalCampaignCreateWizard'
import $ from 'jquery'
import campaign from '../../images/mail-campaign.png'
const CreateCapaign = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState('')
  const [label1, setLabel1] = useState('')
  const [label2, setLabel2] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [coloHeader, setColorHeader] = useState('')
  const [modalButton, setModalButton] = useState('')
  const [handle, setHandle] = useState()
  useEffect(() => {
    $('#btn-step3').prop('disabled', true)
    $('#btn-step2').prop('disabled', true)
  }, [])
  const handleClose = () => () => {
    setIsOpen(false)
  }
  const panel1Handler = () => {
    try {
      setIsOpen(true)
      setHeader('Crear nueva campaña')
      setLabel1('Nombre de la campaña')
      setHandle(handleClose)
      setLabel2('Objetivo de la campaña')
      setColorHeader()
      setModalButton('Crear')
      setHandle(handleClose)
      setInput1()
      setInput2()
    } catch (e) {}
  }
  return (
    <div className="col-sm-4 text-center step-data">
      <ModalCampaignCreateWizard isOpen={isOpen} header={header} label1={label1} input1={input1} label2={label2} input2={input2}
        color={coloHeader} button={modalButton} handle={handle} />
      <div className="form-inline-welcome" id='p-w-circle'>
        <div className="circle" id="stepCircle1">
          <div className="">1</div>
        </div>
        <h4 className="title-steps">Crear campaña</h4>
      </div>
      <div className='' id="panel1-select">
        <div className="text-center">
          <div>Define tu campaña, ponle </div>
          <div>nombre y continua con el proceso.</div>
          <div className='mt-4 ml-3'><img alt='' src={campaign} className='mt-[8px] ml-[50%]'/></div>
          <div className='btn btn-notify mt-5 ml-3' id="btn-step1">
                    <div className='mt-[8px] ml-[63%]' onClick={panel1Handler}>Ir a crear campaña
                    </div>
                </div>
        </div>
      </div>
      <div className='no-success-panel' id="panel1-success">
        <div className="text-center">
          <div className="ready">
            Listo <img alt="" src={check} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCapaign
