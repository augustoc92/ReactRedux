import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}



function CustomizedTable(props) {
  const { classes } = props;
  console.log(props)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell> Title </CustomTableCell>
            <CustomTableCell> Body </CustomTableCell>
            <CustomTableCell> Edit</CustomTableCell>
            <CustomTableCell> Delete</CustomTableCell>
          </TableRow>
        </TableHead>
        {(props.data) &&
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.title}
                </CustomTableCell>
                <CustomTableCell numeric>{n.body}</CustomTableCell>
                <CustomTableCell>   
                  <button onClick={() => this.remove(item.id)}> Remove Item </button>
                </CustomTableCell>
                <CustomTableCell>     </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
        }
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable)