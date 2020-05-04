import React, { useState, useEffect } from "react";
import Head from 'next/head'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow} from 'react-google-maps'
import * as parkData from '../data/data.json'
import mapStyles from '../lib/mapStyles'
import Styled from 'styled-components'
import Layout from "../component/layout/layout";
import Modal from "../component/layout/modal";
import ButSendCon from "../component/layout/butSendContent";


function Map(){
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return(
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    defaultOptions = {{styles: mapStyles}}
  >
    {parkData.features.map(park => (
      <div>
        <Marker
        key={park.properties.PARK_ID}
        position={{
          lat: park.geometry.coordinates[1],
          lng: park.geometry.coordinates[0]
        }}
        onClick={() => {
          setSelectedPark(park);
        }}
        icon={{
          url: `https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/91369740_1451705565002839_7010116419325001728_n.png?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGheW9zayaA_ZYEKexXcBEQyQsDK6S1pDvJCwMrpLWkO2Ro9mla-3Zv2JSztPm0faxJbLH8UVUTEX18caYEbxxL&_nc_ohc=8LDXOZ24s8UAX_jFlCF&_nc_ht=scontent.fbkk12-2.fna&oh=d872b924a46f540a2c8f694049795399&oe=5ECBE970`,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
      {/* <InfoWindow>
        test
      </InfoWindow> */}
      </div>
    ))}
    {selectedPark && (
      <InfoWindow
        onCloseClick={() => {
          setSelectedPark(null);
        }}
        position={{
          lat: selectedPark.geometry.coordinates[1],
          lng: selectedPark.geometry.coordinates[0]
        }}
      >
        <div>
          <img src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/91369740_1451705565002839_7010116419325001728_n.png?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeGheW9zayaA_ZYEKexXcBEQyQsDK6S1pDvJCwMrpLWkO2Ro9mla-3Zv2JSztPm0faxJbLH8UVUTEX18caYEbxxL&_nc_ohc=8LDXOZ24s8UAX_jFlCF&_nc_ht=scontent.fbkk12-2.fna&oh=d872b924a46f540a2c8f694049795399&oe=5ECBE970" width='50'/>
          <h2>{selectedPark.properties.NAME}</h2>
          <p>{selectedPark.properties.DESCRIPTIO}</p>
        </div>
      </InfoWindow>
    )}
  </GoogleMap>
);
}
const WrapperMap = withScriptjs(withGoogleMap(Map));






const Index = () => {
  const [ navOpen, setNavOpen ] = useState(false)
  const clickToShow = () => { setNavOpen(!navOpen) }
  console.log(navOpen)
  return(
    <Layout>
      <Modal isOpen= {navOpen} onClose = {() => { setNavOpen(!navOpen) }}/>
        <div style = {{ width: "100vw", height: "100vh"}}>
          <WrapperMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCKFyPsifDJlAYprZNVx5Mm3O8xOn9WZIg`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <ButSendCon func = {() => { setNavOpen(!navOpen) }}/>
    </Layout>
  )
}

export default Index
