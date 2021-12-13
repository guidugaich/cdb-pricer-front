import React, { useContext } from 'react'
import Context from '../../../context'

import './style.css'

export default function DataTable() {
  const { data } = useContext(Context)

  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Preço (R$)</th>
        </tr>
      </thead>
      <tbody>
        {!data ? <div>Dados indisponíveis</div> : (
          data.map(d => (
            <tr>
              <td>{d.date}</td>
              <td>{d.unitPrice}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
