import { useState } from 'react';

import Title from './components/Title';
import InputForm from './components/InputForm';
import Data from './components/Data';

import './App.css';

import Context from './context';

const BASE_URL = 'https://cdb-pricer.herokuapp.com/pricing';

function App() {
  const [data, setData] = useState([])
  const [investmentDate, setInvestmentDate] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [cdbRate, setCdbRate] = useState(0)

  const context = {
    investmentDate,
    setInvestmentDate,
    currentDate,
    setCurrentDate,
    cdbRate,
    setCdbRate
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitou o form');
    const data = await fetch(`${BASE_URL}?investmentDate=${investmentDate}&currentDate=${currentDate}&cdbRate=${cdbRate}`);

    console.log(data);
  }

  return (
    <Context.Provider value={context}>
      <main>
        <Title />
        <InputForm handleSubmit={handleSubmit} />
        <Data />
      </main>
    </Context.Provider>
  );
}

export default App;
