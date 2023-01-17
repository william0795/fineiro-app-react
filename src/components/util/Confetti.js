import React from 'react'
import '../../scss/_confetti.scss'
import Confet from 'react-confetti'

const Confetti = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  return (
    <Confet
      width={width}
      height={height}
    />
  )
}

export default Confetti
