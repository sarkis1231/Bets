import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));
const handleBetsClick = () => {
  alert('Done');
}

const Tablee = props => {
  const gameDetails = props.gameDetails;
  // console.log(gameDetails);
  // console.log(Object.keys(gameDetails[0]).map(data => data))
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {Object.keys(gameDetails[0]).map(data => {

              if (data !== 'ID')
                return <TableCell key={data}>{data}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {gameDetails.map((gameDetail, idx) => (
            <TableRow key={idx}>
              {Object.entries(gameDetail).map((value, idx2) => {

                if (value[0] !== 'ID')
                  return <TableCell className="table-row" key={idx2} onClick={handleBetsClick}>{value[1]}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tablee;
