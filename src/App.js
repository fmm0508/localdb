import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('everything is good.....');
    dispatchFetch()
    .then(function(response) {
      const res = [];
      res.push(response);
      console.log(res)
      setData(res);
    });
  },[]);

  const dispatchFetch = async () => {
    const response = await fetch('https://dummyjson.com/products/1');
    const result = await response.json();
    return result;
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const personInfo = Object.create(null);
    personInfo.first_name = event.target[0].value;
    personInfo.middle_name = event.target[1].value;
    personInfo.last_name = event.target[2].value;
    personInfo.dob = event.target[3].value;
    personInfo.email = event.target[4].value;
    personInfo.street = event.target[5].value;
    personInfo.city = event.target[6].value;
    personInfo.state = event.target[7].value;
    personInfo.zip = event.target[8].value;
    personInfo.phone = event.target[9].value;
    
    // if(personInfo.first_name.length && 
    //   personInfo.middle_name.length && 
    //   personInfo.last_name.length && 
    //   personInfo.dob.length &&
    //   personInfo.email.length &&
    //   personInfo.street.length &&
    //   personInfo.city.length &&
    //   personInfo.state.length &&
    //   personInfo.zip.length &&
    //   personInfo.phone.length) 
  }
  if (data != null)
  return (
    <Container>
      {/* <form onSubmit={ onFormSubmit }>
        <input type="text" name="firstName" size="60" placeholder='First name'/>
        <input type="text" name="middleName" size="60" placeholder='Middle name(optional)'/>
        <input type="text" name="lastName"  size="60" placeholder='Last name'/>
        <input type="date" name="dateOfBirth" placeholder='Date of birth'/>
        <input type="email" name="emailAddress" placeholder='Email address'/>
        <input type="text" name="street" placeholder='Street'/>
        <input type="text" name="city" placeholder='City'/>
        <input type="text" name="state" placeholder='State'/>
        <input type="number" name="zipCode" placeholder='Zip'/>
        <input type="tel" name="phoneNumber" placeholder='Phone'/>
        <button>submit</button>
      </form> */}
      <Row>
        <Col><h1>LocalDB</h1></Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Environments</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Stages</Card.Subtitle>
              <Button variant="dark">{data[0].id}</Button>
              <Card.Text></Card.Text>
              <ListGroup>
                <ListGroup.Item>
                <Card.Link href="https://aesthetic-khapse-f59b87.netlify.app/">Production:https://aesthetic-khapse-f59b87.netlify.app/</Card.Link>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                <Card.Link href="https://friendly-druid-85833f.netlify.app/">Staging: https://friendly-druid-85833f.netlify.app/</Card.Link>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                <Card.Link href="https://lucent-nasturtium-f19a77.netlify.app/">Development: https://lucent-nasturtium-f19a77.netlify.app/</Card.Link>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Misc</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Data</Card.Subtitle>
              <Button variant="dark">{data[0].description}</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem', backgroundColor:'back' }}>
            <Card.Body>
              <Card.Title className="ext-white">{data[0].thumbnail}</Card.Title>
              <Card.Title className="ext-white">{data[0].category}</Card.Title>
              <Card.Title className="ext-white">{data[0].discountPercentage}</Card.Title>
              <Card.Title className="ext-white">{data[0].title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  return <><p>. Loading .......</p></>;
}

export default App;
