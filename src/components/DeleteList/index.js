import './index.css'

const DeleteList = props => {
  const {listDetails, deleteUser, isChecked} = props
  const {website, userName, password, id} = listDetails

  console.log(isChecked)

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="list-item">
        <div className="icon">{website[0]}</div>
        <div className="para">
          <p className="para_1">{website}</p>
          <p className="para_1">{userName}</p>
          <div className="container">
            {isChecked && <p className="para_1">{password}</p>}
            {!isChecked && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars"
              />
            )}
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          testid="delete"
          className="del-img"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default DeleteList
