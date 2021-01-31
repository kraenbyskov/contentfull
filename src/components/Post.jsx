import React from 'react'
import { Card, Col } from "react-bootstrap";
import styled from 'styled-components';

const Banner = styled.div`
width:100%;
height:200px;
background-image: url(${props => props.ImageLink});
background-size:cover;
background-position:center;
`

const CardBody = styled(Card.Body)`
min-height:110px;
display:flex;
justify-content:center;
align-items:center;

div{
    margin:0px !important;
}

`

export default function Post({ article }) {
    const { title, courseImage } = article.fields
    return (
        <Col sm={4} style={{ marginBottom: "20px" }}>
            <Card>
                <Card.Link href={`/Post/${article.sys.id}`}>
                    {courseImage && <Banner ImageLink={courseImage.fields.file.url} />}
                </Card.Link>
                <CardBody>
                    <Card.Title className="text-center mb-4">{title}</Card.Title>

                </CardBody>
            </Card>
        </Col>
    )
}
