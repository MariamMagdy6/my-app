import React from 'react'
import Homeproduct from './hopro'
const Allproducts = () => {
  return (
   <div>
     <h2 style={{position: "absolute", width: "368px", height: "59px",
     left: "680px", top: "250px", fontfamily: 'Outfit', fontstyle: "normal",
     fontweight: "500", fontsize: "40px", lineheight: "50px", textalign: "center",
     color: "rgba(0, 0, 0, 0.75)"}}>All Products</h2>
     <div >
      <Homeproduct ></Homeproduct>
      <Homeproduct></Homeproduct>
     
      </div>
    
    </div>
 
  )
}

export default Allproducts
