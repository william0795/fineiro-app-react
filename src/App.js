/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Welcome from './components/welcome/Welcome'
import './global'
import ButtonCampaign from '../src/components/util/ButtonCampaign'

function App () {
  const [user, setUser] = useState(localStorage.getItem('loggedUser'))
  useEffect(() => {
    const loggedUserJson = localStorage.getItem('loggedUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
    }
  }, [])
  
  // setTimeout(function () {
  //   refreshTokenVerifyInactivity()
  // }, 1000 * 60 * 60)

  // const refreshTokenVerifyInactivity = async (event) => {
  //   const resp = await globalServices.refreshTokenInactivity({})
  //   if (resp.expire_date) {
  //     await globalServices.logOut({})
  //   }
  // }
  return (
    <>
      {
        user === null
          ? <Router>
            <Routes>
              <Route path={ global.ROUTE_LOGIN } caseSensitive={false} element={<Login />} />
            </Routes>
          </Router>
          : <Router>
            <Routes>
              <Route path={ global.ROUTE_WELCOME } name="Home" element={<Welcome />} />
            </Routes>
          </Router>
      }
      <ButtonCampaign />
    </>
  )
}

export default App
