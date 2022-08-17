import { useState, useEffect } from 'react'
import axios from 'axios'
import UsersList from '../../components/usersList/UsersList'
import GenericModal from '../../components/genericModal/GenericModal'
import './ListUsers.css'
import NewUserModal from './modals/newUser/NewUserModal'
import NewMeetingModal from './modals/newMeeting/NewMeetingModal'

function ListUsers() {
  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState(<></>)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const newUserClickHandler = (type) => {
    type === 'newUser'
      ? setModalContent(
          <NewUserModal getUsers={getUsers} handleClose={handleClose} />
        )
      : setModalContent(
          <NewMeetingModal users={users} handleClose={handleClose} />
        )
    handleOpen()
  }

  const openUpdateModal = (user) => {
    setModalContent(
      <NewUserModal user={user} getUsers={getUsers} handleClose={handleClose} />
    )
    handleOpen()
  }

  const getUsers = () => {
    axios
      .get('http://localhost:5000/users')
      .then((res) => {
        setUsers(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <GenericModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        {modalContent}
      </GenericModal>
      <div className='users-list-main-container'>
        <div className='user-list-header-container'>
          <div className='user-list-header'>Users</div>
          <div className='user-list-header-action-buttons'>
            <button
              className='new-user-button'
              onClick={() => newUserClickHandler('newUser')}
            >
              New User
            </button>
            <button
              className='new-meeting-button'
              onClick={() => newUserClickHandler('newMeeting')}
            >
              New Meeting
            </button>
          </div>
        </div>
        <div className='user-list-container'>
          <UsersList
            users={users}
            getUsers={getUsers}
            openUpdateModal={openUpdateModal}
          />
        </div>
      </div>
    </>
  )
}

export default ListUsers
