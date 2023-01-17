/* eslint-disable prefer-const */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import '../../scss/_toast.scss'
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const Toast = ({ message, tiempo = 4000, codigo = 400 }) => {
   let icono = 'error';
   const SweetAlert = withSwalInstance(swal);

    useEffect(() => {
        showToast()
    }, [])
   const showToast = () => {
        if(codigo >= 200 && codigo < 300) {
            icono = 'success';
          }else if(codigo === 401 || codigo >= 500) {
            icono = 'error';
          }else{
            icono = 'warning';
          }
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: tiempo,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: icono,
            title: message
          })
      }
  return (
    <>
    </>
  )
}

export default Toast
