/* eslint-disable react/prop-types */
import React from 'react'
import './styles2.css'

export default function CustomButton ({
  color = null,
  name = 'name',
  size = 'medium',
  type = 'primary',
  shape = null
}
) {
  let styleType = ''
  let styleSize = ''
  let styleShape = ''
  switch (size) {
    case 'small':
      styleSize = 'custom-button-small'
      break
    case 'medium':
      styleSize = 'custom-button-medium'
      break
    case 'large':
      styleSize = 'custom-button-large'
      break
    case 'xlarge':
      styleSize = 'custom-button-xlarge'
      break
    default:
      styleSize = 'custom-button-medium'
      break
  }

  switch (type) {
    case 'primary':
      styleType = 'custom-button-primary'
      break
    case 'accent':
      styleType = 'custom-button-accent'
      break
    default:
      styleType = 'custom-button-primary'
      break
  }

  switch (shape) {
    case 'square':
      styleShape = 'custom-button-square'
      break
    case 'circle':
      styleShape = 'custom-button-circle'
      break
    default:
      styleShape = 'custom-button-circle'
      break
  }

  let innerStyle = {}
  if (color != null) {
    innerStyle = { backgroundColor: color }
  }

  return (
        <div className="button-container" >
            <button className={`custom-button ${styleSize} ${styleType} ${styleShape}`} style={{ ...innerStyle }}>
                {name}
            </button>
        </div>
  )
}
