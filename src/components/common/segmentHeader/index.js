/* eslint-disable react/prop-types */
import React from 'react'
import './styles.scss'

export default function SegmentHeader ({ style, text }) {
  return (
        <div className='segment' style={{ ...style }}>
            <div className='segmentInner' style={{ ...style }}>
                {text}
            </div>
        </div>
  )
}
