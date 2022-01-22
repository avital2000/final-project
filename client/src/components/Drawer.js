import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TemporaryDrawer() {
  const history = useHistory();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const anchor = 'right';

  const drawerClick = (type) => {
    if (type === 'calendars') {
      history.push('./calendarList');
    }
    else if (type === 'logs') {
      history.push('./logList');
    }
    else if (type === 'groups') {
      history.push('./groupList');
    }
    else if (type === 'about'){
      history.push('./about');
    }
    else if (type === 'profile'){
      history.push('./about');
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => { drawerClick('calendars') }}>
          <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
          <ListItemText primary="Calendars" />
        </ListItem>
        <ListItem button onClick={() => { drawerClick('logs') }}>
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary="Logs" />
        </ListItem>
        <ListItem button onClick={() => { drawerClick('groups') }}>
          <ListItemIcon><GroupsIcon /></ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button onClick={() => { drawerClick('profile') }}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => { drawerClick('about') }}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button onClick={() => { drawerClick('about') }}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button onClick={() => { drawerClick('about') }}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button 
        onClick={toggleDrawer(anchor, true)}
        style={{ color:'#000000' }}
        >Preferences</Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
