import React, { Component } from 'react'
import {Container, Row, Col, InputGroup, FormControl,Button} from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaYoutube } from 'react-icons/fa'

class Subscribe extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(e) {
        this.props.createSubscription({ variables: { email: this.state.value } });
        alert('Subscribed!')
        this.setState({value:''})
      }
    render(){
    return(
        <Container fluid={true} style={{backgroundColor:"black"}}>
            <Row style={{backgroundColor:"#eeeeee",marginTop:"20px",borderBottomRightRadius:"50px"}}>
                <Col xs={12} sm={{span:6,offset:3}} className="subscribe">
                    <h1>FOLLOW CULTURE INC.</h1>
                    <div style={{paddingTop:"20px"}}>
                        <a href="#">
                        <FaYoutube size={25} className="social-link"/>
                        </a>
                        <a href="#">
                        <FaFacebook size={25} className="social-link"/>
                        </a>
                        <a href="#">
                        <FaInstagram size={25} className="social-link"/>
                        </a>
                        <a href="#">
                        <FaTwitter size={25} className="social-link"/>
                        </a>
                        <a href="#">
                        <FaSpotify size={25} className="social-link"/>
                        </a>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <InputGroup className="mb-3">
                            <FormControl className="email" placeholder="Email Address" 
                                type="email" value={this.state.value} onChange={this.handleChange}/>
                             <InputGroup.Append>
                                <Button className="email-button" onClick={this.handleSubmit}><span style={{fontSize:"18px",marginLeft:"10px",fontWeight:"900"}}>Get on the List</span></Button>
                             </InputGroup.Append>   

                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default Subscribe