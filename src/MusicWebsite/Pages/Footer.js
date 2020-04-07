import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'


function Footer(){
    return(
        <Container fluid={true} style={{backgroundColor:"black"}}>
            <Row style={{backgroundColor:"black"}}>
                <Col xs={12} sm={{span:6,offset:3}} className="footer">
                    <Image src="/logo.jpg" width="100px" height="100px" className="about-image"/>
                    <h1>Creating something iconic</h1>  
                </Col>
            </Row>
            <Row style={{borderTop:"1px solid whitesmoke"}}>
                <Col xs={12} sm={{span:6,offset:3}} style={{marginTop:"5px",textAlign:"center"}}>
                    <p style={{fontSize:"15px",marginLeft:"10px",fontWeight:"900",fontStyle:"italic"}}>@2020 Culture Inc.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer