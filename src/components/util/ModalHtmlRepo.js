/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import '../../scss/_modal-campa.scss'
export default function ModalHtmlRepo (props) {
  const textData = '<ul><li><a href="#">Oh, me gusta estar junto al mar</a></li><li><a href="#">Oh, me gusta estar junto al mar</a></li>' +
        '<li><a href="#">Aunque en el norte de Inglaterra</a></li>' +
        '<li><a href="#">Nunca deja de llover</a></li>' +
        '<li><a href="#">Oh, bueno...</a></li>' +
        '</ul>.\n' +
        'Aenean feugiat, justo ut luctus fringilla, erat elit cursus odio, eget aliquet dui mauris non mi. Fusce eleifend turpis justo, et porta turpis tincidunt sodales.'
  const handleClose = () => () => {
  }

  const copyHtml = (event) => {
    alert($('#' + event).html())
  }

  return (
        <>
            <Dialog fullWidth={true}
                maxWidth={'lg'} open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className={props.color} id="alert-dialog-title"><b>{props.header}</b></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <hr />
                        <div className="mb-12 panel-group panel_campania">
                            <div className='row col-md-12'>
                                <div className="row">
                                    <div className="col-12">
                                        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="card">
                                                                <div id="html1"
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: textData
                                                                    }}></div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title" onClick={() => copyHtml('html1')}><i className="fas fa-copy"></i> Copiar HTML</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="card">
                                                                <div id="html1"
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: textData
                                                                    }}></div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title" onClick={() => copyHtml('html1')}><i className="fas fa-copy"></i> Copiar HTML</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="card">
                                                                <div id="html1"
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: textData
                                                                    }}></div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title" onClick={() => copyHtml('html1')}><i className="fas fa-copy"></i> Copiar HTML</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="card">
                                                                <div id="html1"
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: textData
                                                                    }}></div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title" onClick={() => copyHtml('html1')}><i className="fas fa-copy"></i> Copiar HTML</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="card">
                                                                <div id="html1"
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: textData
                                                                    }}></div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title" onClick={() => copyHtml('html1')}><i className="fas fa-copy"></i> Copiar HTML</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                         <div className="col-md-6 mb-3">
                                                            <div className="card">
                                                                <div id="html1"
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: textData
                                                                    }}></div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title" onClick={() => copyHtml('html1')}><i className="fas fa-copy"></i> Copiar HTML</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
