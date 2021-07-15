import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Form, FormGroup, Label, Input, Row, Button } from 'reactstrap';
import { Component } from 'react/cjs/react.production.min';
import { Card, CardTitle, CardImg} from 'reactstrap';
import {FiMail} from 'react-icons/fi';
import {AiFillLinkedin} from 'react-icons/ai';
import {database} from './firebase/config';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            name : '',
            email : '',
            message : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('form submitted!');   
        const { name, email, message } = this.state
        let templateParams = {
            from_name: name,
            to_name: 'Pravin Salunkhe',
            email: email,
            message: message
        }
        //adding entry to database
        database.collection("connections")
        .add({name,email,message})
        .then(function(res) {
            console.log('entry created');
        },function(err) {
            console.log('entry creation failed');
        });
        //sending email
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
        )
        .then(function(response) {
            alert("Thanks for contacting. I will reach out to you as soon as possible.");
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert("Sorry, something went wrong. Please try again!");
            console.log('FAILED...', error);
        });
        
        this.resetForm();
        console.log('form reset!');
    }
    resetForm() {
        this.setState({
          name: '',
          email: '',
          message: ''
        })
    }

    render() {
    return(
        <div className="container">
            <h1 class="regularh1">Contact</h1>
            <div className="card" id="contact-card">
            <Row>
                <Col xs={12} md={5} lg={4}>
                    <Card id="card-c">
                        <CardImg id="contact-img" src="/images/img_me.jpg" alt="my pic"></CardImg>
                        <CardTitle className="contact-title"><a href="mailto:salunkhepravin41@gmail.com" target="_blank"><FiMail className="icons" size="20px" stroke="#ff0000" fill="white" />&nbsp;&nbsp;&nbsp;salunkhepravin41@gmail.com</a></CardTitle>
                        <CardTitle className="contact-title"><a href="https://www.linkedin.com/in/pravin-salunkhe-a7b40817b/" target="_blank"><AiFillLinkedin className="icons" size="20px" stroke="#0072b1" fill="white" />&nbsp;&nbsp;&nbsp;linkedin</a></CardTitle>
                    </Card> 
                </Col>
                <Col xs={12} md={7} lg={8}>
                    <Form onSubmit={this.handleSubmit} id="contact-form">
                        <h1 class="regularh1" id="c-hi">Say Hi <span id="hello">&#128075;</span></h1>
                        <FormGroup row >
                            <Label for="name" sm={{ size: 3  }} md={{ size: 3 }} lg={{size: 2}} className="form-label">Full Name</Label>
                            <Col sm={8} md={8} lg={9}>
                            <Input type="text" name="name" id="name" className="form-input" placeholder="your name..." value={this.state.name} onChange={this.handleChange.bind(this,'name')} />
                            </Col>
                        </FormGroup>
                        <br></br>
                        <FormGroup row>
                            <Label for="email" sm={{ size: 3 }} md={{ size: 3 }} lg={{size: 2}} className="form-label">Email ID</Label>
                            <Col sm={8} md={8} lg={9}>
                            <Input type="email" name="email" id="email" className="form-input" placeholder="your email..." value={this.state.email} onChange={this.handleChange.bind(this,'email')} />
                            </Col>
                        </FormGroup> 
                        <br></br>
                        <FormGroup row>
                            <Label for="exampleText" sm={{ size: 3 }} md={{ size: 3 }} lg={{size: 2}} className="form-label">Subject</Label>
                            <Col sm={8} md={8} lg={9}>
                            <Input type="textarea" name="message" id="message" rows="3" className="form-input" placeholder="your message..." value={this.state.message} onChange={this.handleChange.bind(this,'message')}/>
                            </Col>
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <Col sm={{ size: 2, offset: 5 }}>
                            <Button  id="action-btn" variant="outline-dark" type="submit" >
                                Submit
                            </Button>
                            </Col>
                        </FormGroup>
                        <br></br>
                    </Form>
                </Col>
            </Row>  
            </div>
        </div>
    );
    }
}

export default Contact;