import logo from './logo.svg';
import {Row,Col,Container,Card} from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './App.css';
import Cards from './Cards'
import { useEffect, useState } from 'react';
import Start from './Start';
import End from './End';


function App() {
  const [start,setstart]=useState(true)
  const [end,setend]=useState(false)


  const handler=()=>{
    setstart(false)
  }
  const stophandler=()=>{
    setend(true)
    let timer1=setTimeout(() => {
      setstart(true);
      setend(false)
    }, 5000);
    return () => {
      clearTimeout(timer1);
    };
  }

  return (

    <div className="App">
      {start && <Start handler={handler}/>}
      {!start && !end && <Cards stophandler={stophandler}/>}
      {!start && end && <End/>}
    </div>
  );
}

export default App;
