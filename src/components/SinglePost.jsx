import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from './client'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Card, Container, ListGroup, ListGroupItem, Badge, Col, Row } from "react-bootstrap";
import styled from 'styled-components';


const Banner = styled.div`
width:100%;
height:300px;
background-image: url(${props => props.ImageLink});
background-size:cover;
background-position:center;
`
const Content = ({ data }) => {
    const { title, tags, description, longDescription, courseImage, nutritionPerServings, ingredients } = data.fields
    return (

        <Card>


            {courseImage && <Banner ImageLink={courseImage.fields.file.url} />}


            <Card.Body>

                <Card.Title>{title}</Card.Title>

                <Card.Subtitle dangerouslySetInnerHTML={{ __html: documentToHtmlString(description) }} />
                <Card.Text dangerouslySetInnerHTML={{ __html: documentToHtmlString(longDescription) }} />

                {tags && tags.map((title) => (
                    // <ListGroupItem>{title}</ListGroupItem>
                    <Badge style={{ padding: "10px 20px", margin: "10px" }} variant="secondary">{title}</Badge>
                ))}
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Card.Header>Ingredients</Card.Header>
                            <ListGroup >
                                {ingredients && ingredients.map((title) => (
                                    <ListGroupItem>{title}</ListGroupItem>
                                ))}
                            </ListGroup>

                        </Col>
                        <Col sm={6}>
                            <Card.Header>Nutrition Per Servings</Card.Header>
                            <ListGroup>
                                {nutritionPerServings && nutritionPerServings.map((title) => (
                                    <ListGroupItem>{title}</ListGroupItem>
                                ))}
                            </ListGroup>

                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card >
    )
}



export default function SinglePost() {
    let { id } = useParams();
    const [state, setstate] = useState()

    useEffect(() => {
        client.getEntry(id)
            .then((response) => {
                setstate(response)

            })
            .catch(console.error)
    }, [id])
    return (
        <>
            {state && <Content data={state} />}
        </>
    )
}
