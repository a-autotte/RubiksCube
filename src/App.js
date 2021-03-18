import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import Tutorial from "./Tutorial";
import Sidebar from "./Sidebar";

function App() {
  

  return (
    <Router>
      <div className="App">
        
        <Switch>
          
          <Route path="/game">
            <Header/>
            <Sidebar />
          </Route>
          <Route path="/chat">
            <Header />
            <Sidebar />
            <Chat />
          </Route>
          <Route path="/tournament">
            <Header />
            <Sidebar />
          </Route>
          <Route path="/group">
            <Header />
            <Sidebar />
          </Route>
          <Route path="/leaderboard">
            <Header />
            <Sidebar />
          </Route>
          <Route path="/forum">
            <Header />
            <Sidebar />
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
            <Sidebar />
          </Route>
        </Switch>

        
      </div>
    </Router>
    
  );
}

export default App;
