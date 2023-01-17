import React, { useEffect, useState } from 'react'

const AppFooter = () => {
  const [year, setYear] = useState([])
  useEffect(() => {
    const today = new Date()
    setYear(today.getFullYear())
  }, [])
  return (
    <>
      <div className="footer-master">{global.FOOTER} {year}</div>
    </>
  )
}

export default AppFooter
