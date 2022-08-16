import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaUpload } from 'react-icons/fa';

const NewPet = () => {

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets",
        {
            petName,
            petType,
            petDescription,
        })
        .then((response) => {
            console.log(response.data);
            navigate("/");
        }).catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    };

    return (
        <Container>
            <Row>
                <Col lg={7} className="mx-auto my-2 text-start">
                    <h1 >VISITED PLACES</h1>
                </Col>
                <Col lg={3}>
                    <p className="mt-4 my-2 px-2 text-start">
                        <Link to={"/pets"}>back to home</Link>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={10} className="mx-auto my-2 text-start">
                    <h3>Visited a new city?</h3>
                </Col>
            </Row>
            <Row>
            <Col lg={9} className="mx-auto my-3">
            <Form className="bg-white rounded-3 p-3 text-dark d-flex justify-content-center" onSubmit={onSubmitHandler}>
                <Col lg={9}>
                <Col lg={6} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formName">
                    <Form.Label className="text-dark fs-4">City</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetName(e.target.value)}
                        name="petName"
                        value={petName}
                    />
                    {errors.petName ? <span>{errors.petName.message}</span> : null}
                </Form.Group>
                </Col>
                <Col lg={6} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formType">
                    <Form.Label className="text-dark fs-4">Country</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetType(e.target.value)}
                        name="petType"
                        value={petType}
                    />
                    {errors.petType ? <span>{errors.petType.message}</span> : null}
                </Form.Group>
                </Col>
                <Col lg={6} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formDescription">
                    <Form.Label className="text-dark fs-4">City description</Form.Label>
                    <Form.Control 
                        as="textarea"
                        style={{height: '4rem'}}
                        onChange={(e) => setPetDescription(e.target.value)}
                        name="petDescription"
                        value={petDescription}
                    />
                    {errors.petDescription ? <span>{errors.petDescription.message}</span> : null}
                </Form.Group>
                <Button type="submit" className="bg-primary text-white"><FaUpload/> Add City</Button>
                </Col>
                </Col>

            </Form>
            </Col>
            </Row>
        </Container>
    )

}

export default NewPet;
