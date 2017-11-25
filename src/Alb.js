import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';



class Alb extends Component{

constructor(){
    super();
    this.state={
        
    }
}

componentDidMount(){
    
}
renderAlbum(){
let album = this.props.album;
return(
    <div >
        <h3>Album</h3>
        <p> {album.name} </p>
        <img style={{width: 200}} src={album.images[0].url}/>
    </div>    
);


}

render(){
    return (

        <button style={{padding: 10, margin: 10}} >{this.renderAlbum()}</button>
    );
}


}
export default Alb;