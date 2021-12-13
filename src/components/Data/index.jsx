import React, { useContext } from 'react'
import Context from '../../context'

import Chart from './Chart'
import DataTable from './DataTable'
import Loading from '../Loading'

import './style.css'

export default function Data() {
  const { data, userMsg, loading } = useContext(Context)

  return (
    <>
      {loading ? <Loading /> : (
        <>
          {!data.length ? <h2>{userMsg}</h2> : (
            <div className='dataContainer'>
              <DataTable />
              <Chart />
            </div>
          )}
        </>
      )}
    </>
  )
}
