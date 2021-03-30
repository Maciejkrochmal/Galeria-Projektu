import React from "react";
import {Container, Col, Image, Media} from "react-bootstrap";
import Gal1 from '../../assets/Gal1.jpg'
import Gal2 from '../../assets/Gal2.jpg'
import Gal3 from '../../assets/Gal3.jpg'
import {Link} from "react-router-dom";
import {GALERIEDEFAULT} from "../../components/LinkPath"

export function GaleryMain() {

    return (
        <Container className="flex-column">
            <h1>GALERIE</h1>
            <Col>
                <Media className='d-lg-flex d-block'>
                    <Link to='/'>
                        <Image src={Gal1} square="true"/>
                    </Link>
                    <Media.Body>
                        <h3>Galeria Publiczna</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores autem cum
                            ducimus excepturi, facere itaque laborum nulla officiis, pariatur quam rem, rerum!
                            Accusantium dolor dolore eos fugiat impedit necessitatibus obcaecati porro quam. Eius error
                            fuga quaerat qui similique.</p>

                        <Link to="/publiczne">
                            <p>READ MORE → </p>
                        </Link>
                        <Link to="/publiczne2">
                            <p>READ MORE → </p>
                        </Link>
                    </Media.Body>
                </Media>
                <Media className='d-lg-flex d-block'>
                    <Link to='/'>
                        <Image src={Gal2} square="true"/>
                    </Link>
                    <Media.Body>
                        <h3>Galeria Domowa</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores autem cum
                            ducimus excepturi, facere itaque laborum nulla officiis, pariatur quam rem, rerum!
                            Accusantium dolor dolore eos fugiat impedit necessitatibus obcaecati porro quam. Eius error
                            fuga quaerat qui similique.</p>

                        <Link to='/'>
                            <p>READ MORE → </p>
                        </Link>
                    </Media.Body>
                </Media>
                <Media className='d-lg-flex d-block'>
                    <Link to='/'>
                        <Image src={Gal3} square="true"/>
                    </Link>
                    <Media.Body>
                        <h3>Galeria Apartamentu</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores autem cum
                            ducimus excepturi, facere itaque laborum nulla officiis, pariatur quam rem, rerum!
                            Accusantium dolor dolore eos fugiat impedit necessitatibus obcaecati porro quam. Eius error
                            fuga quaerat qui similique.</p>

                        <Link to='/'>
                            <p>READ MORE → </p>
                        </Link>
                    </Media.Body>
                </Media>
            </Col>
        </Container>
    )
}