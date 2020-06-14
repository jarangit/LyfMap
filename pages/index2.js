import { longdo, map, LongdoMap } from '../LongDoMap/LongDoMap-Starter'
import React,{ Component,useState } from 'react'
import Layout from '../component/layout/layout';
import ButSendCon from "../component/layout/butSendContent";
import Modal from "../component/layout/modal";



const LongDoMapPage = () =>  {

    const initMap=()=>{
     return map.Layers.setBase(longdo.Layers.GRAY);
    }
  
      const [ navOpen, setNavOpen ] = useState(true)
      const clickToShow = () => { setNavOpen(!navOpen) }
      const mapKey = '1234778bad4852953ddbeb5ceea0348c'
      return (
        <Layout>
          <Modal isOpen= {navOpen} onClose = {() => { setNavOpen(!navOpen) }}/>
          <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
          <ButSendCon func = {clickToShow} />
        </Layout>
      );
  }
  
  export default LongDoMapPage;