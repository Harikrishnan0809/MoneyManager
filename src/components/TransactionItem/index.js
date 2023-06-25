// Write your code here
import './index.css'

const History = props => {
  const {details, onDelete} = props
  const {title, amount, paymentType, id} = details
  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-history-container">
      <p className="para-history">{title}</p>
      <p className="para-history">Rs {amount}</p>
      <p className="para-history">{paymentType}</p>
      <button
        data-testid="delete"
        onClick={onDeleteButton}
        className="delete-button"
        type="button"
      >
        <img
          className="delete-image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default History
