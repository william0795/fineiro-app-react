import React from 'react'
import '../../scss/_confetti.scss'

const ButtonCampaign = () => {
  return (
    <>
      {
        window.location.pathname !== global.ROUTE_WELCOME &&
        window.location.pathname !== global.ROUTE_CREATECAMPAIGN &&
        <>
        </>
      }
    </>
  )
}

export default ButtonCampaign
