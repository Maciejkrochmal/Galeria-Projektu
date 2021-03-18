import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import Kol1 from '../../assets/Kol1.jpg'
import Kol2 from '../../assets/Kol2.jpg'
import Kol3 from '../../assets/Kol3.jpg'
import {Link} from "react-router-dom";

export function HomeMiddle() {
    return (
        <Container>
            <Row>
                <Col>
                    <Link to='/'>
                        <Image src={Kol1} square/>
                    </Link>
                    <Link to='/'>
                        <p>Nowoczesne</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/'>
                        <Image src={Kol2} square/>
                    </Link>
                    <Link to='/'>
                        <p>Fusion</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/'>
                        <Image src={Kol3} square/>
                    </Link>
                    <Link to='/'>
                        <p>Stylowe</p>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}