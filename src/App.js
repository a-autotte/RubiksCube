import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import Tutorial from "./Tutorial";
import Home from "./Home";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
}

    

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="App">
        
        <Switch>
          
          <Route path="/game">
            <Header/>
            
          </Route>
          <Route path="/chat">
            <Header />
            
            <Chat />
          </Route>
          <Route path="/tournament">
            <Header />
           
          </Route>
          <Route path="/group">
            <Header />
            
          </Route>
          <Route path="/leaderboard">
            <Header />
            
          </Route>
          <Route path="/forum">
            <Header />
            
          </Route>
          <Route path="/register">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/tutorial">
            <Header />
            <Tutorial/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
        
          </Route>
        </Switch>

        
      </div>
    </Router>
    
  );
}

export default App;
