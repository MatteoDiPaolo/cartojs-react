import React, { Component } from 'react';
import { Map, TileLayer as Basemap } from 'react-leaflet';
import carto from '@carto/carto.js/carto';
import Logo from './components/Logo';
import Layer from './components/Layer';
import Description from './components/Description';
import merged from './data/merged';
import './App.css';

const CARTO_BASEMAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png';

class App extends Component {
  // Defines Map basic info
  state = {
    map: undefined,
    center: [47.47, 19.13],
    zoom: 11,
  }

  // Defines the entry point to communicate with Carto
  cartoClient = new carto.Client({ 
    apiKey: process.env.REACT_APP_CARTO_API_KEY, 
    username: process.env.REACT_APP_CARTO_USER_NAME 
  });

  componentDidMount() {
    this.setState({ map: this.map });
  }

  render() {
    const { map, center, zoom } = this.state;

    return (
      <main>
        <Logo/>
        <Map center={center} zoom={zoom} ref={node => { this.map = node && node.leafletElement }}>
          <Basemap attribution="" url={CARTO_BASEMAP} />
          <Layer
            map={map}
            source={merged.source}
            style={merged.style}
            client={this.cartoClient}
            hidden={false}
          />
        </Map>
        <Description/>
      </main>
    );
  }
}

export default App;
