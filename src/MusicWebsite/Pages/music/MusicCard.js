import React from 'react'
import {Image} from 'react-bootstrap'
import {FaSpotify, FaSoundcloud, FaItunes} from 'react-icons/fa'
import { IconContext } from "react-icons";

function MusicCard(props) {
    return ( 
        <div className="music-card">
            <Image src={`/image/musicArt/${props.songs.art}`} fluid />
            <h3>New Music</h3>
            <h2>{props.songs.artists} - {props.songs.title}</h2>
            <IconContext.Provider  value={{ style: { verticalAlign: 'middle',color:"green"} }}>
                <a href={`${props.songs.links.spotify}`} >
                    <FaSpotify size={30} className="music-link"/>
                </a>
            </IconContext.Provider >
            <IconContext.Provider size="10x" value={{ style: { verticalAlign: 'middle',color:"orange" } }}>
                <a href={`${props.songs.links.soundcloud}`} >
                    <FaSoundcloud size={30} className="music-link" />
                </a>
            </IconContext.Provider >
            <IconContext.Provider size="10x" value={{ style: { verticalAlign: 'middle',color:"black" } }}>
                <a href={`${props.songs.links.spotify}`} >
                    <FaItunes size={30} className="music-link" />
                </a>
            </IconContext.Provider >
        </div>
    )

}
export default MusicCard