import { Component } from 'react';
import PropTypes from 'prop-types';
import carto from '@carto/carto.js/carto';

class Layer extends Component {
  static contextTypes = {
    map: PropTypes.object,
  };

  constructor(props) {
    super(props);

    const { source, style } = props;

    const cartoSource = new carto.source.SQL(source);
    const cartoStyle = new carto.style.CartoCSS(style);

    this.layer = new carto.layer.Layer(cartoSource, cartoStyle);
  }

  componentDidMount() {
    const { client, nativeMap } = this.props;

    client.addLayer(this.layer);
    client.getLeafletLayer().addTo(nativeMap);
  }

  render() {
    const { style } = this.props;
    const layerStyle = this.layer.getStyle();

    layerStyle.setContent(style);

    return null;
  }
}

export default Layer;
