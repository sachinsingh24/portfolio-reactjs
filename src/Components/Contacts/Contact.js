/** @format */

import React from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import './Contact.css';
import Resource from '../img/Mylogoo.png';

const Contact = () => {
  return (
    <section>
      <div className='container-fluid'>
        <div className='contact-wrap'>
          <div className='detail'>
            <Form>
              <Row className='mb-3 my-1'>
                <Form.Group as={Col} controlId='formGridName' className='mt-2'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' placeholder='First name' />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId='formGridPassword'
                  className='mt-2'>
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control type='contact' placeholder='Enter Contact No' />
                </Form.Group>

                <Form.Group controlId='formGridEmail' className='mt-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>

                <FloatingLabel
                  controlId='floatingTextarea2'
                  label='Comments'
                  className='mt-3'>
                  <Form.Control
                    as='textarea'
                    placeholder='Leave a comment here'
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>

                <Form.Group className='mb-3 mt-2' id='formGridCheckbox'>
                  <Form.Check type='checkbox' label='Check me out' />
                </Form.Group>

                <Button
                  variant='primary'
                  type='submit'
                  as={Col}
                  className='contact-btn'>
                  Submit
                </Button>
              </Row>
            </Form>
          </div>
          <div className='Resource-img'>
            <img src={Resource} alt='Resource' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
