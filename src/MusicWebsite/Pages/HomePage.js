import React, {Component} from 'react'
import {Container, Row, Col, Image,Carousel, Button} from 'react-bootstrap'
import {CarouselItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import MusicCard from './music/MusicCard.js'
import { FaGripfire } from 'react-icons/fa'
import {IconContext} from 'react-icons'



class HomePage extends Component{
    constructor(props){
        super(props)
        this.selectedSongs = this.selectedSongs.bind(this)
    }  
    selectedSongs() {
        const songs = this.props.songs
        const pickedSongs = []
        for (var i=0;i<4;i++){
            var rand = songs[Math.floor(Math.random()* songs.length)]
            pickedSongs.push(rand)
        }
        return pickedSongs
    }
    
    render(){
        const pickedSongs = this.selectedSongs()
        return(
            <div>
            <Container fluid={true}>
                <Row className="homepage-header"> 
                    <Image src="/image/malte.jpg" width="100%" fluid height="auto"/>
                    <div className="header-text">
                    <IconContext.Provider  value={{ style: { verticalAlign: 'middle',color:"red"} }}>
                        <FaGripfire size={50} />
                    </IconContext.Provider>
                        <h1>ENJOY MUSIC</h1>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Link to="/artiste">
                        <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>
                            Artists
                        </h1>
                    </Link>
                </Row>
                <Row >
                    <Col xs={12} sm={12} >
                        <Carousel  fade={true} className="carousel" >
                            {this.props.artists.map(artiste =>
                                <CarouselItem className="carousel-item" >
                                    <Image  src={`/image/artistes/${artiste.image}`} alt="artiste" width="100%" height="100%" fluid />
                                    <Carousel.Caption>
                                        <p>{artiste.name}</p>
                                    </Carousel.Caption>
                                </CarouselItem>
                            ) }
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={3} className="align-self-end" style={{marginTop:"10px"}}>
                            <Link to="/artists">
                                <Button variant="light" className="artist-button" ><span style={{fontSize:"18px",marginLeft:"10px",fontWeight:"900"}}>All Artists</span></Button>
                            </Link>
                        </Col>
                </Row>
                
            </Container>
            <Container>
                <Row>
                    <Link to="/music">
                        <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>
                            Releases
                        </h1>
                    </Link>
                </Row>
                <Row>
                <Row >
                    {pickedSongs.map(song =>
                        <Col xs={12} sm={6} lg ={4} xl ={3} className="artiste-card-list">
                            <MusicCard songs={song}/>
                        </Col>)}
                    </Row>
                </Row>
                <Row>
                    <Col xs={6} sm={3} className="align-self-end" style={{marginTop:"10px"}}>
                            <Link to="/music">
                                <Button variant="light" className="artist-button" ><span style={{fontSize:"18px",marginLeft:"10px",fontWeight:"900"}}>All Releases</span></Button>
                            </Link>
                        </Col>
                </Row>
            </Container>
            </div>
                
        )
    }
}

export default HomePage