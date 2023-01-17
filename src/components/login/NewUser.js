import '../../scss/_login.scss'
import React from 'react'
import Banner from './Banner'
import ImgLog from '../util/imgNotify'
import Footer from './Footer'
import FormCreateNewUser from '../../views/forms/CreateNewUserForm'

export default function NewUser () {
  return (
    <div className="background0" id="backSelect">
      <ImgLog />
      <div className="backgroundCircle"></div>
      <div className="loginContainer container-fluid container-user">
        <Banner />
        <div className="create-user-form">
            <FormCreateNewUser />
        </div>
      </div>
      <Footer />
    </div>
  )
}
