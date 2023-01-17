/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalMessagesUtil = (props) => {
  return (
      <>
          <Modal show={props.isOpen} className='modal-msj-util justify-content-center' id='modal-contents'>
              <Modal.Header id='mheader'>
                  <Modal.Title className='notify-color text-center justify-content-center '>{props.header}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.body}</Modal.Body>
              <Modal.Footer id='mfoter'>
                  <Button id='modal-button-color' onClick={props.cancelar}>No</Button>
                  <Button id='modal-button-color' onClick={props.aceptar}>Si</Button>
              </Modal.Footer>
          </Modal>
      </>
  )
}

export default ModalMessagesUtil
