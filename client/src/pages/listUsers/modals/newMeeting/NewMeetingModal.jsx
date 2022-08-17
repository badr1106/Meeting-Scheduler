import { useState, useEffect } from 'react'
import './NewMeetingModal.css'
import GenericDateTimePicker from '../../../../components/genericDateTimePicker/GenericDateTimePicker'
import MultipleSelectInput from '../../../../components/multipleSelectInput/MultipleSelectInput'
import axios from 'axios'

function NewMeetingModal({ users, handleClose }) {
  const [dateTime, setDateTime] = useState(new Date())

  const [selectedUsers, setSelectedUsers] = useState([])

  const [userError, setUserError] = useState('')

  useEffect(() => {
    if (selectedUsers.length > 0) {
      setUserError('')
    }
  }, [selectedUsers])

  const submitHandler = (e) => {
    e.preventDefault()
    if (selectedUsers.length === 0) {
      setUserError('Please select at least one user')
    } else {
      const usersIds = selectedUsers.map((user) => user._id)
      axios.post('http://localhost:5000/meetings/add', {
        dateTime,
        users: usersIds,
      })
      setUserError('')
      handleClose()
    }
  }

  return (
    <div className='new-meeting-modal-container'>
      <div className='new-meeting-modal-header'>Create New Meeting</div>
      <form onSubmit={submitHandler}>
        <div className='new-meeting-modal-users'>
          <MultipleSelectInput
            options={users}
            value={selectedUsers}
            setValue={setSelectedUsers}
            label='Select Meeting Participants'
            error={userError}
            helperText={userError}
          />
          <div className='select-users-error'>{userError}</div>
        </div>
        <div className='new-meeting-modal-date-time'>
          <GenericDateTimePicker
            value={dateTime}
            setValue={setDateTime}
            label='Select Meeting Time'
          />
        </div>
        <div className='new-meeting-modal-button-container'>
          <button type='submit' className='new-meeting-modal-submit-button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewMeetingModal
