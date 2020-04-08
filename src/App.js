import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { useQuery,useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css'

import HomePage from './MusicWebsite/Pages/HomePage'
import Navigation from './MusicWebsite/Pages/Navigation'
import Subscribe from './MusicWebsite/Pages/Subscribe'
import Footer from './MusicWebsite/Pages/Footer'
import About from './MusicWebsite/Pages/About'
import ArtisteComponent from './MusicWebsite/Pages/artistes/index'
import MusicCardList from './MusicWebsite/Pages/music/MusicCardList'
import Videos from './MusicWebsite/Pages/Videos'




const ArtistQuery = gql`
    {
        artists{
            _id
            name
            image
            description
    }

  }
`;
const dataQuery = gql`
  query data{
    artists{
        _id
        name
        image
        description
    }
    songs{
        _id
        artists
        art
        title
        links{
            spotify
            soundcloud
        }
    }
  }
`;
const ADD_SUBSCRIPTION = gql`
  mutation addSubscription($email: String!) {
    createSubscription(email: $email) {
      _id
      email
    }
  }
`;
function App(){
    const [createSubscription] = useMutation(ADD_SUBSCRIPTION);
    const { loading, error, data } = useQuery(dataQuery);
    
    if (error) return <p>{error.message}</p>;
    if (loading) {
        return <p>Loading...</p>;
    }
    else {
        const artists = data.artists
        const songs = data.songs
    return(
        <Router>
            <div>
                <Navigation />
                <Route exact path="/" render= { (props) => <HomePage {...props} artists={artists} songs={songs}/>}/>
                <Route path="/about" component={About} />
                <Route path="/music" component={MusicCardList} />
                <Route path="/videos" component={Videos} />
                <Route path="/artists" render= { (props) => <ArtisteComponent {...props} artists={artists}/>} />
                <Subscribe createSubscription = {createSubscription}/>
                <Footer />
            </div>
        </Router>
    )
}
}
 
export default App