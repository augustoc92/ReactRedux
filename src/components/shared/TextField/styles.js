const styles = theme => ({
  muiTextField: {
    margin: theme.spacing.unit,
  },
  underline: {
    '&:before': {
      borderBottom: "1px solid rgba(0,0,0,0.2)"
    },
    '&:hover:not(.MuiInput-disabled-49):not(.MuiInput-focused-48):not(.MuiInput-error-51):before': {
      borderBottom: "1px solid rgba(0,0,0,0.5)"
    }
  },
  label: {
    color: "rgba(0,0,0,0.2)"
  }
})

export default styles