import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';

//Dashboards
import Dashboard from './Dashboard/Dashboard';
// import Memberdashboard from './Dashboard/Memberdashboard';
// import Admindashboard from './Dashboard/Admindasboard';

//Members
import Register from './Register/Register';
// import Memberlisting from './Memberlisting/Memberlisting';

//Users
// import User from './User/User';
import Individualpage from './Individualpage/Individualpage';
import Updateform from './Updateform/Updateform';
import IDCard from './IDCard/IDCard';
import Card from './IDCard/Card';

//Listings
import Memberlisting from './Memberlisting/Memberlisting';
// import Userlist from './User/Userlist';
import Girlslisting from './Girlslisting/Girlslisting';
import Boyslistings from './Boyslistings/Boyslistings';
// import UserlistSearch from './User/Userlistsearch';

// //Posts
// import Post from './Post/Post';
// import Createpost from './Post/Createpost';

//Hooks
import useFetch from '../custom-hooks/useFetch'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  const {memberdata:members, isLoading, errMessage, deleteMember, updateMember} = useFetch("http://localhost:8500/members");
  const {girlsmemberdata:girls} = useFetch("http://localhost:8500/girlslisting");
  const {boysmemberdata:boys} = useFetch("http://localhost:8500/boyslistings");
  // const {userdata:users, deleteUserdata} = useFetch("http://localhost:5000/userlist");
  // const {postdata:posts, deletePostdata} = useFetch("http://localhost:5000/posts");
  // const {girlsdata:girlsdata} = useFetch("http://localhost:5000/girlslist");
  // const {boysdata:boydata} = useFetch("http://localhost:5000/boyslist");
  return (
      <Router>
        <div className="App">
        <Navbar/>
          <main>
            <Switch>
              <Route exact  path="/">
                <Dashboard />
              </Route>

              {/* <Route exact  path="/admindashboard">
                <Admindashboard />
              </Route>
              <Route exact  path="/memberdashboard">
                <Memberdashboard />
              </Route> */}
  
              {/* <Route path="/members">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {members && <Members members={members} deletemember={deletemember}/>}
              </Route> */}
  
              <Route path="/members">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {members && <Memberlisting members={members} deleteMember={deleteMember} updateMember={updateMember}/>}
              </Route>

              <Route path="/girlslisting">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {girls && <Girlslisting girls={girls}/>}
              </Route>
              <Route path="/boyslistings">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {boys && <Boyslistings boys={boys}/>}
              </Route>

              {/* <Route path="/posts">
                {errMessage && <div>{errMessage}</div>}
                {isLoading && <div>Loading...</div>}
                {posts && <Post posts={posts} deletePostdata={deletePostdata}/>}
              </Route> */}

              <Route exact path="/register">
                <Register />
              </Route>

              <Route exact path="/updateform">
                <Updateform />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>
  
              {/* <Route exact path="/user">
                <User />
              </Route>
  
              <Route exact path="/userlist">
                {users && <Userlist users={users}/>}
              </Route> */}

              {/* <Route exact path="/girlslisting">
                {members && <Girlslisting members={members}/>}
              </Route>

              <Route exact path="/boyslistings">
                {members && <Boyslistings members={members}/>}
              </Route> */}

              {/* <Route exact path="/userlistsearch">
                {users && <UserlistSearch users={users} deleteUserdata={deleteUserdata}/>}
              </Route> */}
  
              <Route exact path="/individualpage">
                {members && <Individualpage members={members} deleteMember={deleteMember}/>}
              </Route>

              <Route exact path="/IDCard">
                {members && <IDCard members={members}/>}
              </Route>
              <Route exact path="/card">
                {members && <Card members={members}/>}
              </Route>
  
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