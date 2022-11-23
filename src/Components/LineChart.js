import React from 'react'
import {Line} from 'react-chartjs-2'
import {useState} from 'react'

function LineChart(props) {
  const [data, setData] = useState({
    ...props.chartData
  })
  return (
    <div className="chart">

      <Line data={data}/>
    </div>
  )
}

export default LineChart
