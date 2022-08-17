import './UsersList.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function UsersList({ users, getUsers, openUpdateModal }) {
  const deleteHandler = (user) => {
    axios
      .delete(`http://localhost:5000/users/delete/${user._id}`)
      .then((res) => {
        getUsers()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='list-container'>
      {users.map((user, index) => (
        <div className='list-record' key={index}>
          <div className='list-record-name'>
            {user.firstName} {user.lastName}
          </div>
          <div className='user-action-buttons'>
            {/* <InfoOutlinedIcon className='user-view' /> */}
            <EditIcon
              className='user-edit'
              onClick={() => {
                openUpdateModal(user)
              }}
            />
            <DeleteForeverIcon
              className='user-delete'
              onClick={() => {
                deleteHandler(user)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersList
