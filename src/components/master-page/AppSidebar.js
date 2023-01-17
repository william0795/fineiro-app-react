/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */

import React, { useEffect, useState } from 'react'
import '../../scss/_sidebar.scss'
import DataSidebar from '../../static/menuSidebar.json'
import DataPath from '../../static/rutasPath.json'
import $ from 'jquery'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState([])
  const [index, setIndex]=useState()
  useEffect(() => {
    const data = DataSidebar
    setSidebar(data)
    setPathData();
    console.log('entra use efect menu');
  }, [])

  const setPathData = () => {
    let path= window.location.pathname;
    DataPath.forEach((val) => {
      if (path === val.ruta){
        setIndex(val.index)
        console.log('val', val)
      }
    })
    console.log('location', window.location.pathname);
  }

  return (
    <section>
      <nav id="sidebar" className="active menu-fix">
        <div className="navbar-collapse collapse show" id="navbarSupportedContent">
          <ul className="list-unstyled components mb-5">
            {
              sidebar.map((val, key) => {
                return (
                  val.index === index
                    ? <React.Fragment key={val.id}>
                      <li onClick={setPathData} className={val.id + 'Id selected active'}>
                        <Link to={val.href}>
                            <div className={val.id + 'ClassBox selected square-box'}>
                              <div className={val.id + 'ClassBoxContent selected square-content'}>
                                <span className={val.classSpan + ' selected notify-color'}></span>
                              </div>
                            </div>
                            <div className='no-success-panel'><div className='active-button' id='lista'>Listas</div></div>
                            <div className={'optLabelInfo div-info-active ' + val.classInfo}>
                              <label className='label-info'>{val.name}</label>
                            </div>
                        </Link>
                        
                      </li>
                    </React.Fragment>
                    : <React.Fragment key={val.id}>
                      <li onClick={setPathData} className={val.classLi}>
                        <Link to={val.href}>
                            <div className={val.classBox}>
                              <div className={val.classBoxContent}>
                                <span className={val.classSpan}></span>
                              </div>
                            </div>
                            <div className={'optLabelInfo div-info-inactive ' + val.classInfo}>
                              <label className='label-info'>{val.name}</label>
                            </div>
                        </Link>
                      </li>
                    </React.Fragment>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </section>
  )
}
export default Sidebar
