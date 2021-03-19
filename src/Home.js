import React, { useEffect } from "react";
import './Home.css';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import PlayerStat from "./PlayerStat/PlayerStat";

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
          <div className="home__playerGreeting">
            <h1> Welcome {!user ? 'Guest' : user.email} </h1>
          </div>
          <div className="home__playerStat">
            <PlayerStat
              image="https://i.pinimg.com/236x/30/2c/de/302cde539d24750e0a4fd85d17d8cf01--wallpaper-pictures-pretty-pictures.jpg"
              gamePlayer="alexis"
              win={4}
              rank="noob"
              rubikRecord="03:33"
            />
          </div>
            
        </div>
    )
}

export default Home;
