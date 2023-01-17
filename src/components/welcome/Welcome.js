/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../../scss/_welcome.scss'
import '../../scss/_report.scss'
import Head from './Head'
import loginServices from '../../services/login'
import ReactPaginate from 'react-paginate';

export default function Welcome () {
const [load, setLoad] = useState('')
const [dataMov, setDataMov] = useState([])
const [maxVal, setMaxVal] = useState(10)
const [totalPage, setTotalPage] = useState(2)
const [initPage, setInitPage] = useState(0)
  useEffect(() => {
    if(load){
        console.log('hola')
    }
    setLoad('')
    dataMovimientos()
  }, [])

  const dataMovimientos = async () => {
    try {
        const userData = await loginServices.getMovimientos()
        console.log('userData', userData)
        setDataMov(userData.data.data)
      } catch (e) {
        console.log('e', e)
      }
  }
  const handlePageClick = (event) => {
    console.log('event.selected', event);
    if(event.nextSelectedPage !== undefined){
        setMaxVal((event.nextSelectedPage + 1) * 10)
    }
    console.log('event.nextSelectedPage', event.nextSelectedPage)
  }
  return (
    <div className="background">
        <Head></Head>
        <div className="container-welcome">
            <table className="table table-hover table-borderless table-sm mb-5 ">
            <thead className="thead">
                <tr>
                <th className="border border-left-0"> Cuenta </th>
                <th className="border border-left-0"> Fecha </th>
                <th className="border border-left-0"> Descripcion </th>
                <th className="border border-left-0"> Categoria </th>
                <th className="border border-left-0"> Monto </th>
                </tr>
            </thead>
            {
                dataMov.map((mov, index) => {
                    return <>
                      {
                        index + 1 <= maxVal &&
                        <tbody >
                            <tr className="border border-left-0 border-right-0 border-top-0">
                            <td>{mov.type}</td>
                            <td>{mov.date}</td>
                            <td>{mov.description}</td>
                            <td>Sin Categoria</td>
                            <td>{mov.amount}</td>
                            </tr>
                        </tbody>
                      }
                    </>
                  })
            }
            </table>
            <div className='content-paginate d-flex col-12'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onClick={ (event) => { handlePageClick(event) } }
                    pageRangeDisplayed={1}
                    pageCount={totalPage}
                    previousLabel="<"
                    initialPage={initPage}
                    // forcePage={initPage}
                    className="paginate-custom"
                    renderOnZeroPageCount={null}
                    />
            </div>
        </div>
    </div>
  )
}
