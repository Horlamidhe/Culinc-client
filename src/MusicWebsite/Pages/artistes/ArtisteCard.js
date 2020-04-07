import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiLink} from 'react-icons/fi'
import { IconContext } from "react-icons";

function ArtisteCard(props){
    return(
        <Card >
            <div className="card-container">
                <div className="card-image">
                    <Card.Img  variant="top" src={`/image/artistes/${props.artists.image}`} fluid="true"/>
                </div>   
                <div className="hover-icon">
                    <IconContext.Provider size="10x" value={{ style: { verticalAlign: 'middle',color:"black" } }}>
                         <Link to={`/artists/${props.artists.name}`}>
                            <FiLink  size={30} className="icon"/>
                         </Link>
                     </IconContext.Provider>
                </div>
            </div>
            
            <Card.Body style={{backgroundColor:"black"}}>
                <Card.Title className="artiste-card-title"><span style={{fontSize:"18px",color:"white",marginLeft:"10px",fontWeight:"900"}}>{props.artists.name}</span></Card.Title>
            </Card.Body>
        </Card>
    )
}
export default ArtisteCard