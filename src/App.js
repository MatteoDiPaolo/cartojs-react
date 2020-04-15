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
  state = {
    center: [47.5, 19.05],
    zoom: 12,
    nativeMap: undefined,
  }

  cartoClient = new carto.Client({ apiKey: '349731705c02ac8b74579ec7a62f4baf7272df84', username: 'matteodipaolo' });

  componentDidMount() {
    this.setState({ nativeMap: this.nativeMap });
  }

  render() {
    const { center, zoom } = this.state;

    return (
      <main>
        <Logo/>
        <Map center={center} zoom={zoom} ref={node => { this.nativeMap = node && node.leafletElement }}>
          <Basemap attribution="" url={CARTO_BASEMAP} />

          <Layer
            nativeMap={this.nativeMap}
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
