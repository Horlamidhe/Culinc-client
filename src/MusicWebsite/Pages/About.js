import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

function About(){
    return(
        <Container fluid={true} className="about">
            <Row>
                <Col xs={12} sm={{span:4,offset:4}} style={{textAlign:"center",wordBreak:"break-all"}}>
                    <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>ABOUT US</h1>
                </Col>
                
            </Row>
            <Row style={{marginTop:"10px"}}>
                <Col xs={12} sm={6} className="about-image-div">
                    <Image src="/logo.jpg" width="200px" className="about-image"/>
                </Col>
                <Col xs={12} sm={6} className="about-text">
                    <p>Culture Inc. is one of Africa’s leading entertainment companies. Founded in 2012 as a record label by legendary Afrobeats producer, Don Jazzy, Mavin Records produced some of the definitive music and artistes such as Wande Cole, Tiwa Savage, and Reekado Banks. </p>
                    <p>Currently, its roster spans a variety of genres with artists including Korede Bello, Johnny Drille, Di'ja, D'Prince, Dr. SID, LadiPoe, DNA, Rema, Crayon and DJ Big N. </p>
                    <p>As the digital era continues to refashion the way we do things, Mavin’s taste for delivering the utmost value has inspired the company’s expansion into innovative services such as partnerships, content production, publishing and marketing. </p>  
                    <p>Today, Culture Inc. is a community of amazing people dedicated to creativity, innovation and breaking new frontiers.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About