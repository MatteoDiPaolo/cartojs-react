import { Component } from 'react';
import carto from '@carto/carto.js/carto';

class Layer extends Component {
  constructor(props) {
    super(props);

    const { source, style } = props;

    const cartoSource = new carto.source.SQL(source);
    const cartoStyle = new carto.style.CartoCSS(style);

    this.layer = new carto.layer.Layer(cartoSource, cartoStyle);
  }

  componentDidMount() {
    const { client, map } = this.props;

    client.addLayer(this.layer);
    client.getLeafletLayer().addTo(map);
  }

  render() {
    const { style } = this.props;
    const layerStyle = this.layer.getStyle();

    layerStyle.setContent(style);

    return null;
  }
}

export default Layer;
