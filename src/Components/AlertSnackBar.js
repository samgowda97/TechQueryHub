import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertSnackBar = ({ open, handleClose, severity, message }) => {
    return (
      <Snackbar onClose={handleClose} open={open} autoHideDuration={4000}  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert onClose={handleClose}  severity={severity} variant="filled">
          {message}
        </MuiAlert>
      </Snackbar>
    );
  };

export default AlertSnackBar