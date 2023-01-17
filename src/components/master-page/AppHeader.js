import React, { useState } from 'react'
import globalServices from '../../services/global'
import '../../scss/_navbar.scss'
import $ from 'jquery'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import userImg from '../../images/generic-user-icon.jpg'
import imgLogo from '../../assets/img/logoBicolor1.png'
const NavBar = () => {
  const [panelCollapse, setpanelCollapse] = useState(false)

  const logOutHandler = () => {
    globalServices.logOut({})
  }

  const menuHandler = (op) => () => {
    try {
      if (panelCollapse === false) {
        setpanelCollapse(true)
        $('#sidebar').removeClass()
        $('#sidebar').addClass('inactive menu-fix')
        $('#navBarId').removeClass('bg-light')
        $('#navBarId').addClass('bg-light-collapse')
        $('#template-content').removeClass()
        $('#template-content').addClass('container-master-collapse')
      } else {
        setpanelCollapse(false)
        $('#sidebar').removeClass()
        $('#sidebar').addClass('active menu-fix')
        $('#navBarId').removeClass('bg-light-collapse')
        $('#navBarId').addClass('bg-light')
        $('#template-content').removeClass()
        $('#template-content').addClass('container-fluid content-master')
      }
    } catch (e) {
    }
  }
  const routeDashboard = () => {
    window.location.href = global.ROUTE_DASHBOARD
  }
  return (
    <>
    <div className='header-content'>
      <nav id="navBarId" className="header-menu navbar navbar-icon-top navbar-expand-lg navbar-dark bg-light ml-0">
      <img onClick={routeDashboard} src={imgLogo} alt="logo" />
            <div onClick={menuHandler(1)} id="sidebarCollapse" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars collapseButton yellow-color"></i>
            </div>

      <div className="alert-footer-master-top-rigth  error error-alert-hide">
        <Stack sx={{ width: '40%' }} spacing={2}>
          <Alert variant="outlined" severity="error">
            <label className='error-alert'></label>
          </Alert>
        </Stack>
      </div>
      <div className="alert-footer-master-top-rigth warning warning-alert-hide">
        <Stack sx={{ width: '40%' }} spacing={2}>
          <Alert variant="outlined" severity="warning">
            <label className='warning-alert'></label>
          </Alert>
        </Stack>
      </div>
      <div className="alert-footer-master-top-rigth success success-alert-hide">
        <Stack sx={{ width: '40%' }} spacing={2}>
          <Alert variant="outlined" severity="success">
            <label className='success-alert'></label>
          </Alert>
        </Stack>
      </div>
            <div className="collapse navbar-collapse">
                <form className="form-inline my-2 my-lg-0">
                    <div className="collapse navbar-collapse rigth-menu">
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown">
                                <div className="form-inline" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <a className="nav-link" href="/#" >
                                        <img src={userImg} id="img-user" alt="ml" width="40" height="40" />
                                    </a>
                                    <div>
                                        <label>{localStorage.getItem('name')}</label>
                                        <label>{localStorage.getItem('rol')}</label>
                                    </div>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href={global.ROUTE_DASHBOARD}>Dashboard</a>
                                    <a className="dropdown-item" href={global.ROUTE_LOGIN_BASIC} onClick={() => logOutHandler()}>Cerrar sesión</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </nav>
    </div>
    </>
  )
}

export default NavBar
