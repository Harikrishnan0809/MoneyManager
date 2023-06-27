// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="un-order-list-container">
      <div className="list-container bg-green">
        <img
          className="list-image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="bal-heading">Your Balance</p>
          <p data-testid="balanceAmount" className="rs">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="list-container bg-blue">
        <img
          className="list-image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="bal-heading">Your Income</p>
          <p data-testid="incomeAmount" className="rs">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="list-container bg-violet">
        <img
          className="list-image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="bal-heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="rs">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
