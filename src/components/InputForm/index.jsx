import { useContext } from 'react';
import Context from '../../context';

import './style.css'

export default function InputForm({ handleSubmit }) {
  const { setInvestmentDate, setCurrentDate, setCdbRate, setData } = useContext(Context)

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputContainer'>
        <label htmlFor="investmentDate">Data de investimento:</label>
        <input
          id='investmentDate'
          required
          type='date'
          onChange={(e) => setInvestmentDate(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="currentDate">Data atual:</label>
        <input
          id="currentDate"
          required
          type='date'
          onChange={(e) => setCurrentDate(e.target.value)}
        />

      </div>
      
      <div className="inputContainer">
        <label htmlFor="cdbRate">Taxa do CDB:</label>
        <input
          id="cdbRate"
          required
          type='number'
          step='0.01'
          onChange={(e) => setCdbRate(e.target.value)}
        />

      </div>

      <button type='submit'>Calcular</button>
    </form>
  )
}
