import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import data from '../../data/artistes.json'
import MusicCard from './MusicCard'

class MusicCardList extends Component{

    render(){
        const songs = data.songs
        return(
            <Container>
                <Row>
                    <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>
                        Releases
                    </h1>
                </Row>
                <Row >
                {songs.map(music =>
                    <Col xs={12} sm={6} lg ={4} xl ={3} className="music-card-list" >
                         <MusicCard songs={music}/>
                    </Col>)}
                </Row>
            </Container>
        )
    }
}

export default MusicCardList