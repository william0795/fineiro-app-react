import React from 'react'
const Footer = () => {
  return (
    <div className="footer">{global.FOOTER}{(new Date().getFullYear())}</div>
  )
}

export default Footer
