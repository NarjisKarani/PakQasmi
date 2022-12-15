import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';

//Dashboard
import Dashboard from './Dashboard/Dashboard';

//Forms
import Register from './Register/Register';
import Updateform from './Updateform/Updateform';

//Members
import Individualpage from './Individualpage/individualpage';
import IDCard from './IDCard/IDCard';
import Card from './IDCard/Card';
import NewCard from './IDCard/NewCard';
// import Back from './IDCard/Back';

//Listings
import Memberlisting from './Memberlisting/Memberlisting';
import Girlslisting from './Girlslisting/Girlslisting';
import Boyslistings from './Boyslistings/Boyslistings';


//Hooks
import useFetch from '../custom-hooks/useFetch'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  const {memberdata:members, isLoading, errMessage, deleteMember, updateMember} = useFetch("http://localhost:8500/members");
  const {girlsmemberdata:girls} = useFetch("http://localhost:8500/girlslisting");
  const {boysmemberdata:boys} = useFetch("http://localhost:8500/boyslistings");
  return (
      <Router>
        <div className="App">
        <Navbar/>
          <main>
            <Switch>
              <Route exact  path="/">
                <Dashboard />
              </Route>
  
              <Route path="/members">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {members && <Memberlisting members={members} deleteMember={deleteMember} updateMember={updateMember}/>}
              </Route>

              <Route path="/girlslisting">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {girls && <Girlslisting girls={girls} deleteMember={deleteMember}/>}
              </Route>
              <Route path="/boyslistings">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {boys && <Boyslistings boys={boys} deleteMember={deleteMember}/>}
              </Route>

              <Route exact path="/register">
                <Register />
              </Route>

              <Route exact path="/updateform">
                <Updateform />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>
  
              <Route exact path="/individualpage">
                {members && <Individualpage members={members} deleteMember={deleteMember} updateMember={updateMember}/>}
              </Route>

              <Route exact path="/IDCard">
                {members && <IDCard members={members}/>}
              </Route>
              <Route exact path="/card">
                {members && <Card members={members}/>}
              </Route>
              <Route exact path="/newcard">
                {members && <NewCard members={members}/>}
              </Route>
              {/* <Route exact path="/back">
                {members && <Back members={members}/>}
              </Route> */}
  
              <Route path="*">
                <div>Page not found. Go back to <Link to="/">Dashboard</Link></div>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;