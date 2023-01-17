/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react'
import '../../scss/_banner.scss'
import imgLogin1 from '../../assets/img/login_icon1.png'
import imgLogin2 from '../../assets/img/login_icon2.png'
import imgLogin3 from '../../assets/img/login_icon3.png'
import $ from 'jquery'
import bannerLogin from '../../static/bannerLogin.json'

export default function Login () {
  const [bannerTitle, setBannerTitle] = useState('')
  const [bannerSubtitle, setBannerSubtitle] = useState('')
  const [bannerImage, setBannerImage] = useState('')
  useEffect(() => {
    const banner = bannerLogin[0]
    setBannerTitle(banner.title)
    setBannerSubtitle(banner.subtitle)
    setBannerImage(imgLogin1)
    $('#img0').removeClass()
    $('#img0').addClass('banner-current-index0 banner-current-index bannerSelect banner-index')
    $('#btn').removeClass()
    $('#btn').addClass('btn0')
    initBanner()
  }, [])

  const initBanner = () => {
    setTimeout(() => {
        changeAutomaticBanner()
    }, 15000);
  }

  function changeAutomaticBanner () {
    if ($('#img0').hasClass('banner-current-index')) {
      $('#img1').click()
    } else {
      if ($('#img1').hasClass('banner-current-index')) {
        $('#img2').click()
      } else {
        $('#img0').click()
      }
    }
  }

  const clickBannerIndex = (id) => {
    const banner = bannerLogin[id]
    const idImg = '#img' + id

    setBannerTitle(banner.title)
    setBannerSubtitle(banner.subtitle)
    if (id === 0) {
      setBannerImage(imgLogin1)
    } else if (id === 1) {
      setBannerImage(imgLogin2)
    } else {
      setBannerImage(imgLogin3)
    }
    $('.bannerSelect').removeClass('banner-current-index')
    $(idImg).removeClass()
    $(idImg).addClass('banner-current-index' + id + ' banner-current-index bannerSelect banner-index')
    $('#banner').removeClass()
    $('#banner').addClass('banner' + id)
    $('#backSelect').removeClass()
    $('#backSelect').addClass('background' + id)
    $('#btnLogin').removeClass()
    $('#btnLogin').addClass('btn' + id)
    initBanner()
  }

  return (
    <>
    <div className="infoContainer">
      <div className="banner0" id="banner">
          <p><b>{bannerTitle}</b></p>
          <p className='banner-subtitle'><b>{bannerSubtitle}</b></p>
          <div className="banner-index" >
              <div className="banner-current-index bannerSelect" onClick={() => { clickBannerIndex(0) }} id="img0"></div>
              <div className=" bannerSelect" onClick={() => { clickBannerIndex(1) }} id="img1"></div>
              <div className=" bannerSelect" onClick={() => { clickBannerIndex(2) }} id="img2"></div>
          </div>
      </div>
    </div>
    <img className="loginbannerimage" src={bannerImage} alt="banner"></img>
    </>
  )
}
