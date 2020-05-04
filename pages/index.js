import { longdo, map, LongdoMap } from '../LongDoMap/LongDoMap-Starter'
import React,{ Component } from 'react'
import Layout from '../component/layout/layout';

class LongDoMapPage extends Component {

    initMap(){
      map.Layers.setBase(longdo.Layers.GRAY);
    }
  
    render() {
      const mapKey = '1234778bad4852953ddbeb5ceea0348c'
      return (
        <Layout>
          <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />
        </Layout>
      );
    }
  }
  
  export default LongDoMapPage;