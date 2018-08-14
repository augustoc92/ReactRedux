import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PostInTable from '../PostInTable';

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

class SimpleTable extends Component {

  createNewItem = () => {
    this.props.addItemToList();
  }

  update = (item) => {
    this.props.setUpdatingItem(item);
  }

  cancelUpdate = () => {
    this.props.reset('editPost');
    this.props.setUpdatingItem({});
  }

  remove = (id) => {
    this.props.removeFromList(id)
    this.props.setUpdatingItem({});
  }

  render() {
    const { classes, data, handleSubmit, updatingItem, initialValues } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> Title </TableCell>
              <TableCell> Body </TableCell>
              <TableCell> Edit</TableCell>
              {(updatingItem.id !== null) ?
                <React.Fragment>
                  <TableCell> Cancel </TableCell>
                </React.Fragment>
                :
                <React.Fragment>
                  <TableCell> Delete </TableCell>
                </React.Fragment>
              }
            </TableRow>
          </TableHead>
          {(data) &&
            <TableBody>
              {data.map(n => {
                return (
                  <PostInTable
                    item={n}
                    updatingItem={updatingItem}
                    cancelUpdate={this.cancelUpdate}
                    update={this.update}
                    remove={this.remove}
                    handleSubmit={handleSubmit}
                    // initialValues={n}
                    updateItemFromList={this.props.updateItemFromList}
                    setUpdatingItem={this.props.setUpdatingItem}
                  />
                )
              })}
            </TableBody>
          }
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable)