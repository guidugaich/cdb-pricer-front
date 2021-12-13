import React, { useState } from 'react';

import Title from './components/Title';
import InputForm from './components/InputForm';
import Data from './components/Data';

import './App.css';

import Context from './context';

const BASE_URL = 'https://cdb-pricer.herokuapp.com/pricing';

function App() {
  const [data, setData] = useState([])
  const [investmentDate, setInvestmentDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [cdbRate, setCdbRate] = useState(0);
  const [userMsg, setUserMsg] = useState('Preencha os dados no formulário.')

  const context = {
    investmentDate,
    setInvestmentDate,
    currentDate,
    setCurrentDate,
    cdbRate,
    setCdbRate,
    userMsg,
    data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASE_URL}?investmentDate=${investmentDate}&currentDate=${currentDate}&cdbRate=${cdbRate}`);
  
    const { data: pricingData } = await response.json();

    if (pricingData) {
      setData(pricingData)
    } else {
      setData([])
      setUserMsg('Dados não disponíveis. Preencha o formulário novamente.')
    }
  }

  return (
    <Context.Provider value={context}>
      <main>
        <Title />
        <hr style={{width: '90%'}}/>
        <InputForm handleSubmit={handleSubmit} />
        <Data />
      </main>
    </Context.Provider>
  );
}

export default App;
