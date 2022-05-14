import {Row,Col,Container,Card} from 'react-bootstrap';
import './Start.css';

function Start(props) {

    const start=()=>{
        props.handler()
    }

  return (
    <div >
        <Card style={{ width: '35rem' , height:'25rem'}}>
        <Container >
        <Row className="d-flex justify-content-md-center mt-5 Start">Welcome</Row>
        <Row className="d-flex justify-content-center"><Col md={2} className="d-flex align-items-center justify-content-center mt-5 py-2 pointers" onClick={start}>Start</Col></Row>
        </Container>
        </Card>
    </div>
  );
}

export default Start;
