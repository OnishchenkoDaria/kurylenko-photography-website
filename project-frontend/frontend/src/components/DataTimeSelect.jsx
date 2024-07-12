//import "../styles/Header.css"
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import userService from '../services/registerForm'

const DataTime = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    
    const Bookdate = async(par) => {
        console.log(selectedDate);
        console.log(selectedTime);
        //AXIOS server parse the data (selected data)
    }
  
    return (
      <>
        <Form>
        <Container>
            <Row>
            <Col>
              <p>Choose the date</p>
              <Calendar onChange = {setSelectedDate} value={selectedDate} />
            </Col>
            <Col>
            <Row>
              <p>Preferable time</p>
              <TimePicker onChange = {setSelectedTime} value={selectedTime} />
            </Row>
            <Row>
              <Button onClick = {Bookdate} variant="primary" size="sm">
                Submit
              </Button>
            </Row>
            </Col>
            </Row>
        </Container>
        </Form>   
      </>
    );
  };
  
  export default DataTime;