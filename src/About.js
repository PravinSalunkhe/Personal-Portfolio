import React from 'react';
import {Row, Container} from 'reactstrap';
function About(props) {
    return(
        <Container id="abt-container">
            <Row>
            <h1 class="regularh1">About Me</h1>
            </Row>
            <Row>
                <div className="container">
                <p className="para">
                    Hey<span id="hello">&#128075;</span>, this is Pravin Salunkhe. I am a final year student at Pune Institute of Computer Technology(PICT), Pune. 
                    I am the kind of a person who believes in giving my best in whatever I do. I have been and am very good at academics. 
                    I have worked on several projects related to web development and Databases. I am a very quick learner and like to 
                    explore and learn new technologies and skills. I also love to work on my logical and problem-solving skills by 
                    doing competitive coding. I have uploaded all of my notable work on github for which I have provided the links and 
                    I am still growing and learning as a software enthusiast. 
                </p>
                </div>
            </Row>
        </Container>
    )
}

export default About;