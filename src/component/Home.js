import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rpgImage from '../img/RPG1.png';

export default function Home() {
    return (
        <Container className='my-9'>
            <Row >
                <Col xs={6} md={4}>
                    <Image className='w-52 border-2 bg-emerald-100 rounded-lg border-emerald-500 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-0 duration-300 ' src={rpgImage} rounded/>
                </Col>
            </Row>


        </Container>
    )
}
