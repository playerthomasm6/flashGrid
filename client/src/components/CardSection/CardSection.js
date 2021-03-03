import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../Card/Card'
import image from '../../images/favicon.png'

const CardSection = () => {
    const Content = [
        {
          Icon: <img src={image} alt='fg'></img>,
          Title: 'What is flashgrid',
          Content: 'FlashGrid is an project managemnt tool that helps industries to manage the projects,tasks and team plannings.'
        },
        {
          Icon: <img src={image} alt='fg'></img>,
          Title: 'About Us',
          Content: 'Our team is commited to do the work tranparently and having fun along the way we developed this application.'
        },
        {
            Icon: <img src={image} alt='fg'></img>,
            Title: 'Our Platform',
            Content: 'We offer our customers a platform to manage their projects. The admin has permission to create projects which can be broken down into multiple tasks and assigned to those who are working on them.'
          }
    ]
    return (
        <div>
            <Container>
                <Row>
                {Content.map((card, i) => (
                    <Col md={4}>
                        <Card
                        Icon={card.Icon}
                        Title={card.Title}
                        Content={card.Content}
                        />
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default CardSection
