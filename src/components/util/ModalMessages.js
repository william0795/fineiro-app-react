/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalMessages = (props) => {
  const hideModal = () => {
  }
  return (
      <>
          <Modal show={props.isOpen} onHide={hideModal}>
              <Modal.Header>
                  <Modal.Title>{props.header}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.body}</Modal.Body>
              <Modal.Footer>
                  <Button onClick={hideModal}>Cancel</Button>
              </Modal.Footer>
          </Modal>
      </>
  )
}

export default ModalMessages
