import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import "./css/App.css";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from "./Home";
import LogList from "./LogList";
import GroupList from "./GroupList";
import MyAccount from "./MyAccount";
import CalendarList from "./CalendarList";
import NewCalendar from './NewCalendar';
// import NavBar from './NavBar';
import Footer from './Footer';
import MyCalendar from './Calendar';
import BusinessLogList from './BusinessLogList';
import UserList from './UserList';
import DatePicker from './DatePicker';
import DefaultDrawer from './Drawer';
import About from './About';

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path='/'  component={props => <Home {...props}/>}></Route>
          <Route exact path='/signUp'  component={props => <SignUp {...props}/>}></Route>
          <Route exact path='/signIn' component={props => <SignIn {...props}/>}></Route>
          <Route exact path='/logList'  component={props => <LogList {...props}/>}></Route>
          <Route exact path='/groupList'  component={props => <GroupList {...props}/>}></Route>
          <Route exact path='/calendarList'  component={props => <CalendarList {...props}/>}></Route>
          <Route exact path='/userAccount'  component={props => <MyAccount {...props}/>}></Route>
          <Route exact path='/newCalendar'  component={props => <NewCalendar {...props}/>}></Route>
          <Route exact path='/calendar'  component={props => <MyCalendar {...props}/>}></Route>
          <Route exact path='/businessLogList'  component={props => <BusinessLogList {...props}/>}></Route>
          <Route exact path='/userList'  component={props => <UserList {...props}/>}></Route>
          <Route exact path='/datePicker'  component={props => <DatePicker {...props}/>}></Route>
          <Route exact path='/list'  component={props => <DefaultDrawer {...props}/>}></Route>
          <Route exact path='/about'  component={props => <About {...props}/>}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
