import React, { PureComponent } from "react"
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import styles from './styles'


class TextField extends PureComponent {
  getInputNode = () => this.input;

  render() {
    /* eslint-disable no-unused-vars */
    const {
      input,
      id,
      label,
      customStyles,
      style,
      classes,
      type,
      meta: { touched, error },
      dispatch,
      ...props
    } = this.props
    /* eslint-enable */

    const customStyle = {
      width: "100%",
      ...style
    }

    const underlineStyle = {
      display: "none"
    }

    return (
      <FormControl error={ touched && !!error } aria-describedby="name-error-text">
        <InputLabel 
          htmlFor={id}
          classes={{
            root: classes.label
          }}
        >{label}</InputLabel>
        <Input 
          id={id} 
          type={type} 
          classes={{
            underline: classes.underline,
          }}
          {...input} 
        />
        <FormHelperText>
          {touched && error}
        </FormHelperText>
      </FormControl>
    )
  }
}

export default withStyles(styles)(TextField)