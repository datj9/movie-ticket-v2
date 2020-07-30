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
                        <th>Name</th>
                        <th>Address</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>CGV Su Van Hanh</td>
                        <td>11 Su Van Hanh Street, District 10</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={false} onHide={handleModalCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Theater</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Name
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='text' placeholder='Enter Theater Name' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Address
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='text' placeholder='Enter Theater Address' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Image URL
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='text' placeholder='Enter Image URL' />
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
                    <Modal.Title>Update Theater</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Name
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='text' defaultValue='CGV Su Van Hanh' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Address
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='text' defaultValue='11 Su Van Hanh Street, District 10' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>
                                Image URL
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control type='text' defaultValue='https://google.com' />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeModalUpdate}>
                        Close
                    </Button>
                    <Button variant='primary'>Update</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
