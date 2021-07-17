import { createStyles } from '@material-ui/core';

export const styles = () => createStyles({
  container: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,
  },
  content: {
    width: '300px',
    height: '200px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
