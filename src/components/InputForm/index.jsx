import React, { useContext } from 'react';
import Context from '../../context';

export default function InputForm({ handleSubmit }) {
  const { setInvestmentDate, setCurrentDate, setCdbRate, setData } = useContext(Context)

  return (
    <form onSubmit={handleSubmit}>
      <input type='date' onChange={(e) => setInvestmentDate(e.target.value)}></input>
      <input type='date' onChange={(e) => setCurrentDate(e.target.value)}></input>
      <input type='number' onChange={(e) => setCdbRate(e.target.value)}></input>

      <button type='submit'>Calcular</button>
    </form>
  )
}
