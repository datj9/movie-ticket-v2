import React from "react";
import { Container, Table, Button, Modal, Form, Col, Row } from "react-bootstrap";

export default function ManageTheater() {
    const handleModalCreate = () => {};
    const openModalUpdate = () => {};
    const closeModalUpdate = () => {};

    return (
        <Container className='mt-4'>
            <Button variant='primary' onClick={handleModalCreate}>
                Create Theater
            </Button>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie</th>
                        <th>Theater</th>
                        <th>Starting Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Blue Eyes</td>
                        <td>CGV Su Van Hanh</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={false} onHide={handleModalCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Show</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Movie
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control as='select'>
                                    <select>Select Movie</select>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Theater
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control as='select'>
                                    <select>Select Theater</select>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleModalCreate}>
                        Close
                    </Button>
                    <Button variant='primary'>Create</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={false} onHide={closeModalUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Show</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Movie
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control as='select'>
                                    <select>Select Movie</select>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Theater
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control as='select'>
                                    <select>Select Theater</select>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='d-flex justify-content-between'>
                        <Button variant='danger'>Delete</Button>
                        <div>
                            <Button variant='secondary' onClick={closeModalUpdate}>
                                Close
                            </Button>
                            <Button variant='primary'>Update</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
