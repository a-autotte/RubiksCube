import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
function App() {
  

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
          <Route path="/">
            <Header />
          </Route>
        </Switch>

        
      </div>
    </Router>
    
  );
}

export default App;
