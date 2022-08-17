import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
}

export default function GenericModal({ children, open, handleClose }) {
  //   const [open, setOpen] = React.useState(false)
  //   const handleOpen = () => setOpen(true)
  //   const handleClose = () => setOpen(false)

  return (
    <div sx={style}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  )
}
