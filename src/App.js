import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Alb from './Alb.js';





class App extends Component {


  constructor() {
    super();
    this.state = {
      albuns: [],
    }
    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setAccessToken('BQAuW12oSUqqwjn3Sg3GpPpzfCsSs4ZQ-xBPeGb55kulmxexG2DfAfpA2KajVzdxdridsoN4FinQZNE-N5uWortiHrGIO-5xF7-a7h6FRvXsylyOe6UmVFesR4_BzxU6SlaVBeLf0fUQ');
    this.getAlbuns();

  }
  getAlbuns() {
    let successHandler = (data) => {
      console.log(data.items);
      this.setState({ albuns: data.items })
    };

    let errorHandler = function (err) {
      console.error(err);
    }

    this.spotifyApi
      .getArtistAlbums('3dRfiJ2650SZu6GbydcHNb')
      .then(successHandler, errorHandler);

  }

 /* getArtistAlbumId(id){

    let album = this.spotifyApi.getAlbum(id).then((data)=>{
      console.log(data);
    },
    (error)=>
    {
      console.error(error);
    });

  }*/

  

 /* renderAlbuns(albuns) {
    let renderedAlbuns = [];
    for (let i = 0; i < albuns.length; i++) {
      let album = albuns[i];
      let currentAlbum = (
          <div >
            <p>Album:{album.name}</p>
            <button onClick={this.getArtistAlbumId(album.id)}>
              <img style={{width: 200}} src={album.images[0].url }/>  
            </button>          
          </div>
      )
      renderedAlbuns.push(currentAlbum);
    }
    return renderedAlbuns;
  }*/


  render() {
    return (
      <div className="App" style={{backgroundColor: "gray", marginTop: -22 }}>
      <h1>Meu Spotify</h1>
        {this.state.albuns.map((albu)=>{
          return (<Alb album={albu}/>);
        })}
      </div>
    );
  }
}

export default App;
