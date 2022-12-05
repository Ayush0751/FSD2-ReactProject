// Write your code here
import {Component} from 'react'

import cashStyles from './cashStyles.module.css'

import DenominationItem from './DenominationItem'


class CashWithdrawal extends Component {
  state = {
    money: 20000,
  }
  
  stateChange = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const denominationsList = [
      {
        id: 1,
        value: 50,
      },
      {
        id: 2,
        value: 100,
      },
      {
        id: 3,
        value: 200,
      },
      {
        id: 4,
        value: 500,
      },
    ]
    const {money} = this.state
    return (
      <div className={cashStyles.main_container}>
        <div className={cashStyles.inner_container}>
          <div className={cashStyles.heading_container}>
            <div className={cashStyles.para_div}>
              <p className={cashStyles.s}>S</p>
            </div>
            <p className={cashStyles.name_para}>Sarah Williams</p>
          </div>
          <div className={cashStyles.money_container}>
            <p className={cashStyles.balance_name}>Your Balance</p>
            <div className={cashStyles.balance_holder}>
              <p className={cashStyles.amount}>{money}</p>
            </div>
          </div>
          <p className={cashStyles.rupees}>In Rupees</p>
          <p className={cashStyles.withdraw}>Withdraw</p>
          <p className={cashStyles.choose}>CHOOSE SUM (IN RUPEES)</p>

          <ul className={cashStyles.items_holder}>
            {denominationsList.map(eachObject => (
              <DenominationItem
                key={eachObject.id}
                value={eachObject.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
          <button className={cashStyles.with}>WithDraw</button>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
