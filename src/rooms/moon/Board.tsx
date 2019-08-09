import * as React from 'react'
import { useState } from 'react'
import { collectionData, db } from '../../Firebase';

const Board = (room: Room) => {

    const [ posts, setPosts ] = useState([])

    collectionData(
        db.collection('posts')
            .where('room', '==', room),
            "id"
    ).subscribe(posts => {
        setPosts(posts)
    })

    return (
        <section>
            { posts.map(post => {
                <article>
                    { post.text }
                </article>
            })}
        </section>
    )

}

export default Board