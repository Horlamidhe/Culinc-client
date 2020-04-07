import React, { Component } from 'react'
import {BrowserRouter as Route} from 'react-router-dom'
import ArtisteCard from './ArtisteCard'
import {Container, Row, Col} from 'react-bootstrap'
import ArtistePage from "./ArtistePage";

class ArtisteCardList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Row>
                    <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>
                        Artists
                    </h1>
                </Row>
                <Row >
                {this.props.artists.map(artiste =>
                    <Col xs={12} sm={6} md={6} lg ={4} xl ={3} className="artiste-card-list">
                         <ArtisteCard artists={artiste}/>
                    </Col>)}
                </Row>
                <Route path="/artists/:name" component={ArtistePage}/>
            </Container>
        )
    }
}

export default ArtisteCardList