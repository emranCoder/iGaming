import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rockIcon from '../img/rockicon.png'
import paperIcon from '../img/papericon.png'
import seasorIcon from '../img/seasoricon.png'

export default function RockPaperSeasor() {
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <Image className='cursor-pointer' src={rockIcon} rounded />
                </Col>
                <Col>
                    <Image className='cursor-pointer' src={paperIcon} rounded />
                </Col>
                <Col>
                    <Image className='cursor-pointer' src={seasorIcon} rounded />
                </Col>
            </Row>
        </Container>
    )
}
