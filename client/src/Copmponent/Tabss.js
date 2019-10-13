import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tablee from './Tablee';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Tabss = ({ games }) => {


  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [activeGame, setActiveGame] = useState(Object.keys(games)[0] || null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeGame = game => {
    setActiveGame(game);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {Object.keys(games).map(gameName => {


            return (
              <Tab
                key={games[gameName].ID}
                label={gameName}
                onClick={() => changeGame(gameName)}
              />
            )
          }
          )}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={games[activeGame].ID}>
        <Tablee gameDetails={games[activeGame].gameDetails} />
      </TabPanel>
    </div>
  );
};
export default Tabss;
