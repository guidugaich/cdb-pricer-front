import React, { useContext } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer } from 'recharts';
import Context from '../../../context'

export default function Chart() {
  const { data } = useContext(Context)

  return (
    <ResponsiveContainer width='80%'>
      <LineChart data={data}>
        <Line type="monotone" dataKey='unitPrice'/>
        <XAxis dataKey="date" />
        <YAxis
          type="number"
          domain={['dataMin - 10', 'dataMax + 10']}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
