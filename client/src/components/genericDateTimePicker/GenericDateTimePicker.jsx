import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

export default function GenericDateTimePicker({ value, setValue, label }) {
  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  )
}
