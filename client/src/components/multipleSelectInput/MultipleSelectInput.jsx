import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function MultipleSelectInput({
  options,
  value,
  setValue,
  label,
  error,
  helperText,
}) {
  return (
    <Autocomplete
      multiple
      id='tags-outlined'
      error={error}
      helperText={helperText}
      options={options}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label={label} fullWidth />
      )}
    />
  )
}
