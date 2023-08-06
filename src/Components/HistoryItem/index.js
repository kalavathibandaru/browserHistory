import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory

  const onDeleteEachHistory = () => {
    deleteUser(id)
  }

  return (
    <li className="main-container">
      <div className="logo-container">
        <p className="time">{timeAccessed}</p>
        <img className="logo-image" src={logoUrl} alt="domain logo" />
        <p className="title-element1">{title}</p>
        <p className="paragraph-element2">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testId="delete"
          type="button"
          onClick={onDeleteEachHistory}
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
