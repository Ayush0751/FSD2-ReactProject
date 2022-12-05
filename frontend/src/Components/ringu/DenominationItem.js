// import React from 'react'
import denomStyles from './denomStyles.module.css'

const DenominationItem = props => {
  const {value, stateChange} = props
  const changeState = () => {
    stateChange(value)
  }
  return (
    <div>
    <li className={denomStyles.item_holder}>
      <button type="button" className={denomStyles.btn} onClick={changeState}>
        {value}
      </button>
    </li>
    </div>
  )
}
export default DenominationItem
