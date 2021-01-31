import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { client } from './client'

export default function FrontPage() {
    const id = "30Q7Z3YPFy1WrMKeVa6jRo"
    const [state, setstate] = useState()
    useEffect(() => {
        client.getEntry(id)
            .then((response) => {
                setstate(response)

            })
            .catch(console.error)
    }, [id])

    return (
        <Card style={{ marginBottom: "50px" }}>
            <Card.Body>
                {state &&
                    <>
                        <Card.Title>{state.fields.title}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: documentToHtmlString(state.fields.description) }} />
                    </>
                }
            </Card.Body>
        </Card >
    )
}
