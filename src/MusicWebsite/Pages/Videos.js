import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col,Carousel} from 'react-bootstrap'
import {CarouselItem} from 'react-bootstrap'

function Videos() {
    return(
        <div>
            <Container>
                <Row>
                    <Link to="/videos">
                        <h1 style={{fontSize:"48px",color:"#212529",marginLeft:"10px",fontWeight:"900"}}>
                            Videos
                        </h1>
                    </Link>
                </Row>
                <Row >
                    <Col xs={12} sm={12} >
                        <Carousel  fade={true} style={{width:"100%"}}>
                                <CarouselItem style={{width:"100%"}}>
                                    <iframe
                                        style={{
                                        width: "100%",
                                        height: "400px"
                                        }}
                                        title="music-video"
                                        src="https://www.youtube.com/embed/cLha1-NuPzA"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Videos