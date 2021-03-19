import React, { useEffect } from "react";
import './Home.css';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
function Home () {
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
        <div className="home">
            <h1> Welcome {!user ? 'Guest' : user.email} </h1>
        </div>
    )
}

export default Home;
