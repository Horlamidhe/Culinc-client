import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import data from '../../data/artistes.json'
import MusicCard from '../music/MusicCard'

class ArtistePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {params} = this.props.match
        const artiste = this.props.artists.find(({name}) => name === this.props.match.params.name)
        const song = data.songs.filter(({artists}) => artists === this.props.match.params.name)
        return(
            <div>
            <Container fluid={true} className="about">
                <Row>
                    <Col xs={12} sm={{span:4,offset:4}} style={{textAlign:"center"}}>
                        <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>{params.name}</h1>
                    </Col>
                    
                </Row>
                <Row style={{marginTop:"10px"}}>
                    <Col xs={12} sm={6} className="artist-about-image-div">
                        <Image src={`/image/artistes/${artiste.image}`} height="auto" width="100%" />
                    </Col>
                    <Col xs={12} sm={6} className="artist-about-text">
                        <p style={{fontSize:"18px",color:"#212529",fontWeight:"600"}}>{artiste.description}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                     <Col xs={12} sm={{span:6,offset:3}} style={{textAlign:"center"}}>
                        <p style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>{params.name}'s Music</p>
                    </Col>
                </Row>

                {(song) ? 
                <Row >
                    {song.map(music =>
                        <Col xs={12} sm={6} lg ={4} xl ={3} className="music-card-list" >
                            <MusicCard songs={music}/>
                        </Col>)}
                </Row> :
                <Row>
                    <Col xs={12} sm={6} lg ={4} xl ={3} className="music-card-list" >
                            <p>No Music</p>
                        </Col>
                </Row>
                }
            </Container>
            </div>
        )
    }
}

export default ArtistePage