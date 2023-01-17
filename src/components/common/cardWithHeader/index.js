/* eslint-disable react/prop-types */
import React from 'react'
import './styles.scss'

export default function CardWithHeader ({ children, style, text }) {
  return (
        <div className='col-lg-12 plan-card'>
            <div className='rounded-15'>
                <div className='title-bar' style={{ ...style }}>
                    {text}
                </div>
                <div className='title-body'>
                    <div className='title-body-principal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan lectus tellus, sed malesuada ipsum mattis quis. Sed iaculis mi et eleifend pharetra. Phasellus vulputate felis quam, molestie porta massa volutpat interdum. </div>
                    {children}
                </div>
            </div>
        </div>
  )
}
