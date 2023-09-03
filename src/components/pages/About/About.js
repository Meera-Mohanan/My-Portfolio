import React from "react";
import profilepic from "../../../assets/images/profilepic.jpg";
import { Figure, Container, Row, Col } from 'react-bootstrap';
import './about.css';

const AboutMe = () => (
    <Container>
        <Row className="AboutMeRow">
            <Col>
                <Figure>
                    <Figure.Image
                        width={250}
                        height={180}
                        alt="profile"
                         src={profilepic}
                    />
                </Figure>
            </Col>
            <Col xs={7}>
                <div className='AboutMeTitle'>
                    <h2>About Me</h2>
                </div>
                <div className='AboutMeContent'>
                    <p>
                    My name is Meera Mohanan. I live in Perth and currently working in Community Development. I always had passion to learn coding.
                    </p>
                    <p>
                    I am a post-graduate in business administration. I love to play Indian music instrument called 'Veena' and I continue my passion to learn Veena by taking online lessons. I love spending time with friends and travelling . 
                    </p>
                    <p>
                    Currently I am a Bootcamp student of UWA. Learning how to create websites as full stack developer.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
)

export default AboutMe;
