import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

class Listing extends Component {

    constructor(props) {
        super(props)   
        this.state = {
            records: []
        }
        
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

    renderListing() {
        let recordList = []
        this.state.records.map(record => {
         return recordList.push(
            <div className='d-flex'>
            <Card style={{position:"retlive", width: "320px", left: "32px",
               top:"350px", borderStyle:"none", margin:"15px"}}>
               <div href="#" title="Like Button">
               <button class="like-button fa-sharp fa-regular fa-heart"></button>
               </div>
               <Card.Img variant="top" src={record.image} style={
               {width:"320px", height:"250px", left:"32px", top:"200px",borderRadius: "16px" }}/>

               <Card.Body>
               <Card.Title className='justify-content-between'>
                   <div className='d-flex justify-content-between'>
                       <span>{record.title}</span>
                       <span>{record.price}</span>
                    </div>
               </Card.Title>
               <Card.Text style={{width:"320px",height:"190px",fontfamily: 'Outfit',fontstyle: "normal",fontweight:"500",
                        fontsize: "14px",color: "rgba(0, 0, 0, 0.5)"}}>
                {record.description}</Card.Text>
               <Button variant="warning" href="/Detalies" >Product Detailes</Button>
             </Card.Body>
            </Card>
            </div> 

         )
        } )
     
        return recordList;
    }

render() {
        return (
           <Col className="d-flex ">
            {this.renderListing()} 
           </Col>
        );
    }
}
export default Listing;