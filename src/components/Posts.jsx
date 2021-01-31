import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Post from './Post'



export default function Posts({ data }) {
    return (
        <CardGroup>
            {data && data.items.map((article, index) => (
                <Post key={index} article={article} />
            ))}
        </CardGroup>
    )
}
