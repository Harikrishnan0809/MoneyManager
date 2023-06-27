import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import History from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    paymentType: 'Income',
    history: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onchangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangePaymentType = event => {
    this.setState({paymentType: event.target.value})
  }

  addObject = event => {
    event.preventDefault()
    const {paymentType, amount, title} = this.state
    const newObject = {
      id: v4(),
      title,
      amount,
      paymentType,
    }
    if (paymentType === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        history: [...prevState.history, newObject],
        title: '',
        amount: '',
        paymentType: 'Income',
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
        history: [...prevState.history, newObject],
        title: '',
        amount: '',
        paymentType: 'Income',
      }))
    }
  }

  onDelete = id => {
    const {history} = this.state
    const getDeletedDetails = history.find(eachItem => eachItem.id === id)
    const {amount} = getDeletedDetails
    if (getDeletedDetails.paymentType === 'Income') {
      this.setState(prevVal => ({
        balance: prevVal.balance - amount,
        income: prevVal.income - amount,
        history: prevVal.history.filter(eachElement => eachElement.id !== id),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        expenses: prevState.expenses - amount,
        history: prevState.history.filter(eachElement => eachElement.id !== id),
      }))
    }
  }

  render() {
    const {income, expenses, title, amount, history} = this.state
    const totalBalance = income - expenses
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="head-para">
            Welcome back to your
            <span className="money-span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balance={totalBalance}
          income={income}
          expenses={expenses}
        />
        <div className="form-history-container">
          <form className="form-container" onSubmit={this.addObject}>
            <h1 className="add-heading">Add Transaction</h1>
            <div className="input-title-container">
              <label className="title-label" htmlFor="amount">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                className="input"
                id="amount"
                placeholder="TITLE"
                value={title}
              />
            </div>
            <div className="input-title-container">
              <label className="title-label" htmlFor="title">
                AMOUNT
              </label>
              <input
                onChange={this.onchangeAmount}
                className="input"
                id="title"
                placeholder="AMOUNT"
                value={amount}
              />
            </div>
            <div className="input-title-container">
              <label className="title-label" htmlFor="TYPE">
                TYPE
              </label>
              <select className="input" onChange={this.onChangePaymentType}>
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>

            <button className="Add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="add-heading">History</h1>

            <ul className="un-order-list">
              <li className="title-amt-typ-container">
                <p className="para-heading">Title</p>
                <p className="para-heading">Amount</p>
                <p className="para-heading margin-right">Type</p>
              </li>
              {history.map(eachItem => (
                <History
                  key={eachItem.id}
                  details={eachItem}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
