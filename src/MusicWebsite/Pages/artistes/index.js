import React from 'react'
import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom'
import ArtisteCardList from './ArtisteCardList'
import ArtistePage from './ArtistePage'

function ArtisteComponent(props) {
    const artists = props.artists
    
    return (
            <div>
                <Switch>
                <Route exact path={props.match.path} render={(props) =><ArtisteCardList artists={artists}/>}/>
                <Route path={`${props.match.path}/:name`} render={(props) => <ArtistePage {...props} artists={artists}/>}/>
                </Switch>
            </div>
        
    )
}

export default withRouter(ArtisteComponent)