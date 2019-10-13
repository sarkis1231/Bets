import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Tabss from './Tabss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}

      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Countries = ({ countries }) => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [activeCountry, setActiveCountry] = useState(
    Object.keys(countries)[0] || null
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeCountry = name => {
    setActiveCountry(name);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {Object.keys(countries).map(country => {

          return (<Tab
            key={country}
            label={country}
            onClick={() => changeCountry(country)}
          />
          )
        })}
      </Tabs>
      <TabPanel value={value} index={countries[activeCountry].ID}>
        <Tabss games={countries[activeCountry].games} />
      </TabPanel>
    </div>
  );
};

export default Countries;
