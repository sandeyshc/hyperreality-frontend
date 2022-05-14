import logo from './logo.svg';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import {Row,Col,Container,Card} from 'react-bootstrap';
import { useEffect, useState } from 'react';
// import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './Cards.css'

function Cards(props) {

    const [curr,setcurr]=useState(0)
    const[currans,setcurrans]=useState(-1)
    const [userid,setuserid]=useState(0)
    // const [answers,setanswers]=useState([])


    useEffect(()=>{
        setuserid(uuidv4())
        console.log(window.localStorage.getItem(userid))
    },[])

    const handler=(curs)=>{
        console.log("clicked")
        setcurrans(curs)

    }

    const prevs=(e)=>{
        if(curr!=0){ setcurr(curr-1)}
    }

    const nexts=(e)=>{

        var meta = window.localStorage.getItem(userid) ? window.localStorage.getItem(userid) : {}
        var metas={};
        if(Object.keys(meta).length!=0){
            metas=JSON.parse(meta)
        }
        metas[curr+1]=currans
        window.localStorage.setItem(userid, JSON.stringify(metas));
        console.log(window.localStorage.getItem(userid),metas,meta)



        if(curr!=a.length-1){

            setcurr(curr+1);
            setcurrans(-1)
        
        }
        else{
            if (window.confirm('Are you sure you want to save this thing into the database?')) {
                metas["flag"]="Completed"
                window.localStorage.setItem(userid, JSON.stringify(metas));
                setcurr(0)
                setcurrans(-1)
                props.stophandler()
              } else {
                console.log('Thing was not saved to the database.');
              }
        }
    }

    const a=["How satisfied are you with our products? (Rating type, 1-5)","How fair are the prices compared to similar retailers? (Rating type, 1-5)","How satisfied are you with the value for money of your purchase? (Rating Type, 1-5)","On a scale of 1-10 how would you recommend us to your friends and family? (Rating Type, 1-10)","What could we do to improve our service? (Text Type)"]

  return (
<Card style={{ width: '35rem' , height:'25rem'}}>
{/* <MDBCardBody> */}
{/* ` */}
<Container >
  <Row className="justify-content-md-center mb-4">Customer Survey</Row>
  <Row className="d-flex justify-content-end me-5 mb-4"  >{curr+1}/5</Row>
  <Row className="d-flex justify-content-center mb-4 mx-3"> {curr+1+".  "+a[curr]}</Row>
  <Row xs="auto" className="d-flex justify-content-center mb-5">
  <Col className={`rounded-circle m-3 border border-dark pointer ${currans==1 && 'selects'}` } onClick={()=>handler(1)}>1</Col>
  <Col className={`rounded-circle m-3 border border-dark pointer ${currans==2 && 'selects'}` } onClick={()=>handler(2)}>2</Col>
  <Col className={`rounded-circle m-3 border border-dark pointer ${currans==3 && 'selects'}` } onClick={()=>handler(3)}>3</Col>
  <Col className={`rounded-circle m-3 border border-dark pointer ${currans==4 && 'selects'}` } onClick={()=>handler(4)}>4</Col>
  <Col className={`rounded-circle m-3 border border-dark pointer ${currans==5 && 'selects'}` } onClick={()=>handler(5)}>5</Col>
  </Row>
  <Row className="d-flex justify-content-center mt-5">
  <Col className="d-flex align-items-center justify-content-center py-2 rounded pointer" md={2} style={{backgroundColor:"blue",color:"white"}} onClick={prevs}>Prev</Col>
<Col className="d-flex align-items-center justify-content-center rounded py-2 pointer" md={{ span: 2, offset: 5 }} style={{backgroundColor:"red",color:"white"}} onClick={nexts}>Next</Col>
  </Row>
</Container>
{/* </MDBCardBody> */}
</Card>

);
}

export default Cards;
