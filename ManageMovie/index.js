import React from "react";
import { Container, Table, Button, Modal, Form, Col, Row } from "react-bootstrap";

export default function ManageMovie() {
    const handleModalCreate = () => {};
    const handleModalUpdate = () => {};

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Running Time</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Avenger</td>
                        <td>Comedy, Adventure</td>
                        <td>120</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <Button variant='primary' onClick={handleModalCreate}>
                Create Movie
            </Button>

            <Modal show={false} onHide={handleModalCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Movie Name
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control placeholder='Enter Movie Name' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Running Time
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='number' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Image URL
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control placeholder='Enter Image URL' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Description
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control placeholder='Description' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Genre
                            </Form.Label>
                            <Col sm='7'>
                                <Form.Control as='select'>
                                    <select>Select Genre</select>
                                </Form.Control>
                            </Col>
                            <Col sm='3'>
                                <Button>Add Genre</Button>
                            </Col>
                        </Form.Group>
                        <div>
                            <span>Comedy, </span>
                            <span>Adventure</span>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={false} onHide={handleModalUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Movie Name
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control placeholder='Enter Movie Name' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Running Time
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='number' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Image URL
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control placeholder='Enter Image URL' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Description
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control placeholder='Description' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Genre
                            </Form.Label>
                            <Col sm='7'>
                                <Form.Control as='select'>
                                    <select>Select Genre</select>
                                </Form.Control>
                            </Col>
                            <Col sm='3'>
                                <Button>Add Genre</Button>
                            </Col>
                        </Form.Group>
                        <div>
                            <span>Comedy, </span>
                            <span>Adventure</span>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='d-flex justify-content-between'>
                        <Button variant='danger'>Delete</Button>
                        <div>
                            <Button variant='secondary' onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant='primary' onClick={handleClose}>
                                Update
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
