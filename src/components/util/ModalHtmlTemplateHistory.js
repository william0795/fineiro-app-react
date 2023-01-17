/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-campa.scss'
import '../../scss/_whatsappTemplate.scss'
import '../../scss/_smsTemplates.scss'
import imgLogo from '../../assets/img/logoBicolor1.png'
import imgVerify from '../../assets/img/came.png'
export default function ModalHtmlTemplateHistory (props) {
  const handleClose = () => {
    window.scrollTo(0, 600)
  }

  return (
        <>
            <Dialog fullWidth={true}
                maxWidth={props.size} open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            props.type === 'H'
                              ? <body className='p-5'>{props.body}</body>
                              : props.type === 'T'
                                ? <div className="page">
                                        <div className="marvel-device nexus5 whatsapp">
                                            <div className="top-bar"></div>
                                            <div className="sleep"></div>
                                            <div className="volume"></div>
                                            <div className="camera"></div>
                                            <div className="screen">
                                                <div className="screen-container">
                                                <div className="status-bar-sms">
                                                        <div className="time"></div>
                                                        <div className="battery">
                                                            <i className="fa fa-battery fa-fa-whats"></i>
                                                        </div>
                                                        <div className="network">
                                                            <i className="fa fa-signal fa-fa-whats"></i>
                                                        </div>
                                                    </div>
                                                    <div className="chat">
                                                        <div className="chat-container">
                                                            <div className="user-bar-sms">
                                                                <div className="back">
                                                                    <i className="fa fa-arrow-left"></i>
                                                                </div>
                                                                <div className="name">
                                                                    <span>Notify</span>
                                                                </div>
                                                                <div className="status-bar-2">
                                                                    <div className="time"></div>
                                                                    <div className="battery">
                                                                        <i className="fa fa-phone fa-fa-whats"></i>
                                                                    </div>
                                                                    <div className="network">
                                                                        <i className="fa fa-ellipsis-v fa-fa-whats"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation-sms">
                                                                <div className="conversation-container-sms">
                                                                    <div className="container-sms">
                                                                        <div className="message-blue message">
                                                                        {props.body}
                                                                            <div className="">SMS 13:37</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <form className="conversation-compose">
                                                                    <div className="emoji">
                                                                    <i className="fa fa-paperclip"></i>
                                                                    </div>
                                                                    <input className="input-msg" name="input" placeholder="Mensaje" autoComplete="off" autoFocus></input>

                                                                    <button className="send">
                                                                        <div className="circle-sms">
                                                                            <i className="fa fa-envelope fa-fa-whats"></i>
                                                                        </div>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div className="page">
                                        <div className="marvel-device nexus5 whatsapp">
                                            <div className="top-bar"></div>
                                            <div className="sleep"></div>
                                            <div className="volume"></div>
                                            <div className="camera"></div>
                                            <div className="screen">
                                                <div className="screen-container">
                                                    <div className="status-bar">
                                                        <div className="time"></div>
                                                        <div className="battery">
                                                            <i className="fa fa-battery fa-fa-whats"></i>
                                                        </div>
                                                        <div className="network">
                                                            <i className="fa fa-signal fa-fa-whats"></i>
                                                        </div>
                                                    </div>
                                                    <div className="chat">
                                                        <div className="chat-container">
                                                            <div className="user-bar">
                                                                <div className="back">
                                                                    <i className="fa fa-arrow-left fa-fa-whats "></i>
                                                                </div>
                                                                <div className="avatar">
                                                                    <img src={imgLogo} alt="Avatar" className="avatarWhat" />
                                                                </div>
                                                                <div className="name">
                                                                    <span>Notify</span> <img src={imgVerify} alt="Avatar" className="avatarWhat" />
                                                                </div>
                                                                <div className="actions more">
                                                                    <i className="zmdi zmdi-more-vert"></i>
                                                                </div>
                                                                <div className="actions attachment">
                                                                    <i className="zmdi zmdi-attachment-alt"></i>
                                                                </div>
                                                                <div className="actions">
                                                                    <i className="zmdi zmdi-phone"></i>
                                                                </div>
                                                                <div className="status-bar-2">
                                                                    <div className="time"></div>
                                                                    <div className="battery">
                                                                        <i className="fa fa-phone fa-fa-whats"></i>
                                                                    </div>
                                                                    <div className="network">
                                                                        <i className="fa fa-ellipsis-v fa-fa-whats"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation">
                                                                <div className="conversation-container">
                                                                    <div className="message received">
                                                                    {props.body}
                                                                        <span className="metadata"><span className="time"></span></span>
                                                                    </div>
                                                                </div>
                                                                <form className="conversation-compose">
                                                                    <div className="emoji">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="smiley" x="3147" y="3209"><path fillRule="evenodd" clipRule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" fill="#7d8489" /></svg>
                                                                    </div>
                                                                    <input className="input-msg" name="input" placeholder="Mensaje" autoComplete="off" autoFocus></input>
                                                                    <div className="photo">
                                                                        <i className="fa fa-paperclip"></i>
                                                                    </div>
                                                                    <div className="photo">
                                                                        <i className="fa fa-camera"></i>
                                                                    </div>
                                                                    <button className="send">
                                                                        <div className="circle-what">
                                                                            <i className="fa fa-microphone fa-fa-whats"></i>
                                                                        </div>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        }

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="btn-close" onClick={props.handle} autoFocus>
                        {props.button}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
