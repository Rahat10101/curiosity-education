import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className="container">
            <div className="card m-5">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 order-md-1">
                            <h4 className="mb-3">Take Course</h4>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                   
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date"  />
                                   
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicTime">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type="time"  />
                                   
                                </Form.Group>
                                <Button variant="outline-dark" type="button">
                                Take Course
                                </Button>
                            </Form>
                        </div >
                    </div >
                </div>

            </div>
        </div>



    );
};

export default CheckOut;