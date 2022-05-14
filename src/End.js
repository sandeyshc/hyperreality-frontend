import {Row,Col,Container,Card} from 'react-bootstrap';
// import './End.css';

function End(props) {

    const start=()=>{
        props.handler()
    }

  return (
    <div >
        <Card style={{ width: '35rem' , height:'25rem'}}>
        <Container >
        <Row className="d-flex justify-content-md-center mt-5 Start">Thanks for your Time</Row>
         </Container>
        </Card>
    </div>
  );
}

export default End;
