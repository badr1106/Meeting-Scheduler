import { useState, useEffect } from 'react'
import './NewUserModal.css'
import GenericTextInput from '../../../../components/genericTextInput/GenericTextInput'
import axios from 'axios'

function NewUserModal({ getUsers, handleClose, user }) {
  const [firstName, setFirstName] = useState(user ? user.firstName : '')
  const [lastName, setLastName] = useState(user ? user.lastName : '')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)

  useEffect(() => {
    if (firstName.length > 0) {
      setFirstNameError('')
    }
    if (lastName.length > 0) {
      setLastNameError('')
    }
  }, [firstName, lastName])

  const updateUser = () => {
    axios
      .put(`http://localhost:5000/users/update/${user._id}`, {
        firstName: firstName,
        lastName: lastName,
      })
      .then((res) => {
        getUsers()
        handleClose()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const addUser = () => {
    axios
      .post('http://localhost:5000/users/add', {
        firstName: firstName,
        lastName: lastName,
      })
      .then((res) => {
        getUsers()
        handleClose()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (firstName.length > 0 && lastName.length > 0) {
      setFirstNameError('')
      setLastNameError('')
      if (user) {
        updateUser()
      } else {
        addUser()
      }
    }

    if (firstName.length === 0) {
      setFirstNameError('First name is required')
    } else {
      setFirstName('')
    }

    if (lastName.length === 0) {
      setLastNameError('Last name is required')
    } else {
      setLastName('')
    }
  }

  return (
    <div className='new-user-modal-container'>
      <div className='new-user-modal-header'>
        {user ? 'Edit User' : 'Create New User'}
      </div>

      <form onSubmit={submitHandler}>
        <div className='new-user-modal-input'>
          <GenericTextInput
            label='First Name'
            value={firstName}
            setValue={setFirstName}
            error={firstNameError}
            helperText={firstNameError}
          />
        </div>
        <div className='new-user-modal-input'>
          <GenericTextInput
            label='Last Name'
            value={lastName}
            setValue={setLastName}
            error={lastNameError}
            helperText={lastNameError}
          />
        </div>
        <div className='new-user-modal-button-container'>
          <button type='submit' className='new-user-modal-submit-button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewUserModal
