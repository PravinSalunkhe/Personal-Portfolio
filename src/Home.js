import React from 'react';
import Wave from 'react-wavify';
import { Button, Col, Row } from 'reactstrap';
import {Link} from 'react-scroll';

function Home(props) {
    return(
        <div id="home">
            <Wave
                className="wave"
                fill=" #2e1f70"
                paused={false}
                options={{
                height: 20,
                amplitude: 50,
                speed: 0.1,
                points: 6
                }}
            /> 
            <div id="intro" className="container-fluid">
                <Row>
                <Col md={6} lg={6}>  
                    <img src="/images/img_home.png" id="img-home" alt="image_home"></img>        
                </Col> 
                <Col md={6} lg={6}>
                    <h1 id="hi">Hi, I'm <em class="highlight">PRAVIN SALUNKHE</em></h1>
                    <h3>A <em class="highlight">Software Engineer</em> and a student at the Pune Institute of Computer Technology</h3>
                    <Link to="Contact" spy={true} smooth='linear' duration={100} >
                    <Button variant="outline-light" id="action-btn">
                        Hire me!
                    </Button>
                    </Link>
                </Col>
                </Row>
            </div>   
        </div>
    )
}

export default Home;