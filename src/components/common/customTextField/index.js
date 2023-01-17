/* eslint-disable react/prop-types */
import { useState } from "react";
import './styles.scss'

// Input Password Component
export default function CustomTextField(props) {

    var hasClassError = props.error ? 'segment-inner-error' : 'segment-inner'
    var hasClassInnerError = props.error ? 'segment-inner-post-error' : 'segment-inner-post'
    
    var spanIcon =
        <div className={hasClassInnerError}>
            <span className={props.icon}></span>
        </div>
    let span
    if(props.icon != null) {
        span = spanIcon
    }
    var disabled = 'true'
    if(props.disabled) {
        disabled = 'false'
    }
    return (
        <div className='segment'>
            <div className='container-text'>
                <input className={hasClassError} type="text" disabled={disabled} value={props.text} />
                {span}
            </div>
        </div>
    );
}