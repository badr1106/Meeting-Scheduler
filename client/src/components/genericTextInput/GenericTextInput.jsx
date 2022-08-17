import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function GenericTextInput({
  label,
  value,
  setValue,
  error,
  helperText,
}) {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { width: '100%' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        label={label}
        variant='outlined'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={error}
        helperText={helperText}
      />
    </Box>
  )
}
