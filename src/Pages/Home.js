import React from 'react'
import ColorSchemesExample from "../commponents/NavBar";
import Head from "../commponents/header";
import Homeproduct from "./Products/hopro"
import SubTitle from "../commponents/subtitle"
import SeeMore from "../commponents/sm"

const Home = () => {
  return (
  <div>
        <ColorSchemesExample></ColorSchemesExample> 
        <Head></Head>
        <SubTitle></SubTitle>
        <Homeproduct></Homeproduct>
        <SeeMore></SeeMore>

    </div>
  )
}

export default Home
