import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const PetList = () => {
    
    const [petList, setPetList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((response) => {
                console.log(response.data);
                setPetList(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Container>
            <Row>
                <Col className="text-start">
                    <h1>PLACES VISITED</h1>
                </Col>
            </Row>
            <Row className="mt-3 mb-4 text-start">
                <h3>Places I've visited!</h3>
            </Row>
            <Row className="my-2 text-start">
                <h3></h3>
            </Row>
            <Col className="text-end mb-3">
                    <Link to={"/pets/new"}>Add a city to the list</Link>
                </Col>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {petList.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td className="d-flex justify-content-center">
                                <Link to={`/pets/edit/${pet._id}`}>Edit</Link>
                                <div className="mx-1">
                                    |
                                </div>
                                <Link className to={`/pets/${pet._id}`}>Details</Link> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    )

}

export default PetList;
