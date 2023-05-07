//App file
import  React from 'react'
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ColorSchemesExample from "./commponents/NavBar"
import Login from './Pages/login';
import Allproducts from "./Pages/Products/Allproducts" 
import Product from "./Pages/Products/detalies"

const App=()=> {
 
    return(
     <div>
      <ColorSchemesExample></ColorSchemesExample>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>}></Route> 
        <Route path="/Home" element={<Home></Home>}></Route> 
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='/allproduct' element={<Allproducts></Allproducts>}></Route>
        <Route path="/Detalies" element={<Product></Product>} ></Route>
      </Routes>
      </BrowserRouter>
     </div>

    );
}
export default App;





