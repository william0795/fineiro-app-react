/* eslint-disable indent */
/* eslint-disable semi */
import React, { useState } from 'react'
import IdleTimeOutModal from '../util/IdleTimeOutModal';
import IdleTimerContainer from './IdleTimerContainer';
import globalServices from '../../services/global'

const InactivityComponent = () => {
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [isTimedout, setIsTimedout] = useState(false);

 const handleClose = () => {
    setShowTimeoutModal(false);
    setIsTimedout(false);
  };

  const timeoutModalHandler = () => {
    setShowTimeoutModal(true);
  };

  const logoutHandler = () => {
    console.log('logout')
    globalServices.logOut({})
    setShowTimeoutModal(false);

    // sessionStorage.removeItem("updatedQues");
  };

  return (
    <div>
       <IdleTimeOutModal
        showModal={showTimeoutModal}
        handleClose={handleClose}
        handleLogout={logoutHandler}
      />
    <IdleTimerContainer
      handleLogout={logoutHandler}
      timeout={isTimedout}
      timeoutModal={timeoutModalHandler}
      timedoutHandler={(bool) => {
        setIsTimedout(bool);
      }}
    />
    </div>
  )
}

export default InactivityComponent
