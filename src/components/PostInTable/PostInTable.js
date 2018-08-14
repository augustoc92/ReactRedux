import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    boxShadow: 'none',
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    overflowY: 'auto',
    maxHeight: '700px',
  },
  table: {
    minWidth: 600,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class PostInTable extends Component {


  updateItem = () => {

    const { item, update, initialize } = this.props

    update(item)

    initialize(item)

  }


  render() {

    const { item, classes, updatingItem, cancelUpdate, update, remove, handleSubmit } = this.props
    return (
      <TableRow className={classes.row} key={item.id}>
        {updatingItem.id === item.id ?
          <React.Fragment>
            <TableCell>
              <Field
                id="title"
                name="title"
                component="input"
                type="text"
              />
            </TableCell>
            <TableCell>
              <Field
                id="body"
                name="body"
                component="textarea"
                type="text"
              />
            </TableCell>
            <TableCell>
              <Button aria-label="Reo" onClick={handleSubmit}>
                <DoneIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button aria-label="Reo" onClick={() => cancelUpdate()}>
                <ClearIcon />
              </Button>
            </TableCell>
          </React.Fragment>
          :
          <React.Fragment>
            <TableCell>
              {item.title}
            </TableCell>
            <TableCell>
              {item.body}
            </TableCell>
            <TableCell>
              <Button aria-label="Reo" onClick={this.updateItem}>
                <CreateIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button aria-label="Reo" onClick={() => remove(item.id)}>
                <DeleteIcon />
              </Button>
            </TableCell>
          </React.Fragment>
        }
      </TableRow>
    )
  }
}

PostInTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostInTable)